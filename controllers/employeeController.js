const express = require('express');
const router = express.Router();

const employee = require('../models/employee');

const sendEmployees = (req, res) => res.json(res.locals.employees);
const sendEmployee = (req, res) => res.json(res.locals.employee);
const sendSuccess = (req, res) => res.json({ message: 'success' });

router.get('/', employee.employeeAndParking, sendEmployees);
router.get('/empAndParking', employee.employeeAndParking, sendEmployees);
router.post('/', employee.create, sendEmployee);
router.put('/:id', employee.update, sendEmployee);
router.delete('/:id', employee.delete, sendSuccess);

module.exports = router;