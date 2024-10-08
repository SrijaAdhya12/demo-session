import React, { useEffect, useState } from 'react'
import { AuthContext } from '../contexts'

// export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const checkSession = async () => {
			try {
				const response = await fetch(`${import.meta.env.VITE_API}/auth/check-session`, {
					method: 'GET',
					credentials: 'include'
				})

				if (response.ok) {
					try {
						const data = await response.json()
						setCurrentUser(data.user)
					} catch (jsonError) {
						console.error('Error parsing JSON:', jsonError)
						setCurrentUser(null)
					}
				} else {
					console.error('Response error:', response.statusText)
					setCurrentUser(null)
				}
			} catch (error) {
				console.error('Error checking session:', error)
				setCurrentUser(null)
			} finally {
				setLoading(false)
			}
		}

		checkSession()
	}, [])
	const signIn = async (username, password) => {
		try {
			const response = await fetch(`${import.meta.env.VITE_API}/auth/signin`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, password })
			})

			const text = await response.text()
			let data
			if (text) {
				data = JSON.parse(text)
			} else {
				data = {}
			}

			if (response.ok) {
				setCurrentUser(data.user)
			} else {
				throw new Error(data.message || 'Unknown error')
			}
		} catch (error) {
			console.error('Error signing in:', error)
			throw error
		}
	}

	const signOut = async () => {
		try {
			const response = await fetch(`${import.meta.env.VITE_API}/auth/signout`, {
				method: 'POST',
				credentials: 'include' 
			})
			if (response.ok) {
				setCurrentUser(null)
			} else {
				throw new Error('Failed to sign out')
			}
		} catch (error) {
			console.error('Error signing out:', error)
		}
	}

	const value = {
		currentUser,
		signIn,
		signOut
	}

	if (loading) {
		return <div>Loading...</div>
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
