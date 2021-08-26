var express = require('express');
var router = express.Router();
var fs = require('fs');
var { ReportType, ReportState } = require('../enums.js');

// Load reports.json from file
var reports = [];

fs.readFile('./data/reports.json', (err, data) => {
    if (err) throw err;
    reports = JSON.parse(data).elements.map((report) => ({
        id: report.id,
        state: ReportState[report.state],
        type: ReportType[report.payload.reportType],
        message: report.payload.message,
    }));

    console.log('Reports loaded.');
});

/* GET reports listing */
router.get('/', function(req, res, next) {
    res.json({ reports: reports.filter(x => x.state === ReportState.OPEN) });
});

/* PUT report update */
router.put('/:reportId', function(req, res, next) {
    var reportId = req.params.reportId;
    var state = req.body.state;
    
    var modifiedReport = reports.find((report) => report.id == reportId);
    if (!modifiedReport) {
        console.log(reportId, state)
        res.status(400).json({ error: { message: `Report with id ${reportId} not found` } })
    }
    modifiedReport.state = state;
    res.json({});
}); 

module.exports = router;
