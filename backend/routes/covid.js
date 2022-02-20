const express = require("express");
const router = express.Router();
// const db1 = require('../db_config')

const { QueryTypes } = require("sequelize");
const db2 = require("../db_config");

router.get("/", async (req, res) => {
  res.send("hello MM")
});

// router.get("/:date", async (req, res) => {
//   res.send("hello")
// });

//ผู้ป่วยนอน
router.get("/allstate/:date", async (req, res, bed_date) => {
  const {date} = req.params;
  db2.query(`
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
  and w.ward in ("16","14","12","18","19","20","21","22")`, function (error, results, fields) {
    if (error) {
        console.log(error)
    } else {
        res.json(results)          
    }
      
  })
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
router.get('/bed',(req,res) => {
  db2.query(`select GROUP_CONCAT(distinct w.name) wardName
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
    order by w.shortname`, function (error, results, fields) {
    if (error) {
        console.log(error)
    } else {
        res.json(results)          
    }
      
  });
})

router.get('/',(req,res) => {
 console.log(db1)
})

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

router.get('/bedDetail',(req,res) => {
  db2.query(`select 
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
  and w.ward in ("16","14","12","18","19","20","21","22");`, function (error, results, fields) {
    if (error) {
        console.log(error)
    } else {
        res.json(results)          
    }
      
  });
})

//ดึงจากห้องโควิดเพื่อขอ code สปสช.
router.get("/authen/:date", async (req, res, covid_date) => {
  const {date} = req.params;
  db2.query(`
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
  AND ov.main_dep = 073`, function (error, results, fields) {
    if (error) {
        console.log(error)
    } else {
        res.json(results)          
    }
      
  });
})

//ดึงจากการตรวจ lab
router.get("/screenLab/:date", async (req, res, covid_date) => {
  const {date} = req.params;
  db2.query(`
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
  AND lab.lab_items_code IS NOT NULL`,function (error, results, fields) {
    if (error) {
        console.log(error)
    } else {
        res.json(results)          
    }
      
  });
})

//ค้นหาการตรวจ lab
router.get("/screenLabList/:cid", async (req, res, ) => {
  const {cid} = req.params;
  db2.query(`
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
  `,function (error, results, fields) {
    if (error) {
        console.log(error)
    } else {
        res.json(results)          
    }
      
  });
})

//ค้นหาการตรวจ lab ทั้งหมด
router.get("/screenLabList/", async (req, res, ) => {
  const {cid} = req.params;
  db2.query(`
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
  `,function (error, results, fields) {
    if (error) {
        console.log(error)
    } else {
        res.json(results)          
    }
      
  });
})

//สรุปการตรวจ lab ทั้งหมด
router.get("/lab/", async (req, res, ) => {
  const {cid} = req.params;
  db2.query(`
  SELECT
  #lab_items_code,
  lab_items_name_ref AS lab_type,
  COUNT(lab_items_code) as total
  FROM covid_lab
  GROUP BY lab_items_name_ref
  ORDER BY lab_items_name_ref DESC
  `,function (error, results, fields) {
    if (error) {
        console.log(error)
    } else {
        res.json(results)          
    }
      
  });
})

router.get("/sumScreen/:date", async (req, res, ) => {
  const {date} = req.params;
  db2.query(`
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
  GROUP BY o.pttype`, function (error, results, fields) {
    if (error) {
        console.log(error)
    } else {
        res.json(results)          
    }
      
  })
});

router.get("/covid", async (req, res) => {
  db2(`
  SELECT * FROM nhso_adp_code`, function (error, results, fields) {
    if (error) {
        console.log(error)
    } else {
        res.json(results)          
    }
      
  })
});

module.exports = router;