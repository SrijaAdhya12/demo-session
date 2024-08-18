import Users from '../data/index.js'

export const signup = (req, res) => {
	const { username, password } = req.body

	if (!username || !password) {
		return res.status(400).json({ message: 'Username and password are required' })
	}

	const existingUser = Users.find((user) => user.username === username)
	if (existingUser) {
		return res.status(400).json({ message: 'User already exists' })
	}

	Users.push({ username, password })
	req.session.user = { username }

	res.status(201).json({ message: 'User registered successfully', user: req.session.user })
}

export const signin = (req, res) => {
	const { username, password } = req.body
	const user = Users.find((u) => u.username === username && u.password === password)
	if (user) {
		req.session.user = { username: user.username }
		res.json({ message: 'Signin successful', user: req.session.user })
	} else {
		res.status(401).json({ message: 'Invalid credentials' })
	}
}

export const signout = (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			return res.status(500).json({ message: 'Error signing out', error: err })
		}
		res.json({ message: 'Signout successful' })
	})
}

export const isAuthenticated = (req, res, next) => {
	if (req.session.user) {
		next()
	} else {
		res.status(401).json({ message: 'Unauthorized' })
	}
}
