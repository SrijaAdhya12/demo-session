import { Routes, Route, Navigate } from 'react-router-dom'
import { SignUp } from '../pages'
const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<SignUp />} />
		</Routes>
	)
}

export default AppRouter
