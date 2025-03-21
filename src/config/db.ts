import sql from "mssql";
import dotenv from "dotenv";

dotenv.config();

const dbConfig: sql.config = {
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

export const connectDB = async () => {
  try {
    await sql.connect(dbConfig);
    console.log("✅ Connected to SQL Server");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
};

export default sql;
