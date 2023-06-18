import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { useParams } from 'react-router-dom'
import { useGetOrderQuery } from '../../../redux/reducers/api/order'
import { categoriesArr } from '../../../utils/categoriesArr'

const OrderInfo = () => {
	const { id } = useParams()
	const { data = {}, isLoading } = useGetOrderQuery(id)
	if (isLoading) {
		return <h2>loading...</h2>
	}
	const {
		title,
		description,
		category,
		subcategory,
		deadline,
		budget,
		// creator,
	} = data
	const breadCategory = () => {
		return categoriesArr.find(({ value }) => value === category).text
	}
	const breadSubcategory = () => {
		return categoriesArr
			.find(({ value }) => value === category)
			.subcategories.find(({ value }) => value === subcategory).text
	}
	return (
		<div className='order__info'>
			<div className='order__main'>
				<div className='order__main-top'>
					<h2 className='order__main-title'>{title}</h2>
					<div className='order__main-block'>
						<p className='order__main-budget'>{budget}</p>
						<p className='order__main-deadline'>{deadline}</p>
					</div>
				</div>
				<div className='order__main-breadcrumbs'>
					<p className='order__main-breadcrumbs-item'>{breadCategory()}</p>
					<span>
						<IoIosArrowForward fill=' #b0aad0' />
					</span>
					<p className='order__main-breadcrumbs-item'>{breadSubcategory()}</p>
					<span>
						<IoIosArrowForward fill=' #b0aad0' />
					</span>
					<p className='order__main-breadcrumbs-item'>{title}</p>
				</div>
				<p className='order__main-description'>{description}</p>
			</div>
		</div>
	)
}

export default OrderInfo
