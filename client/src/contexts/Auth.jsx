import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const checkSession = async () => {
			try {
				const response = await fetch(`${import.meta.env.VITE_API}/auth/check-session`, {
					credentials: 'include'
				})
				const data = await response.json()
				if (response.ok) {
					setCurrentUser(data.user)
				} else {
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
			const data = await response.json()
			if (response.ok) {
				setCurrentUser(data.user)
			} else {
				throw new Error(data.message)
			}
		} catch (error) {
			console.error('Error signing in:', error)
			throw error
		}
	}

	const signOut = async () => {
		try {
			await fetch('/auth/signout', {
				method: 'POST'
			})
			setCurrentUser(null)
		} catch (error) {
			console.error('Error signing out:', error)
		}
	}

	const value = {
		currentUser,
		signIn,
		signOut
	}

	return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
