export default async function Event({ content }) {
	const markup = { __html: content }
	return (
		<p
			className='text-primary/80 mb-2 mt-4'
			dangerouslySetInnerHTML={markup}></p>
	)
}
