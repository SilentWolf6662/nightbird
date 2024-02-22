// Filen navn skal være route.jsx og skal ligge i en mappe med samme navn som pathen jeg ville have.
// Eksempel: src/app/api/contact/route.jsx

import { NextResponse } from 'next/server'
function validateName(name) {
	if (name === '') {
		return 'Please enter your name.'
	}

	return 'Ok'
}

function validateMessage(message) {
	if (message === '') {
		return 'Please enter your message.'
	}

	return 'Ok'
}

function validateEmail(email) {
	const mailFormat = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+.+[a-z]{2,4}$')
	const emailStr = `${email}`.toLowerCase()

	if (emailStr === '') {
		return 'Please enter a email address.'
	}

	if (!emailStr.includes('@')) {
		return 'You are missing the "@" symbol. Please enter a valid email address.'
	}

	if (!emailStr.includes('.')) {
		return 'You are missing the "." symbol. Please enter a valid email address.'
	}

	if (emailStr.indexOf('@') > emailStr.lastIndexOf('.')) {
		return 'There needs to be a "." after "@" symbol. Please enter a valid email address.'
	}

	if (!mailFormat.test(emailStr)) {
		return 'Please enter a valid email address.'
	}

	return 'Ok'
}
function validateForm({ name, email, message }) {
	const nameValid = validateName(name)
	const emailValid = validateEmail(email)
	const messageValid = validateMessage(message)

	/* console.log('nameValid', nameValid)
	console.log('emailValid', emailValid)
	console.log('messageValid', messageValid) */

	if (nameValid !== 'Ok') {
		return nameValid
	} else if (nameValid === 'Ok') {
		if (emailValid !== 'Ok') return emailValid
		else if (emailValid === 'Ok') {
			if (messageValid !== 'Ok') return messageValid
			else if (messageValid === 'Ok') return 'Ok'
		}
	}
}

function sendMessage(formData) {
	if (formData.length > 0) {
		return 'No name or email or message entered'
	}
	const response = validateForm({
		name: formData.get('name'),
		email: formData.get('email'),
		message: formData.get('message')
	})

	//console.log('response', response)

	return response
}
export async function GET(request) {
	return NextResponse.json(
		{
			message: 'Method not allowed'
		},
		{
			error: 'Method not allowed'
		},
		{
			statusText: 'Method not allowed'
		},
		{
			status: 405
		}
	)
}
export async function POST(request) {
	try {
		// Get data from request
		let formData = await request.formData()

		const response = sendMessage(formData)
		//console.log('response Server', response)
		if (response === 'Ok') {
			return NextResponse.json(
				{
					message:
						"We got your message. We'll get back to you as soon as possible"
				},
				{
					statusText:
						"We got your message. We'll get back to you as soon as possible"
				},
				{ status: 200 }
			)
		} else {
			return NextResponse.json(
				{ message: response },
				{ error: response },
				{ statusText: response },
				{ status: 400 }
			)
		}
	} catch (error) {
		console.error(error)
		return NextResponse.json(
			{ message: 'Server error' },
			{ error: 'Server error' },
			{ statusText: 'Server error' },
			{ status: 500 }
		)
	}
}
