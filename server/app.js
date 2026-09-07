import express from "express";
import { checkDb } from "./config/db.js";

const app = express();
app.use(express.json());

app.get("/health", async (req, res) => {
  const start = Date.now();
  await checkDb();
  res.status(200).json({ db: "up", latencyMs: Date.now() - start });
});

// mount routers here, e.g. app.use('/api/items', itemsRouter);

//404 handler - must come after all other routes
app.use((req, res) => {
  res.status(404).json({ error: "PAGE NOT FOUND" });
});

/// central error handler — must have 4 params and come last
app.use((err, req, res, next) => {
  console.error(err);
  const status =
    err.code === "ECONNREFUSED" || err.message?.includes("timeout") ? 503 : 500;
  res.status(status).json({
    error: status === 503 ? "database unreachable" : "internal error",
  });
});

export default app;
