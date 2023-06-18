import React from 'react'
import './HomeBegin.scss'
import HomeBeginLeft from './HomeBeginLeft/HomeBeginLeft'
import HomeBeginRight from './HomeBeginRight/HomeBeginRight'
const HomeBegin = () => {
	return (
		<div className='home__begin'>
			<div className='container'>
				<div className='home__begin-content'>
					<HomeBeginLeft />
					<HomeBeginRight />
				</div>
			</div>
		</div>
	)
}

export default HomeBegin
