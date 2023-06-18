import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'
const Layout = () => {
	return (
		<div className='layout'>
			<Header />
			<main className='main'>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default Layout
