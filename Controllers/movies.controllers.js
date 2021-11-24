// Import Database Connection
const conn = require('../Config/database.config');
const response = require('../Utils/response.utils')

const movieControllers = {
    create: (req, res) => {
        let sql = `
        INSERT INTO movies SET ?, created_at = NOW(), updated_at = NOW()
        `;

        const value = req.body

        conn.query(sql, value, (err, results) => {
            if (err) return response(res, 500, false, 'Something wrong', err);
            return response(res, 200, true, 'Movie has been created', results)
        })
    },
    viewAll: (req, res) => {
        let sql = `
            SELECT * FROM movies
        `;
        conn.query(sql, (err, results) => {
            if (err) return response(res, 500, false, 'Something wrong', err);
            return response(res, 200, true, 'Request Success', results)
        })
    },
    view: (req, res) => {
        let sql = `
            SELECT * FROM movies
            WHERE id = ?
        `;
        conn.query(sql, req.params.id, (err, result) => {
            if (err) return response(res, 500, false, 'Something wrong', err);
            console.log(result.length)
            if (result < 1) {
                return response(res, 400, false, 'Movie not found');
            }
            return response(res, 200, true, 'Request Success', result)
        })
    },
    update: (req, res) => {
        let sql = `
            UPDATE movies SET ?, updated_at = NOW()
            WHERE id = ?
        `;
        const value = req.body;

        conn.query(sql, [value, req.params.id], (err, result) => {
            if (err) return response(res, 500, false, 'Something wrong', err);
            if (result.affectedRows < 1) {
                return response(res, 400, false, 'Movie not found');
            }
            return response(res, 200, true, 'Movie has been updated', result)
        })
    },
    delete: (req, res) => {
        let sql = `
            DELETE FROM movies
            WHERE id = ?
        `;

        conn.query(sql, req.params.id, (err, result) => {
            if (err) return response(res, 500, false, 'Something wrong', err);
            if (result.affectedRows < 1) {
                return response(res, 400, false, 'Movie not found');
            };
            return response(res, 200, true, 'Movie has been created', result)
        })
    }
}

module.exports = movieControllers;