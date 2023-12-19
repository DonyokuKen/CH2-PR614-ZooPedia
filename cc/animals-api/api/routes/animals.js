const express = require('express');
const router = express.Router();
const animals = require('../services/animals');

/* GET programming languages. */
router.get('/', async function (req, res, next) {
    try {
        res.json(await animals.getMultiple(req.query.page));
    } catch (err) {
        console.error(`Error while getting animals `, err.message);
        next(err);
    }
});

module.exports = router;