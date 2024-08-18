import { Routes, Route, Navigate } from 'react-router-dom'
import { SignIn, Profile } from '../pages'
import { AuthRoute } from '../routes'
import Private from '../routes/Private'
const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/profile" />} />
			<Route path="/login" element={<AuthRoute component={<SignIn />} />} />
			<Route path="/profile" element={<Private component={<Profile />} />} />
		</Routes>
	)
}

export default AppRouter
