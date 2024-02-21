// src/app/api/auth/%5B...nextauth%5D/route.jsx
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import { compare } from 'bcrypt'
import { database } from '@/db/sql'

const handler = NextAuth({
	session: {
		strategy: 'jwt'
	},
	providers: [
		CredentialsProvider({
			// The name to display on the sign in form (e.g. 'Sign in with...')
			name: 'Credentials',
			// The credentials is used to generate a suitable form on the sign in page.
			// You can specify whatever fields you are expecting to be submitted.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {
				email: {},
				username: {},
				password: {},
			},
			async authorize(credentials, req) {
				// Add logic here to look up the user from the credentials supplied
				//console.log({ credentials })

				const response = await database.query(
					'SELECT * FROM users WHERE email = ?',
					[credentials?.email]
				)

				const user = response[0][0]

				const passwordCurrect = await compare(
					credentials?.password || '',
					user.password
				)

				if (passwordCurrect) {
					//console.log({ user })
					//database.end()
					return {
						id: user.id,
						email: user.email,
						username: user.username,
						firstName: user.firstName,
						lastName: user.lastName,
						address: user.address,
						phone: user.phone,
						date: user.date,
						pfp: user.pfp,
						membership: user.membership
					}
				}

				//database.end()
				return null
			}
		})
	]
})

export { handler as GET, handler as POST }
