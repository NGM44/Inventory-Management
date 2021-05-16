const express = require("express");
var cors = require("cors");
var reportsObj = require("./data/reports.json");
var unitObj= require("./data/units.json");
const { response } = require("express");
var app = express(); // one application
var router = express.Router(); // server side router

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cors()); // sets the header instead !
router.get("/reports", function (req, res) {
  res.json(reportsObj); //converts js object to JSON
});
router.post("/reports", function (req, res) {
  console.log(req.body.report);

  reportsObj.push({
    id: "", //req.body.report.id
    name: req.body.report.name,
    type: req.body.report.type,
    assignedto: "", //req.body.report.assignedto,
    status: "", //req.body.report.status,
    from: "", //req.body.report.from
  });
  // res.json(reportsObj); //converts js object to JSON
  // OR
  res.json({ success: "Record Inserted successfully" });
});

router.post("/units", function (req, res) {
  console.log(req.body.report);

  unitObj.push({
    id: req.body.id,
    serial: req.body.serial,
    name: req.body.name,
    type: req.body.type,
    assignedto:req.body.assignedto,
    status: req.body.status,
    from: req.body.from
  });
  // res.json(reportsObj); //converts js object to JSON
  // OR
  res.json({ success: "Record Inserted successfully in units" });
});

router.get("/", function (req, res) {
  res.sendFile("client.html", { root: __dirname });
});

app.use(router);
app.listen(4000, () => console.log("Server running @ 4000 !"));
