const express = require("express");
const { json } = require("express/lib/response");
const router = express.Router();
// const db1 = require('../db_config')
const path = require("path");
const auth = require("../middleware/auth");
const fs = require("fs");

const db1 = require("../config/db1");
const db2 = require("../config/db2");

router.get("/", async (req, res) => {
  res.send(path.resolve());
});
router.delete("/hi/:id", async (req, res) => {
  const { id } = req.params;
  db1.query(`DELETE FROM hi_profile WHERE id= ${id}`,(err, result)=>{
    if (err) return res.json({ status: 500, message: err})
    return res.json({status: 200, message: result})
  })
});
// อัพเดท hi
router.put("/hi-edit/:id", async (req, res) => {
  let paresData = JSON.parse(req.body.data);
  const { id } = req.params;
  if (!req.files) {
    let sql = `UPDATE hi_profile SET cid='${paresData.cid}', fullname='${paresData.fullname}', id_card='${paresData.id_card}',sex='${paresData.sex}',image='${paresData.image}',birthday='${paresData.birthday}',pttype_name='${paresData.pttype_name.value}',mobile='${paresData.mobile}',addrpart='${paresData.amppart.value}',tmbpart='${paresData.tmbpart.value}',amppart='${paresData.amppart.value}',chwpart='${paresData.chwpart.value}',weight=${paresData.weight},height=${paresData.height},bp='${paresData.bp}',pr='${paresData.pr}',vstdate='${paresData.vstdate}',dcdate='${paresData.dcdate}',hospcode='${paresData.hospcode.hoscode}',authen_number='${paresData.authen_number}',line_id='${paresData.line_id}' WHERE id = ${id}`;
    db1.query(sql, (err, result) => {
      if (err) return res.json({ status: 500, message: err });
      return res.json({ msg: "Ok", resule: result });
    });
  } else {
    let myFile = req.files.file;
    fs.unlink(`${path.resolve()}/public/${paresData.image}`, function (err) {
      if (err) {
        throw err;
      } else {
        console.log("Successfully deleted the file.");
      }
    });
    let newPath = `images/covid/avatar/${Date.now()}-${myFile.name}`;

    // // mv() method places the file inside public directory
    myFile.mv(`${path.resolve()}/public/${newPath}`, function (err) {
      if (err) {
        console.log(err);
        return res.status(500).send({ msg: "notOk" });
      }
      let sql = `UPDATE hi_profile SET cid='${paresData.cid}', fullname='${paresData.fullname}', id_card='${paresData.id_card}',sex='${paresData.sex}',image='${newPath}',birthday='${paresData.birthday}',pttype_name='${paresData.pttype_name.value}',mobile='${paresData.mobile}',addrpart='${paresData.amppart.value}',tmbpart='${paresData.tmbpart.value}',amppart='${paresData.amppart.value}',chwpart='${paresData.chwpart.value}',weight=${paresData.weight},height=${paresData.height},bp='${paresData.bp}',pr='${paresData.pr}',vstdate='${paresData.vstdate}',dcdate='${paresData.dcdate}',hospcode='${paresData.hospcode.hoscode}',authen_number='${paresData.authen_number}',line_id='${paresData.line_id}' WHERE id = ${id}`;
      db1.query(sql, (err, rows) => {
        if (err) return res.json({ status: 500, msg: err });
        return res.json({ msg: "Ok", resule: rows });
      });
    });
  }
  // // accessing the file
});
router.get("/", async (req, res) => {
  res.send(path.resolve());
});
//ดึงข้อมูล hi by id
router.get("/hi-by-id/:id", async (req, res) => {
  const { id } = req.params;
  db1.query(
    `SELECT
	hi_profile.id, 
	hi_profile.cid, 
	hi_profile.fullname, 
  hi_profile.id_card,
	hi_profile.sex, 
	hi_profile.image, 
	hi_profile.birthday, 
	pttype.name AS pttype_name, 
	hi_profile.mobile, 
	hi_profile.addrpart, 
	c_subdistrict.tambonname AS tmbpart, 
	c_district.ampurname AS amppart, 
	c_province.changwatname AS chwpart, 
	hi_profile.weight, 
	hi_profile.height, 
	hi_profile.bp, 
	hi_profile.pr, 
	hi_profile.vstdate, 
	hi_profile.dcdate, 
	c_hospital.hosname AS hospcode, 
	hi_profile.authen_number, 
	hi_profile.line_id, 
	c_hospital.hoscode AS obj_hoscode, 
	pttype.pttype AS obj_pttype, 
	c_district.ampurcodefull AS obj_amppart, 
	c_subdistrict.tamboncode AS obj_tmbpart, 
	c_province.changwatcode AS obj_chwpart
FROM
	hi_profile
	LEFT JOIN
	c_hospital
	ON 
		hi_profile.hospcode = c_hospital.hoscode
	LEFT JOIN
	pttype
	ON 
		hi_profile.pttype_name = pttype.pttype
	LEFT JOIN
	c_district
	ON 
		hi_profile.amppart = c_district.ampurcodefull
	LEFT JOIN
	c_subdistrict
	ON 
		hi_profile.tmbpart = c_subdistrict.tamboncodefull
	LEFT JOIN
	c_province
	ON 
		hi_profile.chwpart = c_province.changwatcode
WHERE
	hi_profile.id = ${id}
GROUP BY
	hi_profile.id`,
    (err, rows) => {
      if (err) return res.json({ status: 500, msg: err.message });
      return res.json(rows[0]);
    }
  );
});
//ดึงข้อมูล hi
router.get("/hi", auth, async (req, res) => {
  db1.query(
    `SELECT
    hi_profile.id, 
    hi_profile.cid, 
    hi_profile.fullname, 
    hi_profile.id_card,
    hi_profile.sex, 
    hi_profile.image, 
    hi_profile.birthday, 
    pttype.name AS pttype_name, 
    hi_profile.mobile, 
    hi_profile.addrpart, 
    c_subdistrict.tambonname AS tmbpart, 
    c_district.ampurname AS amppart, 
    c_province.changwatname AS chwpart, 
    hi_profile.weight, 
    hi_profile.height, 
    hi_profile.bp, 
    hi_profile.pr, 
    hi_profile.vstdate, 
    hi_profile.dcdate, 
    c_hospital.hosname AS hospcode, 
    hi_profile.authen_number, 
    hi_profile.line_id
  FROM
    hi_profile
    LEFT JOIN
    c_hospital
    ON 
      hi_profile.hospcode = c_hospital.hoscode
    LEFT JOIN
    pttype
    ON 
      hi_profile.pttype_name = pttype.pttype
    LEFT JOIN
    c_district
    ON 
      hi_profile.amppart = c_district.ampurcodefull
    LEFT JOIN
    c_subdistrict
    ON 
      hi_profile.tmbpart = c_subdistrict.tamboncodefull
    LEFT JOIN
    c_province
    ON 
      hi_profile.chwpart = c_province.changwatcode
  GROUP BY
    hi_profile.id`,
    (err, rows) => {
      if (err) return res.json({ status: 500, msg: err });
      return res.json(rows);
    }
  );
});
router.post("/hi-add-patient-avatar", async (req, res) => {
  let paresData = JSON.parse(req.body.data);

  if (!req.files) {
    return res.send({ msg: "file is not found" });
  }
  // // accessing the file
  let myFile = req.files.file;

  let newPath = `images/covid/avatar/${Date.now()}-${myFile.name}`;
  let data = [
    paresData.cid,
    paresData.fullname,
    paresData.id_card,
    paresData.sex,
    newPath,
    paresData.birthday,
    paresData.pttype_name.value,
    paresData.mobile,
    paresData.addrpart,
    paresData.tmbpart.value,
    paresData.amppart.value,
    paresData.chwpart.value,
    parseFloat(paresData.weight),
    parseFloat(paresData.height),
    paresData.bp,
    paresData.pr,
    paresData.vstdate,
    paresData.dcdate,
    paresData.hospcode.value,
    paresData.authen_number,
    paresData.line_id,
  ];

  // // mv() method places the file inside public directory
  myFile.mv(`${path.resolve()}/public/${newPath}`, function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send({ msg: "notOk" });
    }
    db1.query(
      `INSERT INTO hi_profile (cid,fullname,id_card, sex, image, birthday, pttype_name, mobile, addrpart, tmbpart, amppart, chwpart, weight, height, bp, pr, vstdate, dcdate, hospcode, authen_number, line_id) VALUES (?)`,
      [data],
      (err, rows) => {
        if (err) return res.json({ status: 500, msg: err });
        return res.json({ msg: "Ok", resule: rows });
      }
    );
  });
});

//ผู้ป่วยนอน
router.get("/allstate/:date", async (req, res, bed_date) => {
  const { date } = req.params;
  db2.query(
    `
    select p.cid CID,p.fname FNAME,p.lname LNAME,w.name WARD_NAME,a.regdate ADMIT_DATE,a.dchdate DISCHARGE_DATE,i.dchtype DISCHARGE_TYPE
  ,CASE
    WHEN a.regdate = DATE(NOW()) THEN 'NEW Case'
    WHEN a.dchdate = DATE(NOW()) THEN 'DisCharge'
    ELSE '- Stay -'
  END State
  from an_stat a 
  LEFT JOIN ipt i on i.an = a.an
  LEFT JOIN ward w on w.ward = i.ward
  LEFT JOIN patient p on p.hn = a.hn
  where (a.dchdate is null or a.dchdate = '' or i.regdate = "${date}" or i.dchdate = "${date}")
  and w.ward in ("16","14","12","18","19","20","21","22")`,
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        res.json(results);
      }
    }
  );
});

// router.get("/bed", async (req, res) => {
//   const sql = await sequelize.query(`
//   select GROUP_CONCAT(distinct w.name) wardName
// ,(select sum(bedcount) from ward where shortname = w.shortname) bedLimit
// ,count(distinct a.an,if(a.regdate = date(now()),1,null)) newCase
// ,(select count(distinct an) from ipt where ward = i.ward and dchdate = date(now())) disCharge
// ,count(distinct a.an) Stay
// ,CASE
//     WHEN (select sum(bedcount) from ward where shortname = w.shortname) > count(distinct a.an) THEN concat('[ ',(select sum(bedcount) from ward where shortname = w.shortname)-count(distinct a.an),' ]')
//     WHEN (select sum(bedcount) from ward where shortname = w.shortname) < count(distinct a.an) THEN concat('-- Over : ',count(distinct a.an)-(select sum(bedcount) from ward where shortname = w.shortname),' !!!')
//     ELSE '- Full -'
// END State,w.shortname
//   from an_stat a
//   LEFT JOIN ipt i on i.an = a.an
//   LEFT JOIN ward w on w.ward = i.ward
//   where (a.dchdate is null or a.dchdate = '')
//   and w.ward in ("16","14","12","18","19","20","21","22")
//   group by w.shortname
//   order by w.shortname`, {
//     type: QueryTypes.SELECT,
//   });
//   res.json(sql)
// });

//จำนวนเตียง
router.get("/bed", (req, res) => {
  db2.query(
    `select GROUP_CONCAT(distinct w.name) wardName
  ,(select sum(bedcount) from ward where shortname = w.shortname) bedLimit
  ,count(distinct a.an,if(a.regdate = date(now()),1,null)) newCase
  ,(select count(distinct an) from ipt where ward = i.ward and dchdate = date(now())) disCharge
  ,count(distinct a.an) Stay
  ,CASE
      WHEN (select sum(bedcount) from ward where shortname = w.shortname) > count(distinct a.an) THEN concat('[ ',(select sum(bedcount) from ward where shortname = w.shortname)-count(distinct a.an),' ]')
      WHEN (select sum(bedcount) from ward where shortname = w.shortname) < count(distinct a.an) THEN concat('-- Over : ',count(distinct a.an)-(select sum(bedcount) from ward where shortname = w.shortname),' !!!')
      ELSE '- Full -'
  END State,w.shortname
    from an_stat a 
    LEFT JOIN ipt i on i.an = a.an
    LEFT JOIN ward w on w.ward = i.ward
    where (a.dchdate is null or a.dchdate = '')
    and w.ward in ("16","14","12","18","19","20","21","22")
    group by w.shortname
    order by w.shortname`,
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        res.json(results);
      }
    }
  );
});

router.get("/", (req, res) => {
  console.log(db1);
});

//รายละเอียดเตียง
// router.get("/bedDetail", async (req, res) => {
//   const sql = await sequelize.query(`select
//   p.cid CID,
//   p.fname FNAME,
//   p.lname LNAME,
//   w.ward,
//   w.name WARD_NAME,
//   ia.bedno,
//   a.regdate ADMIT_DATE,
//   a.dchdate DISCHARGE_DATE,
//   i.dchtype DISCHARGE_TYPE
//   ,CASE
//     WHEN a.regdate = DATE(NOW()) THEN 'NEW Case'
//     WHEN a.dchdate = DATE(NOW()) THEN 'DisCharge'
//     ELSE '- Stay -'
//   END State
//   from an_stat a
//   LEFT JOIN ipt i on i.an = a.an
//   LEFT JOIN ward w on w.ward = i.ward
//   LEFT JOIN patient p on p.hn = a.hn
//   LEFT JOIN iptadm ia ON a.an = ia.an
//   where (a.dchdate is null or a.dchdate = '' or i.regdate = date(now()) or i.dchdate = date(now()))
//   and w.ward in ("16","14","12","18","19","20","21","22");
//   `, {
//     type: QueryTypes.SELECT,
//   });
//   res.json(sql)
// });

router.get("/bedDetail", (req, res) => {
  db2.query(
    `select 
  p.cid CID,
  p.fname FNAME,
  p.lname LNAME,
  w.ward,
  w.name WARD_NAME,
  ia.bedno,
  a.regdate ADMIT_DATE,
  a.dchdate DISCHARGE_DATE,
  i.dchtype DISCHARGE_TYPE
  ,CASE
    WHEN a.regdate = DATE(NOW()) THEN 'NEW Case'
    WHEN a.dchdate = DATE(NOW()) THEN 'DisCharge'
    ELSE '- Stay -'
  END State
  from an_stat a 
  LEFT JOIN ipt i on i.an = a.an
  LEFT JOIN ward w on w.ward = i.ward
  LEFT JOIN patient p on p.hn = a.hn
  LEFT JOIN iptadm ia ON a.an = ia.an
  where (a.dchdate is null or a.dchdate = '' or i.regdate = date(now()) or i.dchdate = date(now()))
  and w.ward in ("16","14","12","18","19","20","21","22");`,
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        res.json(results);
      }
    }
  );
});

//ดึงจากห้องโควิดเพื่อขอ code สปสช.
router.get("/authen/:date", async (req, res, covid_date) => {
  const { date } = req.params;
  db2.query(
    `
  SELECT
  ov.vstdate,
  ov.vn,
  ov.hn,
  ov.spclty,
  ov.main_dep,
  pt.cid,
  CONCAT(pt.pname,pt.fname," ",pt.lname) AS fullname, 
  py.pttype,
  py.name ,
  pt.hometel,
  ps.father_cid,
  ps.mother_cid,
  lab.lab_items_code,
  lab.lab_items_name_ref
  
  FROM ovst ov
  LEFT JOIN patient pt on pt.hn=ov.hn
  LEFT JOIN person ps on ps.patient_hn = ov.hn
  LEFT JOIN pttype py on py.pttype = ov.pttype
  LEFT JOIN (
  SELECT
  lh.vn, 
  lo.lab_order_number,
  lo.lab_items_code,
  lo.lab_items_name_ref,
  lo.lab_order_result
  FROM lab_order lo
  LEFT JOIN lab_head lh ON lo.lab_order_number = lh.lab_order_number
  WHERE lo.lab_items_code IN('1628','1837','1839','1852','1854')
  ) lab ON ov.vn = lab.vn
  
  WHERE 
  ov.vstdate = "${date}"
  AND ov.main_dep = 073`,
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        res.json(results);
      }
    }
  );
});

//ดึงจากการตรวจ lab
router.get("/screenLab/:date", async (req, res, covid_date) => {
  const { date } = req.params;
  db2.query(
    `
  SELECT
  ov.vstdate,
  ov.vn,
  ov.hn,
  ov.spclty,
  ov.main_dep,
  pt.cid,
  CONCAT(pt.pname,pt.fname," ",pt.lname) AS fullname, 
  py.pttype,
  py.name,
  pt.hometel,
  ps.father_cid,
  ps.mother_cid,
  lab.lab_items_code,
  lab.lab_items_name_ref
  
  FROM ovst ov
  LEFT JOIN patient pt on pt.hn=ov.hn
  LEFT JOIN person ps on ps.patient_hn = ov.hn
  LEFT JOIN pttype py on py.pttype = ov.pttype
  LEFT JOIN (
  SELECT
  lh.vn, 
  lo.lab_order_number,
  lo.lab_items_code,
  lo.lab_items_name_ref,
  lo.lab_order_result
  FROM lab_order lo
  LEFT JOIN lab_head lh ON lo.lab_order_number = lh.lab_order_number
  WHERE lo.lab_items_code IN('1628','1837','1839','1852','1854')
  ) lab ON ov.vn = lab.vn
  
  WHERE 
  #ov.vstdate BETWEEN @date1 AND @date2
    ov.vstdate = "${date}"
  AND lab.lab_items_code IS NOT NULL`,
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        res.json(results);
      }
    }
  );
});

//ค้นหาการตรวจ lab
router.get("/screenLabList/:cid", async (req, res) => {
  const { cid } = req.params;
  db2.query(
    `
  SELECT
    vstdate,
    hn,
    vn,
    fullname,
    sex,
    cid,
    age_y,
    pttype_name,nationality_name,
    cc,
    lab_order_result
    FROM covid_lab
    WHERE cid = "${cid}"
    ORDER BY vstdate DESC
  `,
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        res.json(results);
      }
    }
  );
});

//ค้นหาการตรวจ lab ทั้งหมด
router.get("/screenLabList/", async (req, res) => {
  const { cid } = req.params;
  db2.query(
    `
  SELECT
    vstdate,
    hn,
    vn,
    fullname,
    sex,
    cid,
    age_y,
    pttype_name,nationality_name,
    cc,
    lab_order_result
    FROM covid_lab
    ORDER BY vstdate DESC
  `,
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        res.json(results);
      }
    }
  );
});

//สรุปการตรวจ lab ทั้งหมด
router.get("/lab/", async (req, res) => {
  const { cid } = req.params;
  db2.query(
    `
  SELECT
  #lab_items_code,
  lab_items_name_ref AS lab_type,
  COUNT(lab_items_code) as total
  FROM covid_lab
  GROUP BY lab_items_name_ref
  ORDER BY lab_items_name_ref DESC
  `,
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        res.json(results);
      }
    }
  );
});

router.get("/sumScreen/:date", async (req, res) => {
  const { date } = req.params;
  db2.query(
    `
  SELECT
  o.vstdate,
  o.pttype,
  p.name,
  COUNT(o.vn) sum,
  o.main_dep

  FROM ovst o
  LEFT JOIN pttype p ON o.pttype = p.pttype
  WHERE o.vstdate = "${date}"
  AND o.main_dep = '073'
  GROUP BY o.pttype`,
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        res.json(results);
      }
    }
  );
});

router.get("/covid", async (req, res) => {
  db2(
    `
  SELECT * FROM nhso_adp_code`,
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        res.json(results);
      }
    }
  );
});

module.exports = router;
