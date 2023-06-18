import React, { useState } from 'react'
import HomeBeginCategories from './HomeBeginCategories/HomeBeginCategories'

const HomeBeginLeft = () => {	const [search, setSearch] = useState('')
	const [category, setCategory] = useState('')
	return (
		<div className='home__begin-left'>
			<h2 className='home__begin-left-title'>
				Покупайте фриланс-услуги в <span className='greenText'>два клика</span>
			</h2>
			<p className='home__begin-left-desc'>
				Ворк — единица работы продавца, которую можно купить как товар в
				магазине
			</p>
			<div className='home__begin-left-search'>
				<input
					type='text'
					value={search}
					onChange={e => setSearch(e.target.value)}
					className='home__begin-left-search-input'
					placeholder='Что нужно сделать?'
				/>
				<button className='home__begin-left-search-btn'>Найти</button>
			</div>
			<HomeBeginCategories setCategory={setCategory} category={category} />
		</div>
	)
}

export default HomeBeginLeft
