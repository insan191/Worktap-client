import React from 'react'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { categoriesArr } from '../../../utils/categoriesArr'

const ExchangeCap = ({
	search,
	setSearch,
	setCategory,
	category,
	setSubcategory,
	params,
}) => {
	const newParams = !params ? params.category : ''  
	return (
		<>
			<div className='exchange__cap'>
				<div className='container'>
					<div className='exchange__cap-content'>
						<h2 className='exchange__cap-title'>
							Ищите и находите подходящую работу среди
							<br /> <span className='greenText'>10,000+</span> проектов и
							покажите на что Вы способны!
						</h2>
					</div>
				</div>
			</div>
			<div className='exchange__sticky'>
				<div className='container'>
					<div className='exchange__sticky-search'>
						<input
							type='text'
							className='exchange__sticky-search-input'
							placeholder='Какую работу ищете?'
							value={search}
							onChange={e => setSearch(e.target.value)}
						/>
						<button className='exchange__sticky-search-btn'>Найти</button>
					</div>
					<div className='exchange__sticky-categories'>
						{category !== newParams? (
							<>
								<button
									className='exchange__sticky-categories-item back'
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
											className='exchange__sticky-categories-item'
											onClick={() => {
												setSubcategory(value)
											}}
										>
											{text}
										</button>
									))}
								{
									<button
										className='exchange__sticky-categories-item all'
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
										className='exchange__sticky-categories-item'
										onClick={() => setCategory(value)}
									>
										{text}
									</button>
								))}
								<button
									className='exchange__sticky-categories-item all'
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
		</>
	)
}
export default ExchangeCap
