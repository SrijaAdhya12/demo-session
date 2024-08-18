import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Private = ({ component }) => {
	const { currentUser } = useAuth()
	return currentUser ? component : <Navigate to="/signin" />
}

export default Private
