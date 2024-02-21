// src/db/sql.jsx
import mysql from 'mysql2/promise'
const database = await mysql.createConnection({
	host: process.env.MYSQL_HOST,
	port: process.env.MYSQL_PORT,
	database: process.env.MYSQL_DATABASE,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	waitForConnections: true,
})

export { database }