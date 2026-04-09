import { pool } from '../db.js'

export const getfichas = async(req, res) => {
    const [rows] = await pool.query('SELECT * FROM ficha')
    res.json(rows)
}

export const getficha = async(req, res) => {
    const [rows] = await pool.query('SELECT * FROM ficha WHERE idficha = ?', [req.params.id])
    if (rows.length <= 0) return res.status(404).json({ message: 'ficha no encontrada' })
    res.json(rows[0])
}

export const createficha = async(req, res) => {
    const { cantidad_aprendiz, programa, formacion, modalidad } = req.body
    const [rows] = await pool.query(
        'INSERT INTO ficha (cantidad_aprendiz, programa, formacion, modalidad) VALUES (?, ?, ?, ?)',
        [cantidad_aprendiz, programa, formacion, modalidad]
    )
    res.json({ id: rows.insertId, cantidad_aprendiz, programa, formacion, modalidad })
}

export const updateficha = async(req, res) => {
    try {
        const { id } = req.params
        const { cantidad_aprendiz, programa, formacion, modalidad } = req.body
        const [result] = await pool.query(
            'UPDATE ficha SET cantidad_aprendiz= ifnull(?, cantidad_aprendiz), programa= ifnull(?, programa), formacion= ifnull(?, formacion), modalidad= ifnull(?, modalidad) WHERE idficha=?',
            [cantidad_aprendiz, programa, formacion, modalidad, id]
        )
        console.log(result)
        if (result.affectedRows === 0) return res.status(404).json({ message: 'ficha no encontrada' })
        res.json({ id, cantidad_aprendiz, programa, formacion, modalidad })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    const [rows] = await pool.query('select * from ficha WHERE idficha=?', [id])
    res.json(rows[0])
}

export const deleteficha = async(req, res) => {
    const [result] = await pool.query('DELETE FROM ficha WHERE idficha=?', [req.params.id])
    if (result.affectedRows <= 0) return res.status(404).json({ message: 'ficha no encontrada' })
    res.sendStatus(204)
}