import express from 'express'
import { signin, signup, signout, isAuthenticated } from '../controllers/auth.js'

const router = express.Router()
router.post('/signin', signin)
router.post('/signup', signup)
router.post('/signout', signout)
router.get('/profile', isAuthenticated, (req, res) => {
	res.json({ message: 'This is a protected route', user: req.session.user })
})

export default router
