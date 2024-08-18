import React from 'react'
import { useState } from 'react'

const SignIn = () => {
	const [formData, setformData] = useState({
		email: '',
		password: ''
	})
	const handleChange = (e) => {
		setformData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const { email, password } = formData
			await logIn(email, password)
			toast.success('User logged succesfully')
		} catch (error) {
			console.error(error.message)
			toast.error(error.message)
		}
	}
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
				<h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
							Username:
						</label>
						<input
							type="text"
							id="username"
							required
							className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
							value={formData.username}
							onChange={handleChange}
						/>
					</div>

					<div>
						<label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
							Password:
						</label>
						<input
							type="password"
							id="password"
							required
							className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
							value={formData.password}
							onChange={handleChange}
						/>
					</div>

					<button
						type="submit"
						className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					>
						Sign Up
					</button>
				</form>
			</div>
		</div>
	)
}

export default SignIn