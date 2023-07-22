const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const mysql2 = require("mysql2");

const conn = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ws_team",
});

if (conn) {
  console.log("Connecting DB successfully");
} else {
  console.log("Failed to connect DB");
}

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/all_cal", async (req, res) => {
  let sql =
    "SELECT tc.cal_id, tc.cal_name, tc.cal_image, tct.type_name as cal_type, tc.cal_price, tc.cal_is_active FROM tbl_calendar as tc LEFT JOIN tbl_calendar_type as tct ON tct.type_id = tc.cal_id";

  await conn.execute(sql, (err, result) => {
    if (err) {
      res.status(500).json({
        message: err.message,
      });
      return;
    }
    res.status(200).json({
      message: true,
      data: result,
    });
  });
});

app.get("/cal_filter/:id", async (req, res) => {
  let id = req.params.id;
  let sql = `SELECT tc.cal_id, tc.cal_name, tc.cal_image, tct.type_name as cal_type, tc.cal_price, tc.cal_is_active FROM tbl_calendar as tc LEFT JOIN tbl_calendar_type as tct ON tct.type_id = tc.cal_id WHERE tc.cal_type = ${id}`;

  await conn.execute(sql, (err, result) => {
    if (err) {
      res.status(500).json({
        message: err.message,
      });
      return;
    }
    res.status(200).json({
      message: true,
      data: result,
    });
  });
});

app.get("/cal_type", async (req, res) => {
  let sql = "SELECT * FROM tbl_calendar_type";

  await conn.execute(sql, (err, result) => {
    if (err) {
      res.status(500).json({
        message: err.message,
      });
      return;
    }
    res.status(200).json({
      message: true,
      data: result,
    });
  });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
