'use client'
import { signOut } from 'next-auth/react'

export default function Logout() {
	return (
		<p className='text-center flex flex-col cursor-pointer text-accent hover:underline'
			onClick={() => {
				signOut()
			}}>
			Logout
		</p>
	)
}
