import { NextResponse } from 'next/server'
import { hash } from 'bcrypt'
import { sql } from '@vercel/postgres'
export async function POST(request) {
	try {
		const { email, username, password } = await request.json()
		// Validation
		console.log({
			email,
			username,
			password
        })
        const hashedPassword = await hash(password, 10);

        const response = await sql`
            INSERT INTO users (email, username, password)
            VALUES (${email}, ${username}, ${hashedPassword})
        `
	} catch (error) {
		console.log({ error })
	}

	return NextResponse.json({ message: 'Success' })
}
