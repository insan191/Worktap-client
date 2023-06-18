import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Exchange from '../pages/Exchange/Exchange'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import MyProfile from '../pages/MyProfile/MyProfile'
import Order from '../pages/Order/Order'
import Register from '../pages/Register/Register'
import Work from '../pages/Work/Work'
import Works from '../pages/Works/Works'

const AuthRouting = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='' element={<Home />} />
				<Route path='exchange/:category?/:subcategory?' element={<Exchange />} />
				<Route path='myprofile/:id' element={<MyProfile />} />
				<Route path='work/:id' element={<Work />} />
				<Route path='works' element={<Works />} />
				<Route path='order/:id' element={<Order />} />
			</Route>
			<Route path='register' element={<Register />} />
			<Route path='login' element={<Login />} />
			<Route path='*' element={<Navigate to={'/login'} />} />
		</Routes>
	)
}

export default AuthRouting
