import "dotenv/config";
import pg from "pg";

// checking if the environment variables are set especilly the DATABASE_URL
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

export const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  max: 10,
  idleTimeoutMillis: 30_000,
});

pool.on("error", (err) => {
  console.error("Unexpected idle client error:", err.message);
});

export async function checkDb(timeoutMs = 3000) {
  await pool.query({ text: "SELECT 1", query_timeout: timeoutMs });
}
