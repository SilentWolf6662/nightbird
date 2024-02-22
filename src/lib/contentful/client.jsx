// src/lib/contentful/functions.jsx
// Code to interact with Contentful's Content Delivery API (CDA) import { createClient } from 'contentful'
// Code to interact with Contentful's Content Management API (CMA) import { createClient } from 'contentful-management'
import { createClient } from 'contentful-management'

const contentAccessTokenCDA = '9cHvs5upn0jqALSZurbreFna31lvkkilIb0pXnHDE-U'
const contentAccessTokenCMA =
	'CFPAT-zT1dZDdaTX_D65RE1idc1-EN6UctFk0L46c3LjiXdgg'
const contentSpaceId = 'o8ct8dldef1a'
const contentEnvironmentId = 'master'

// console.log('Contentful Access Token (CMA):', contentAccessTokenCMA)
// console.log('Contetnful Access Token (CDA):', contentAccessTokenCDA)
// console.log('Contentful Space ID:', contentSpaceId)
// console.log('Contentful Environment ID:', contentEnvironmentId)

export const createCMAClient = async () => {
	// console.log('Creating Contentful client (CMA)...')
	return createClient({
		accessToken: contentAccessTokenCMA,
		space: contentSpaceId
	})
}

export const createCDAClient = async () => {
	// console.log('Creating Contentful client (CDA)...')
	return createClient({
		accessToken: contentAccessTokenCDA,
		space: contentSpaceId
	})
}

export const getContentfulEnvironment = async () => {
	const client = await createCMAClient()
	return client
		.getSpace(contentSpaceId)
		.then(space => space.getEnvironment(contentEnvironmentId))
		.catch(err => {
			console.error('Error getting environment:', err)
			throw err
		})
}

export const getContentfulSpace = async () => {
	const client = await createCMAClient()
	return client.getSpace(contentSpaceId).catch(err => {
		console.error('Error getting space:', err)
		throw err
	})
}

export const getEntry = async id => {
	const environment = await getContentfulEnvironment()
	return await environment.getEntry(id)
}

export const getEntryByField = async (contentTypeId, field, value) => {
	const environment = await getContentfulEnvironment()
	const entries = await environment.getEntries({
		content_type: contentTypeId,
		[field]: value
	})
	return entries.items[0] || null
}

export const getEntriesByType = async contentTypeId => {
	const environment = await getContentfulEnvironment()
	const entries = await environment.getEntries({
		content_type: contentTypeId
	})
	return entries.items
}

export const getEvents = async () => {
	const results = await getEntriesByType('event')
	return results
}

export const getBlogPosts = async () => {
	const results = await getEntriesByType('blogPost')
	return results
}

export const getBlogPost = async id => {
	const response = await getEntry(id)
	return response
}

export const createAsset = async (
	fileTitle,
	fileDescription,
	fileType,
	file
) => {
	try {
		const environment = await getContentfulEnvironment()
		const upload = await environment.createUpload({
			file,
			filename: fileTitle,
			contentType: fileType
		})

		const asset = await environment.createAsset({
			fields: {
				title: {
					'en-US': fileTitle
				},
				description: {
					'en-US': fileDescription
				},
				file: {
					'en-US': {
						fileName: `${fileTitle}.${fileType.split('/')[1]}`,
						contentType: fileType,
						uploadFrom: {
							sys: {
								type: 'Link',
								linkType: 'Upload',
								id: upload.sys.id
							}
						}
					}
				}
			}
		})

		return asset
	} catch (error) {
		throw error
	}
}

export const updateAsset = async (id, file) => {
	try {
		const environment = await getContentfulEnvironment()
		const asset = await environment.getAsset(id)
		asset.fields.file['en-US'].fileName = file.name
		asset.fields.file['en-US'].contentType = file.type
		asset.fields.file['en-US'].uploadFrom.sys.id = file.id
		const updatedAsset = await asset.update()
		return updatedAsset
	} catch (error) {
		throw error
	}
}

export const publishAsset = async id => {
	try {
		const response = await createCMAClient().publishAsset(id)
		// console.log('Asset published:', response)
		return response
	} catch (error) {
		console.error('Error publishing asset:', error)
		return null
	}
}

export const deleteAsset = async id => {
	try {
		const response = await createCMAClient().deleteAsset(id)
		// console.log('Asset deleted:', response)
		return response
	} catch (error) {
		console.error('Error deleting asset:', error)
		return null
	}
}

export const getAsset = async id => {
	try {
		const environment = await getContentfulEnvironment()
		const response = await environment.getAsset(id)
		// console.log('Asset fetched:', response)
		return response
	} catch (error) {
		console.error('Error fetching asset:', error)
		return null
	}
}

export const getAssetUrl = async id => {
	const asset = await getAsset(id)
	return asset.fields.file['en-US'].url
}

export const getAssetUrlByField = async field => {
	const asset = await getAsset(field.sys.id)
	return asset.fields.file['en-US'].url
}

export const createEntry = async (contentTypeId, fields) => {
	try {
		const space = await getSpace()
		const entry = await space.createEntry(contentTypeId, {
			fields: Object.keys(fields).reduce((acc, key) => {
				acc[key] = { 'en-US': fields[key] }
				return acc
			}, {})
		})
		// console.log('Entry created:', entry)
		return entry
	} catch (error) {
		console.error('Error creating entry:', error)
		throw error // Consider returning a meaningful error response
	}
}

export const updateEntry = async (id, fields) => {
	try {
		const response = await createCMAClient().updateEntry(id, {
			fields
		})
		// console.log('Entry updated:', response)
		return response
	} catch (error) {
		console.error('Error updating entry:', error)
		return null
	}
}

export const publishEntry = async id => {
	try {
		const response = await createCMAClient().publishEntry(id)
		// console.log('Entry published:', response)
		return response
	} catch (error) {
		console.error('Error publishing entry:', error)
		return null
	}
}

export const deleteEntry = async id => {
	try {
		const response = await createCMAClient().deleteEntry(id)
		// console.log('Entry deleted:', response)
		return response
	} catch (error) {
		console.error('Error deleting entry:', error)
		return null
	}
}

export const createBlogPost = async fields => {
	const response = await createEntry('blogPost', fields)
	// console.log('createBlogPost response:', response)
	return response
}

export const updateBlogPost = async (id, fields) => {
	const response = await updateEntry(id, fields)
	// console.log('updateBlogPost response:', response)
	return response
}

export const publishBlogPost = async id => {
	const response = await publishEntry(id)
	// console.log('publishBlogPost response:', response)
	return response
}

export const deleteBlogPost = async id => {
	const response = await deleteEntry(id)
	// console.log('deleteBlogPost response:', response)
	return response
}

export const createEvent = async fields => {
	const response = await createEntry('event', fields)
	// console.log('createEvent response:', response)
	return response
}

export const updateEvent = async (id, fields) => {
	const response = await updateEntry(id, fields)
	// console.log('updateEvent response:', response)
	return response
}

export const publishEvent = async id => {
	const response = await publishEntry(id)
	// console.log('publishEvent response:', response)
	return response
}

export const deleteEvent = async id => {
	const response = await deleteEntry(id)
	// console.log('deleteEvent response:', response)
	return response
}

export const createAuthor = async fields => {
	const response = await createEntry('author', fields)
	// console.log('createAuthor response:', response)
	return response
}

export const updateAuthor = async (id, fields) => {
	const response = await updateEntry(id, fields)
	// console.log('updateAuthor response:', response)
	return response
}

export const publishAuthor = async id => {
	const response = await publishEntry(id)
	// console.log('publishAuthor response:', response)
	return response
}

export const deleteAuthor = async id => {
	const response = await deleteEntry(id)
	// console.log('deleteAuthor response:', response)
	return response
}

export const getAuthor = async id => {
	const response = await getEntry(id)
	// console.log('getAuthor response:', response)
	return response
}

export const getAuthorByUsername = async username => {
	try {
		const environment = await getContentfulEnvironment()
		const entries = await environment.getEntries({
			content_type: 'author',
			'fields.username': username
		})

		if (entries.items.length > 0) {
			return entries.items[0]
		} else {
			throw new Error('No author found with the provided username')
		}
	} catch (error) {
		throw error
	}
}

export const getAuthorByRealName = async (firstName, lastName) => {
	try {
		const environment = await getContentfulEnvironment()
		const entries = await environment.getEntries({
			content_type: 'author',
			'fields.firstName': firstName,
			'fields.lastName': lastName
		})

		if (entries.items.length > 0) {
			return entries.items[0]
		} else {
			throw new Error(
				'No author found with the provided first and last name'
			)
		}
	} catch (error) {
		throw error
	}
}
