import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "nuvia",
  waitForConnections: true,
  connectionLimit: 10,
});
