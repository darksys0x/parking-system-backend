const db = require('../db/config');
const parking = {};

parking.getAll = (req, res, next) => {
  db.manyOrNone('SELECT * FROM parking_info;')
    .then((data) => {
      res.locals.parkings = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

parking.create = (req, res, next) => {
  db.one('INSERT INTO parking_info (driver_name, type_car, plate_number, image, date_in, date_out, employee_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *;',
    [req.body.driver_name, req.body.type_car, req.body.plate_number, req.body.image, req.body.date_in, req.body.date_out, req.body.employee_id])
    .then((data) => {
      res.locals.parking = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

parking.update = (req, res, next) => {
  db.one('UPDATE parking_info SET driver_name=$1, type_car=$2, plate_number=$3, image=$4, date_in=$5, date_out=$6, employee_id=$7 WHERE id=$8 RETURNING *;',
  [req.body.driver_name, req.body.type_car, req.body.plate_number, req.body.image, req.body.date_in, req.body.date_out, req.body.employee_id, req.params.id])
    .then((data) => {
      res.locals.parking = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

parking.delete = (req, res, next) => {
  db.none('DELETE FROM parking_info WHERE id=$1', [req.params.id])
    .then((data) => {
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

module.exports = parking;