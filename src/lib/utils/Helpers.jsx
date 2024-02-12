'use client'
import { usePathname } from 'next/navigation'
// regex patterns
const regExPatterns = {
	telephone: /^\d{11}$/,
	username: /^[a-z\d]{5,12}$/i,
	password: /^[\d\w@-]{8,20}$/i,
	slug: /^[a-z\d-]{8,20}$/,
	email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.(\w{2,8})(\.\w{2,8})?$/gi
	//             yourname @ domain   .  com          ( .uk )
}

function getCurDate(date) {
	let yourDate = new Date(date)

	if (isNaN(yourDate.getTime())) {
		return '' // Return an empty string if the date is invalid
	}

	const offset = yourDate.getTimezoneOffset()
	yourDate = new Date(yourDate.getTime() - offset * 60 * 1000)
	return yourDate.toISOString().split('T')[0]
}

function formatDate(date) {
	let dateToFormat = new Date(date),
		dateString = '',
		month = `${dateToFormat.getMonth() + 1}`,
		day = `${dateToFormat.getDate()}`,
		year = dateToFormat.getFullYear(),
		monthName = dateToFormat.toLocaleString('default', { month: 'long' })

	if (month.length < 2) month = `0${month}`
	if (day.length < 2) day = `0${day}`

	dateString = `${day}. ${monthName} ${year}`

	return dateString
}

const getBlogID = usePathname().replace('/blog/', '')

const getEventID = usePathname().replace('/events/', '')

export { getCurDate, formatDate, regExPatterns, getBlogID, getEventID }
