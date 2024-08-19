import { Routes, Route, Navigate } from 'react-router-dom'
import { SignIn, Home } from '../pages'
import { AuthRoute, PrivateRoute} from '../routes'

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/signin" element={<AuthRoute component={<SignIn />} />} />
			<Route path="/" element={<PrivateRoute component={<Home />} />} />
		</Routes>
	)
}

export default AppRouter
