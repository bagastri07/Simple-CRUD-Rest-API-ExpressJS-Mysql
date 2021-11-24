const express = require('express');

// set up Router
const router = express.Router();

//Movie Controller
const moviesControllers = require('../Controllers/movies.controllers')

// Movies Endpoint
router.get('/', moviesControllers.viewAll)
router.get('/:id', moviesControllers.view)
router.post('/', moviesControllers.create);
router.put('/:id', moviesControllers.update)
router.delete('/:id', moviesControllers.delete)

//export router
module.exports = router;