import { pool } from '../db.js'

export const getaprendices = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM aprendices')
        res.json(rows)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createaprendiz = async (req, res) => {
    try {
        const { nombre, edad, email } = req.body
        await pool.query('INSERT INTO aprendices (nombre, edad, email) VALUES (?, ?, ?)', [nombre, edad, email])
        const [rows] = await pool.query('SELECT LAST_INSERT_ID() as id')
        res.json({
            id: rows[0].id,
            nombre,
            edad,
            email
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateaprendiz = async (req, res) => {
    try {
        const { nombre, edad, email } = req.body
        const { id } = req.params
        const [result] = await pool.query(
            'UPDATE aprendices SET nombre= ifnull(?, nombre), edad= ifnull(?, edad), email= ifnull(?, email) WHERE id_estudiante=?',
            [nombre, edad, email, id]
        )
        if (result.affectedRows === 0) return res.status(404).json({ message: 'aprendiz no encontrado' })
        res.json({ message: 'aprendiz actualizado' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteaprendiz = async (req, res) => {
    try {
        const { id } = req.params
        await pool.query('DELETE FROM aprendices WHERE id_estudiante=?', [id])
        res.json({ message: 'aprendiz eliminado' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}