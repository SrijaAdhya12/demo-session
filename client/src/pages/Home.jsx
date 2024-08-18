import React from 'react'
import { useAuth } from '../hooks'
const Home = () => {
	const { signOut } = useAuth()
	const handleLogout = async () => {
		try {
			await signOut()
		} catch (error) {
			console.error(error.message)
		}
	}
	return (
		<div>
			<h1>Home</h1>
			<button type="button" className="bg-red-600 text-white border px-10 py-3 rounded-lg" onClick={handleLogout}>
				Logout
			</button>
		</div>
	)
}

export default Home
