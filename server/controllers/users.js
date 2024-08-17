import Users from "../models/data.js"

const fetchAllUsers = () => {
	return Users 
}

export const getAllUsers = (_, res) => {
	try {
		const users = fetchAllUsers()
		res.json(users)
	} catch (error) {
		res.status(500).json({ message: 'Error fetching users', error })
	}
}
