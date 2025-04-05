import dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(__dirname, "../config/.env") });

export const dbConfig = {
  server: process.env.DB_SERVER as string,
  database: process.env.DB_DATABASE as string,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT) || 1433,
  options: {
    encrypt: false,
    trustServerCertificate: true,
    // trustedConnection: true
  },
};
