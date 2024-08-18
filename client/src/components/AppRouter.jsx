import { Routes, Route, Navigate } from 'react-router-dom'
import { SignIn } from '../pages'
const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<SignIn />} />
		</Routes>
	)
}

export default AppRouter
