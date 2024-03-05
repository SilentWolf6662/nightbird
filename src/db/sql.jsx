// src/db/sql.jsx
import mysql from 'mysql2/promise'
const database = await mysql.createConnection({
	host: '127.0.0.1',
	port: '3306',
	database: 'nightbird',
	user: 'nightbird',
	password: 'CoRiFIqoK7RIn1nAQonopAfiGo5OR7',
	waitForConnections: true
})

export { database }
