import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks'

const Home = () => {
	const { signOut } = useAuth()
	const navigate = useNavigate()

	const handleLogout = async () => {
		try {
			await signOut()
			navigate('/signin') // Redirect to sign-in page after logout
		} catch (error) {
			console.error('Error during logout:', error.message)
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
