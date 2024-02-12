import { createClient } from 'contentful'

export const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export const getEntriesByType = async type => {
	try {
		const response = await client.getEntries({
			content_type: type
		})

		return response.items
	} catch (error) {
		console.error('Error fetching content from Contentful:', error)
		return []
	}
}

export const getEvents = async () => {
	const results = await getEntriesByType('event')
	return results
}

export const getBlogPosts = async () => {
	const results = await getEntriesByType('blogPost')
	return results
}

export const getBlogPost = async (id) => {
	const response = await client.getEntry(id)
	return response
}
