const db = require('../db/config');
const employee = {};

employee.getAll = (req, res, next) => {
  db.manyOrNone('SELECT * FROM employee;')
    .then((data) => {
      res.locals.employees = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

employee.employeeAndParking = (req, res, next) => {
  db.manyOrNone('SELECT * FROM employee, parking_info where employee.id = parking_info.employee_id;')
    .then((data) => {
      res.locals.employees = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

employee.create = (req, res, next) => {
  db.one('INSERT INTO employee (name, email, phone) VALUES($1, $2, $3) RETURNING *;',
    [req.body.name, req.body.email, req.body.phone])
    .then((data) => {
      res.locals.employee = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

employee.update = (req, res, next) => {
  db.one('UPDATE employee SET name=$1, email=$2, phone=$3 WHERE id=$4 RETURNING *;',
  [req.body.name, req.body.email, req.body.phone, req.params.id])
    .then((data) => {
      res.locals.employee = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

employee.delete = (req, res, next) => {
  db.none('DELETE FROM employee WHERE id=$1', [req.params.id])
    .then((data) => {
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

module.exports = employee;