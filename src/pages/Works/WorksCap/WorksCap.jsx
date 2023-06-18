import React from 'react'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { categoriesArr } from '../../../utils/categoriesArr.js'

const WorksCap = ({
	search,
	setSearch,
	setCategory,
	category,
	setSubcategory,
}) => {
	return (
		<div className='works__cap'>
			<div className='container'>
				<div className='works__cap-search'>
					<input
						type='text'
						className='works__cap-search-input'
						placeholder='Какую работу ищете?'
						value={search}
						onChange={e => setSearch(e.target.value)}
					/>
					<button className='works__cap-search-btn'>Найти</button>
				</div>
				<div className='works__cap-categories'>
					{category !== '' ? (
						<>
							<button
								className='works__cap-categories-item back'
								onClick={() => {
									setCategory('')
									setSubcategory('')
								}}
							>
								<span>
									<MdOutlineKeyboardArrowLeft fill='#1dbf73' size='20px' />
								</span>

								{categoriesArr.find(({ value }) => value === category).text}
							</button>
							{categoriesArr
								.find(({ value }) => value === category)
								.subcategories.map(({ value, text }) => (
									<button
										key={value}
										className='works__cap-categories-item'
										onClick={() => {
											setSubcategory(value)
										}}
									>
										{text}
									</button>
								))}
							{
								<button
									className='works__cap-categories-item all'
									onClick={() => setSubcategory('')}
								>
									Все подкатегории
								</button>
							}
						</>
					) : (
						<>
							{categoriesArr.map(({ value, text }) => (
								<button
									key={value}
									className='works__cap-categories-item'
									onClick={() => setCategory(value)}
								>
									{text}
								</button>
							))}
							<button
								className='works__cap-categories-item all'
								onClick={() => {
									setCategory('')
									setSubcategory('')
								}}
							>
								Все категории
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default WorksCap
