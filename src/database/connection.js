import sql from "mssql";

const dbSettings = {
  user: "abel",
  password: "123",
  server: "localhost",
  database: "abeldb",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.log(error);
  }
}
