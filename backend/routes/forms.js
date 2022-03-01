var express = require("express");
var router = express.Router();
const db1 = require("../config/db1");
/* GET home page. */
router.get("/ptt-type", function (req, res, next) {
  var sql = "SELECT pttype.pttype, pttype.`name` FROM pttype";
  db1.query(sql, (err, result) => {
    if (err) return res.json({ status: 500, message: err });
    else return res.json({ status: 200, result: result });
  });
});
router.get("/c_hospital/:provcode", function (req, res, next) {
  const {provcode} = req.params;
  var sql = `SELECT * FROM c_hospital WHERE c_hospital.provcode = ${provcode}`;
  db1.query(sql, (err, result) => {
    if (err) return res.json({ status: 500, message: err });
    else return res.json({ status: 200, result: result });
  });
});
router.get("/subdistrict", function (req, res, next) {
  var sql = `SELECT
  c_subdistrict.tambonname, 
	c_subdistrict.tamboncodefull
FROM
  c_subdistrict`;
  db1.query(sql, (err, result) => {
    if (err) return res.json({ status: 500, message: err });
    else return res.json({ status: 200, result: result });
  });
});
router.get("/subdistrict-by-district/:id", function (req, res, next) {
  const { id } = req.params;
  var sql = `SELECT
	c_subdistrict.tamboncodefull,
  c_subdistrict.tambonname
FROM
  c_subdistrict
WHERE
  c_subdistrict.ampurcode = ${id}`;
  db1.query(sql, (err, result) => {
    if (err) return res.json({ status: 500, message: err });
    else return res.json({ status: 200, result: result });
  });
});
router.get("/district", function (req, res, next) {
  var sql = `SELECT
  c_district.ampurcodefull, 
  c_district.ampurname
FROM
  c_district`;

  db1.query(sql, (err, result) => {
    if (err) return res.json({ status: 500, message: err });
    else return res.json({ status: 200, result: result });
  });
});
router.get("/district-by-province/:id", function (req, res, next) {
    const { id } = req.params; 
    console.log(id)
    var sql = `SELECT
  c_district.ampurcodefull, 
  c_district.ampurname, 
  c_district.changwatcode
FROM
  c_district
WHERE
  c_district.changwatcode = ${id}`;

  db1.query(sql, (err, result) => {
    if (err) return res.json({ status: 500, message: err });
    else return res.json({ status: 200, result: result });
  });
});
router.get("/province", function (req, res, next) {
  var sql = `SELECT
  c_province.*
FROM
  c_province`;

  db1.query(sql, (err, result) => {
    if (err) return res.json({ status: 500, message: err });
    else return res.json({ status: 200, result: result });
  });
});

module.exports = router;
