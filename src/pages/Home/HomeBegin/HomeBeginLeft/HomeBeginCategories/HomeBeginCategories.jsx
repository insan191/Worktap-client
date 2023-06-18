import React from 'react'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { categoriesArr } from '../../../../../utils/categoriesArr'

const HomeBeginCategories = ({ category, setCategory }) => {
	const nav = useNavigate()
	return (
		<>
			<h3 className='home__begin-left-subtitle'>
				Выберите рубрику, чтобы начать
			</h3>
			<div className='home__begin-left-categories'>
				{category !== '' ? (
					<>
						<button
							className='home__begin-left-categories-item back'
							onClick={() => setCategory('')}
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
									className='home__begin-left-categories-item'
									onClick={() => {
										nav(`/exchange/${category}/${value}`)
									}}
								>
									{text}
								</button>
							))}
						{
							<button
								className='home__begin-left-categories-item all'
								onClick={() => {
									nav(`/exchange/${category}`)
								}}
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
								className='home__begin-left-categories-item'
								onClick={() => setCategory(value)}
							>
								{text}
							</button>
						))}
						<button
							className='home__begin-left-categories-item all'
							onClick={() => nav('/exchange')}
						>
							Все категории
						</button>
					</>
				)}
			</div>
		</>
	)
}

export default HomeBeginCategories
