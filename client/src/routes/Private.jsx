








import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks'

const Private = ({ component }) => {
	const { currentUser } = useAuth()
		return currentUser ? component : <Navigate to="/signin" />
		}

export default Private