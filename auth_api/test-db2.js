const mysql = require('mysql2/promise');

async function test() {
  try {
    const pool = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "Riyabhimani@2005",
      database: "meetingManegment"
    });

    const [rows] = await pool.execute('SELECT * FROM users');
    console.log("Success! Users found:", rows.length);
  } catch (error) {
    console.error("Database connection or query failed:");
    console.error(error);
  } finally {
    process.exit(0);
  }
}

test();
