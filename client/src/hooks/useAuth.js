import { useContext } from 'react'
import { AuthContext } from '/src/contexts/Auth.jsx'

const useAuth = () => useContext(AuthContext)
export default useAuth
