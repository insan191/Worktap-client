import React from 'react'
import { criteriaArr } from '../../../utils/criteriaArr'
const WorksFilter = ({
	setCriteria,
	criteria,
	minNumber,
	setMinNumber,
	maxNumber,
	setMaxNumber,
	worksCount,
}) => {
	return (
		<div className='works__filter'>
			<h2 className='works__filter-worksCount'>Работ: {worksCount}</h2>
			<div className='works__filter-right'>
				<div className='works__filter-limit'>
					<input
						type='number'
						value={minNumber}
						onChange={e => setMinNumber(e.target.value)}
						className='works__filter-limit-field'
						placeholder='Минимальная цена'
					/>
					<div className='works__filter-limit-line'></div>
					<input
						type='number'
						value={maxNumber}
						onChange={e => setMaxNumber(e.target.value)}
						className='works__filter-limit-field'
						placeholder='Максимальная цена'
					/>
				</div>
				<select
					className='works__filter-select'
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

export default WorksFilter
