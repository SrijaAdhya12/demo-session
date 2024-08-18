import { Routes, Route, Navigate } from 'react-router-dom'
import { SignIn, Home } from '../pages'
import { AuthRoute } from '../routes'
import Private from '../routes/Private'
const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/signin" element={<AuthRoute component={<SignIn />} />} />
			<Route path="/" element={<Private component={<Home />} />} />
		</Routes>
	)
}

export default AppRouter
