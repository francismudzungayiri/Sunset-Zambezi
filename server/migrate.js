import "dotenv/config";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { neon } from "@neondatabase/serverless";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sql = neon(process.env.DATABASE_URL);

const migrationsDir = path.join(__dirname, "migrations");

const files = (await fs.readdir(migrationsDir))
  .filter((file) => file.endsWith(".sql"))
  .sort();

await sql`
    CREATE TABLE IF NOT EXISTS schema_migrations (
        filename VARCHAR(255) PRIMARY KEY,
        applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`;

const applied = await sql`
    SELECT filename
    FROM schema_migrations
`;

const appliedFiles = applied.map((row) => row.filename);

for (const file of files) {
  if (appliedFiles.includes(file)) {
    continue;
  }

  const filePath = path.join(migrationsDir, file);
  const migration = await fs.readFile(filePath, "utf8");

  console.log(`Running ${file}...`);

  await sql.unsafe(migration);

  await sql`
        INSERT INTO schema_migrations (filename)
        VALUES (${file})
    `;

  console.log(`Applied ${file}`);
}

console.log("Migrations complete.");
