import React from 'react'
import OrderInfo from './OrderInfo/OrderInfo'
import './Order.scss'

const Order = () => {
	return (
		<div className='order'>
			<div className="container">
				<div className="order__content">
					<OrderInfo/>
				</div>
			</div>
		</div>
	)
}

export default Order