import React from 'react'
import HomeActual from './HomeActual/HomeActual'
import HomeBegin from './HomeBegin/HomeBegin'
import HomeGuide from './HomeGuide/HomeGuide'
import HomePromo from './HomePromo/HomePromo'
import HomeRating from './HomeRating/HomeRating'
const Home = () => {
	return (
		<div className='home'>
			<HomeBegin />
			<HomeActual />
			<HomeRating />
			<HomeGuide />
			<HomePromo />
		</div>
	)
}

export default Home
