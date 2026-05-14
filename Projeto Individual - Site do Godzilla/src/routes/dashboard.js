var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");
router.post("/consulta", function (req, res) {
    dashboardController.consulta(req, res); 
})

router.post("/consulta2", function (req, res) {
    dashboardController.consulta2(req, res); 
})

router.post("/consulta3", function (req, res) {
    dashboardController.consulta3(req, res); 
})

router.post("/consulta4", function (req, res) {
    dashboardController.consulta4(req, res); 
})

router.post("/consulta5", function (req, res) {
    dashboardController.consulta5(req, res); 
})

module.exports = router;