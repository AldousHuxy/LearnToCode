import express, { Application, Request, Response, json, urlencoded } from 'express';
import { CLIENT_URL, PORT } from './env';
import cors from 'cors';
import { router as weatherRoutes } from './routes/weatherRoutes';
import { logger } from './middleware/loggerMiddleware';
import { errorHandler } from './middleware/errorMiddleware';
import { connectDb } from './utils/connectDb';

const app: Application = express()

connectDb()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors({ origin: CLIENT_URL }))
app.use(logger)

app.get('/', (req: Request, res: Response) => { res.json(`Success: ${new Date().toISOString().split('T')[0]}`) })
app.get('/api', (req: Request, res: Response) => { res.json('Welcome to the Learn To Code API!') })

app.use('/api/weather', weatherRoutes)

app.use(errorHandler)

app.listen(PORT, () => console.log(`Listening for requests at: http://localhost:${PORT}`))