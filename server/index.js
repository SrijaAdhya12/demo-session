import express from 'express'
import session from 'express-session'
import dotenv from 'dotenv'
import cors from 'cors'
import { AuthRoutes, UserRoutes } from './routes/index.js'

dotenv.config()
const app = express()
app.use(express.json())
app.get('/', (_, res) => res.send('Welcome to Express Server'))

const allowedOrigin = 'http://localhost:5173'
app.use(
	cors({
		origin: allowedOrigin,
		credentials: true
	})
)

app.use(
	session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: {
			secure: false,
			maxAge: 1000 * 60 * 60 * 24 * 7
		}
	})
)

const port = process.env.PORT || 5000

app.use('/users', UserRoutes)
app.use('/auth', AuthRoutes)

app.get('/auth/check-session', (req, res) => {
	if (req.session.user) {
		res.json({ user: req.session.user })
	} else {
		res.status(401).json({ message: 'Not authenticated' })
	}
})

app.listen(port, () => {
	console.log(`Server is running at ${port}`)
})
