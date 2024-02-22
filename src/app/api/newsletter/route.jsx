// Filen navn skal være route.jsx og skal ligge i en mappe med samme navn som pathen jeg ville have.
// Eksempel: src/app/api/newsletter/route.jsx

import { NextResponse } from 'next/server'
function validateName(name) {
	if (name === '') {
		return 'Please enter your name.'
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

	//console.log('test Regex 1', mailFormat.test(emailStr))
	//console.log('test Regex 2', emailStr.match(mailFormat))

	if (!mailFormat.test(emailStr)) {
		return 'Please enter a valid email address.'
	}
	if (!emailStr.match(mailFormat)) {
		return 'Please enter a valid email address.'
	}

	return 'Ok'
}
function validateForm({ name, email }) {
	const nameValid = validateName(name)
	const emailValid = validateEmail(email)

	if (nameValid !== 'Ok') {
		return nameValid
	} else if (nameValid === 'Ok') {
		if (emailValid !== 'Ok') return emailValid
		else if (emailValid === 'Ok') return 'Ok'
	}
}

function subscribeNews(formData) {
	if (formData.length > 0) {
		return 'No name or email entered'
	}
	const response = validateForm({
		name: formData.get('name'),
		email: formData.get('email')
	})

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

		const response = subscribeNews(formData)
		//console.log('response Server', response)
		if (response === 'Ok') {
			return NextResponse.json(
				{
					message: 'Subscribed to newsletter'
				},
				{ statusText: 'Subscribed to newsletter' },
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
