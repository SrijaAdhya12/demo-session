import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks'

const Auth = ({ component }) => {
	
	const { currentUser } = useAuth()
	return currentUser ? <Navigate to="/" /> : component
}

export default Auth
