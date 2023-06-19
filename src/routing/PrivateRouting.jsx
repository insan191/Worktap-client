import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import CreateOrder from '../pages/CreateOrder/CreateOrder'
import CreateWork from '../pages/CreateWork/CreateWork'
import Exchange from '../pages/Exchange/Exchange'
import Home from '../pages/Home/Home'
import Messenger from '../pages/Messenger/Messenger'
import MyProfile from '../pages/MyProfile/MyProfile'
import Order from '../pages/Order/Order'
import Work from '../pages/Work/Work'
import Works from '../pages/Works/Works'
const PrivateRouting = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='' element={<Home />} />
				<Route
					path='exchange/:category?/:subcategory?'
					element={<Exchange />}
				/>
				<Route path='myprofile/:id' element={<MyProfile />} />
				<Route path='work/:id' element={<Work />} />
				<Route path='works' element={<Works />} />
				<Route path='order/:id' element={<Order />} />
				<Route path='creatework' element={<CreateWork />} />
				<Route path='createorder' element={<CreateOrder />} />
				<Route path='messenger/*' element={<Messenger />} />
				<Route path='*' element={<Navigate to={''} />} />
			</Route>
		</Routes>
	)
}

export default PrivateRouting
