// src/app/api/auth/register/route.jsx
import { NextResponse } from 'next/server'
import { hash, compare } from 'bcrypt'
import { database } from '@/db/sql'
import {
	createAsset,
	createAuthor,
	publishAsset,
	publishAuthor
} from '@/lib/contentful/client'

export async function POST(request) {
	try {
		// Get data from request
		let formData = await request.formData()

		// Get the file from the form
		//console.log({ formData })

		// Destructure the fields from the form

		const email = formData.get('email'),
			username = formData.get('username'),
			password = formData.get('password'),
			passwordConfirm = formData.get('passwordConfirm'),
			membership = formData.get('membership'),
			firstName = formData.get('firstName'),
			lastName = formData.get('lastName'),
			address = formData.get('address'),
			phone = formData.get('phone'),
			date = formData.get('date'),
			pfp = formData.get('pfp')

		/* console.log({ resultOfRequest }) */
		// Validation
		if (
			!email ||
			!username ||
			!password ||
			!passwordConfirm ||
			!membership ||
			!firstName ||
			!lastName ||
			!address ||
			!phone ||
			!date ||
			!pfp
		) {
			//console.log('Missing fields')
			return NextResponse.json({
				message: 'Missing fields',
				error: 'Missing fields',
				status: 400
			})
		}

		// Additional validation for email and password
		if (!validateEmail(email)) {
			return NextResponse.json({
				message: 'Invalid email format',
				error: 'Invalid email format',
				status: 400
			})
		}

		if (!validatePassword(password)) {
			return NextResponse.json({
				message: 'Weak password',
				error: 'Weak password',
				status: 400
			})
		}

		if (password !== passwordConfirm) {
			return NextResponse.json({
				message: 'Passwords do not match',
				error: 'Passwords do not match',
				status: 400
			})
		}

		// Check if user already exists
		const existingUser = await database.query(
			'SELECT * FROM users WHERE email = ?',
			[email]
		)

		if (existingUser[0].length > 0) {
			//console.log('User already exists')
			return NextResponse.json({
				message: 'User already exists',
				error: 'User already exists',
				status: 400
			})
		}

		// Insert user into database
		/* const [mysqlResponse] = await database.query(
			'INSERT INTO users (email, username, password, membership, date, phone, address, firstname, lastname) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
			[
				email,
				username,
				await hash(password, 10),
				membership,
				date,
				phone,
				address,
				firstName,
				lastName
			]
		) */

		//console.log({ mysqlResponse })

		// Create asset in contentful
		//console.log(`${username}'s profile picture`, 'image/png', pfp)
		const assetCreated = await createAsset(
			`${username}s profile picture`, // Title / Name / Filename / Asset name
			`${username}s profile picture`, // Description / Caption / Alt text
			'image/png', // File type (MIME type) / fileType / contentType
			pfp // File / Buffer
		)

		//console.log({ assetCreated })

		// Publish asset
		const assetPublished = await publishAsset(assetCreated.sys.id)

		//console.log({ assetPublished })

		/* // Create author in contentful
		const authorCreated = await createAuthor({
			email: email,
			username: username,
			profilePicture: assetPublished.sys.id,
			address: address,
			date: date,
			membership: membership,
			phone: phone,
			firstName: firstName,
			lastName: lastName
		})

		//console.log({ authorCreated })

		// Publish author

		const authorPublished = await publishAuthor(authorCreated.sys.id) */

		//database.end()
		return NextResponse.json({ message: 'User created', status: 200 })
	} catch (error) {
		console.error(error)
		return NextResponse.json({
			message: 'Server error',
			error: 'Server error',
			status: 500
		})
	} finally {
		// Ensure the database connection is closed
		//await database.end()
	}
}

function validateEmail(email) {
	// Implement your email validation logic here
	// For example, using a regular expression
	const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
	return regex.test(email)
}

function validatePassword(password) {
	// Implement your password validation logic here
	// For example, checking length and presence of uppercase, lowercase, numbers, and special characters
	const regex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
	return regex.test(password)
}
