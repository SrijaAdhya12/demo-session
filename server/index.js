import express from 'express'
import { UserRoutes } from './routes/index.js'

const app = express()

app.get('/', (_, res) => res.send('Welcome to Express Server'))

const port = process.env.PORT || 5000

app.use('/users', UserRoutes)

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`)
})
