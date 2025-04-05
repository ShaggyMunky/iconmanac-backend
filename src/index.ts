import express from "express";
import cors from "cors";
import { connectDB } from "./db/db";

import starRoutes from "./routes/starRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/star", starRoutes);

connectDB();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
