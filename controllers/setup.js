const { createPool } = require('mysql');
const { DB_CONFIG } = require('../global');
const pool = createPool(DB_CONFIG);

exports.get_all_items =  (req, res, next) => {
    pool.query('select * from demo;', (err, result, fields) => {
        if(err) {
            return console.log(err);
        }
        res.status(200).json(result);
    });
}