const express = require('express');
const router = express.Router();

const parking = require('../models/parking');

const sendParkings = (req, res) => res.json(res.locals.parkings);
const sendParking = (req, res) => res.json(res.locals.parking);
const sendSuccess = (req, res) => res.json({ message: 'success' });

router.get('/', parking.getAll, sendParkings);
router.post('/', parking.create, sendParking);
router.put('/:id', parking.update, sendParking);
router.delete('/:id', parking.delete, sendSuccess);

module.exports = router;