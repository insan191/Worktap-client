import React from 'react'

const ExchangeFilter = ({
	setCriteria,
	criteria,
	minNumber,
	setMinNumber,
	maxNumber,
	setMaxNumber,
	ordersCount,
}) => {
	const criteriaArr = [
		{ order: 'title,1', title: 'От А до Я' },
		{ order: 'title,-1', title: 'От Я до А' },
		{ order: 'budget,1', title: 'По возрастанию цены' },
		{ order: 'budget,-1', title: 'По убыванию цены' },
	]
	return (
		<div className='exchange__filter'>
			<h2 className='exchange__filter-exchangeCount'>Заказов: {ordersCount}</h2>
			<div className='exchange__filter-right'>
				<div className='exchange__filter-limit'>
					<input
						type='number'
						value={minNumber}
						onChange={e => setMinNumber(e.target.value)}
						className='exchange__filter-limit-field'
						placeholder='Минимальная цена'
					/>
					<div className='exchange__filter-limit-line'></div>
					<input
						type='number'
						value={maxNumber}
						onChange={e => setMaxNumber(e.target.value)}
						className='exchange__filter-limit-field'
						placeholder='Максимальная цена'
					/>
				</div>
				<select
					className='exchange__filter-select'
					value={criteria}
					onChange={e => setCriteria(e.target.value)}
				>
					{criteriaArr.map(({ order, title }, idx) => (
						<option key={idx} value={order}>
							{title}
						</option>
					))}
				</select>
			</div>
		</div>
	)
}

export default ExchangeFilter
