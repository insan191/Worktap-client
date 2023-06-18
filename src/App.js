import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { userSelector } from './redux/reselect.js'
import AuthRouting from './routing/AuthRouting.jsx'
import PrivateRouting from './routing/PrivateRouting.jsx'
import './style.scss'

const App = () => {
	const {
		user: { email },
	} = useSelector(userSelector)
	return (
		<Suspense fallback={'...Loading'}>
			{!email.length ? <AuthRouting /> : <PrivateRouting />}
		</Suspense>
	)
}

export default App
