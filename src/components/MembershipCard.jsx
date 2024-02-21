import { FaCheck, FaXmark } from 'react-icons/fa6'
export default function MembershipCard({
	title = 'Free',
	price = 0,
	features = [false, false, false, false, false, false, false, false],
	popular = false,
	stripe = false
}) {
	const getFeatureValue = feature => {
		if (feature === true) {
			return <FaCheck className='w-5 h-5' />
		} else if (feature === false) {
			return <FaXmark className='w-5 h-5' />
		}
	}
	const getClass = () => {
        if (stripe) {
			return `md:w-1/4 w-full md:mt-px border-2 border-gray-300 md:border-0 md:border-r`
        }
        if (popular) {
			return `md:w-1/4 md:-mt-px w-full md:mb-0 border-2 border-accent relative`
        }
        return `md:w-1/4 w-full md:mt-px border-2 border-gray-300 md:border-none md:border`
	}
	const addBadge = () => {
		if (popular) {
			return (
				<div className='bg-accent text-white text-[0.6rem] font-semibold uppercase tracking-widest absolute top-0 right-0 transform py-1 px-2 rounded-sm'>
					Popular
				</div>
			)
		} else {
			return null
		}
	}
	const yearlyPrice = () => {
		if (price === 0) {
			return 'Free'
		} else {
			return `$${price * 12}`
		}
	}
	const quarterlyPrice = () => {
		if (price === 0) {
			return 'Free'
		} else {
			return `$${price * 3}`
		}
	}
	return (
		<div className={getClass()}>
			{addBadge()}
			<div className='px-2 text-center h-48 flex flex-col items-center justify-center'>
				<h3 className='tracking-widest capitalize'>{title}</h3>
				<h2 className='text-5xl text-primary/90 font-medium flex items-center justify-center leading-none mb-4 mt-2'>
					{`$${price}`}
					<span className='text-primary/60 text-base ml-1'>/mo</span>
				</h2>
				<span className='text-sm text-primary/60'>
					{`Charged once a month`}
				</span>
			</div>
			<p className='text-primary/60 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300'>
				{getFeatureValue(features[0])}
			</p>
			<p className='bg-primary/10 text-primary/60 text-center h-12 flex items-center justify-center'>
				{getFeatureValue(features[1])}
			</p>
			<p className='text-primary/60 text-center h-12 flex items-center justify-center'>
				{getFeatureValue(features[2])}
			</p>
			<p className='bg-primary/10 text-primary/60 text-center h-12 flex items-center justify-center'>
				{getFeatureValue(features[3])}
			</p>
			<p className='text-primary/60 text-center h-12 flex items-center justify-center'>
				{getFeatureValue(features[4])}
			</p>
			<p className='bg-primary/10 text-primary/60 text-center h-12 flex items-center justify-center'>
				{getFeatureValue(features[5])}
			</p>
			<p className='text-primary/60 text-center h-12 flex items-center justify-center'>
				{getFeatureValue(features[6])}
			</p>
			<p className='bg-primary/10 text-primary/60 text-center h-12 flex items-center justify-center'>
				{getFeatureValue(features[7])}
			</p>
		</div>
	)
}
