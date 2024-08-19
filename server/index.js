
import express from 'express'
import session from 'express-session'
import dotenv from 'dotenv'
import cors from 'cors'
import connectMongo from 'connect-mongodb-session'
import mongoose from 'mongoose'
import { AuthRoutes, UserRoutes } from './routes/index.js'

dotenv.config()
const app = express()
app.use(express.json())
app.get('/', (_, res) => res.send('Welcome to Express Server'))

const allowedOrigin = process.env.PRODUCTION_URL
app.use(
        cors({
                origin: allowedOrigin,
                credentials: true
        })
)

const MongoDBStore = connectMongo(session)
const store = new MongoDBStore({
        uri: process.env.MONGO_URI,
        collection: 'session'
})

store.on('error', (err) => console.log(err))

app.use(
        session({
                secret: process.env.SECRET,
                resave: false,
                saveUninitialized: true,
                cookie: {
                        secure: false,
                        maxAge: 1000 * 60 * 60 * 24 * 7
                },
                store: store
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

mongoose
        .connect(process.env.MONGO_URI)
        .then(console.log('Connected to MongoDB Database 🌐'))
        .then(() => app.listen(port, () => console.log(`Server running on port: ${port} 🚀`)))
        .catch((error) => console.log(error.message))
