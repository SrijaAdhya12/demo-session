import { useContext } from 'react'
import { Auth as AuthContext } from '../../contexts/Auth'

const useAuth = () => useContext(AuthContext)
export default useAuth
