const express = require('express');
const empleados = express.Router();
const db = require('../config/database');

empleados.post("/", async (req, res, next) => {

      const { emp_name, emp_surname, emp_phone, emp_email, emp_address } = req.body;

      if (emp_name && emp_surname && emp_phone && emp_email && emp_address) {
            let query = "INSERT INTO empleados (emp_name, emp_surname, emp_phone, emp_email, emp_address)";
            query  += ` VALUES ('${emp_name}', ${emp_surname}, ${emp_phone},, ${emp_email} ${emp_address})`;
              const rows = await db.query(query);
              
              if(rows.affectedRows == 1) {
                  return res.status(201).json({ code: 201, message: "Employee inserted correctly"});
              }
              return res.status(500).json({ code: 500, message: "Error"});
            }
            return res.status(500).json({ code: 500, message: "Incomplete data"});
});

empleados.delete("/:id([0-9]{1,3})", async (req, res, next) => {
      const query = `DELETE FROM empleados WHERE emp_id = ${req.params.id}`;

      const rows = await db.query(query);

      if(rows.affectedRows == 1) {
            return res.status(200).json({ code: 200, message: "Employee deleted correctly"});
      }
      return res.status(404).json({ code: 404, message: "Employee not found"});
});

empleados.put("/:id([0-9]{1,3})", async (req, res, next) => {
      const { emp_name, emp_surname, emp_phone, emp_email, emp_addres } = req.body;
 
      if (emp_name && emp_surname && emp_phone && emp_email && emp_address) {
            let query = `UPDATE empleados SET emp_name = '${emp_name}', emp_surname = ${emp_surname},`;
            query += ` emp_surname = ${emp_surname}, emp_email = ${emp_email}, emp_phone = ${emp_phone}, 
                       emp_email = ${emp_email}, emp_address = ${emp_addres}} WHERE emp_id = ${req.params.id};`;
            const rows = await db.query(query);
            
            if(rows.affectedRows == 1) {
                  return res.status(200).json({ code: 200, message: "Employee updated correctly"});
            }
            return res.status(500).json({ code: 500, message: "Error"});
      }
      return res.status(500).json({ code: 500, message: "Incomplete data"});
});

empleados.patch("/:id([0-9]{1,3})", async (req, res, next) => {
      if (req.body.emp_name) {
            let query = `UPDATE empleados SET emp_name = '${req.body.emp_name}' WHERE emp_id = ${req.params.id};`;
            const rows = await db.query(query);
            
            if(rows.affectedRows == 1) {
                  return res.status(200).json({ code: 200, message: "Employee updated correctly"});
            }
            return res.status(500).json({ code: 500, message: "Error"});
      }
});

empleados.get('/', async (req, res, next) => {
      const emp2 = await db.query("SELECT * FROM empleados");
      return res.status(200).json({ code: 1, message: emp2 });
});

empleados.get('/:id([0-9]{1,3})',async (req, res, next) => {
      const id = req.params.id;
      if(id > 1 && id < 722) {
            const emp2 = await db.query("SELECT * FROM empleados WHERE emp_id = " + id + ";");
            return res.status(200).jason({ code: 1, message: emp2 }) ;
      }
      return res.status(404).send({ code: 404, message: "Employee not found"});
});

empleados.get('/:name([A-Za-z]+)', async (req, res, next) => {
      const name = req.params.name;
      const emp2 = await db.query("SELECT * FROM emp2 WHERE emp_name = '" + name + "';");
      if (emp2.length > 0) {
            return res.status(200).jason({ code: 1, message: emp2 }) ;
      }
      return res.status(404).send({ code: 404, message: "Employee not found"});
});

module.exports = empleados;