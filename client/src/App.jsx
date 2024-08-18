import React from 'react'
import { AppRouter } from './components'
import AuthProvider from './providers/Auth'
const App = () => {
	return (
		<div>
			<AuthProvider>
			<AppRouter />
			</AuthProvider>
		</div>
	)
}

export default App
