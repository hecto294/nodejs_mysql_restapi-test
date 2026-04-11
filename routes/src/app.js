import express from "express";
import { pool } from './db.js'
import instructorRoutes from '../instructorroutes.js'
import aprendicesRoutes from '../aprendicesroutes.js'
import fichaRoutes from '../ficharoutes.js'
import indexRoutes from '../index.routes.js'
import './config.js'


const app = express()

app.use(express.json())

app.get('/ping', async (req, res) => {
    const result = await pool.query('SELECT "pong" AS result')
    res.json(result[0])
})

app.use(indexRoutes)
app.use('/api/', instructorRoutes)
app.use('/api/', aprendicesRoutes)
app.use('/api/', fichaRoutes)

// Ruta no encontrada
app.use((req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada' })
})

export default app