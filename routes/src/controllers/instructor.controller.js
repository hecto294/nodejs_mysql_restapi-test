import { pool } from '../db.js'

export const getinstructores = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM instructor')
    res.json(rows)
}
export const getinstructor = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM instructor WHERE id_instructor = ?', [req.params.id])
    if (rows.length <= 0) return res.status(404).json({ message: 'instructor no encontrado' })
    res.json(rows[0])
}
export const createinstructor = async (req, res) => {
    const { nombre, edad, nro_documento } = req.body
    const [rows] = await pool.query('INSERT INTO instructor (nombre, edad, nro_documento) VALUES (?, ?, ?)', [nombre, edad, nro_documento])
    res.json({ id: rows.insertId, nombre, edad, nro_documento })
}
export const updateinstructor = async (req, res) => {
    const { nombre, edad, nro_documento } = req.body
    const { id } = req.params
    await pool.query('UPDATE instructor SET nombre=?, edad=?, nro_documento=? WHERE id_instructor=?', [nombre, edad, nro_documento, id])
    res.json({ message: 'instructor actualizado' })
}
export const deleteinstructor = async (req, res) => {
    const { id } = req.params
    const [result] = await pool.query('DELETE FROM instructor WHERE id_instructor=?', [id])
    
    if (result.affectedRows <= 0) {
        return res.status(404).json({ message: 'instructor no encontrado' })
    }
    res.sendStatus(204)
}