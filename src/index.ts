import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import sql from "./config/db";
import { connectDB } from "./config/db";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello from Node.js + TypeScript backend!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.get("/talent", async (req, res) => {
  try {
    const result = await sql.query(
      "SELECT * FROM Talent WHERE TalentId = 'BACE066F-1E09-4423-A954-250072693A6D'"
    );
    let talent = result.recordset[0] || null;
    res.json(talent);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Talent", error });
  }
});
