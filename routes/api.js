// initialize our faux database
var data = {
  "timesheets": [
    {
		"startOn": "07/07/2014",
		"endOn": "13/07/2014",
		"status": "open",
		"dueOn": "21/07/2014",
		"id": "2",
		"totalHours": "40",
		"totalBillable": "32",
		"totalOvertime": "0",
		"totalTimeOff": "8",
		"activities": [{  "id":"1",
						  "name":"Photography",
						  "mon":"8",
						  "tue":"8",
						  "wed":"8",
						  "thu":"8",
						  "fri":"0",
						  "sat":"0",
						  "sun":"0"
						  },
						  {
						  "id":"2",
						  "name":"Bank Holiday",
						  "mon":"0",
						  "tue":"0",
						  "wed":"0",
						  "thu":"0",
						  "fri":"8",
						  "sat":"0",
						  "sun":"0"
						  }]
    },
    {
		"startOn": "30/06/2014",
		"endOn": "06/07/2014",
		"status": "submitted",
		"dueOn": "14/07/2014",
		"id": "1",
		"totalHours": "0",
		"totalBillable": "0",
		"totalOvertime": "0",
		"totalTimeOff": "0",
		"activities": [{
						  "id":"1",
						  "name":"Photography",
						  "mon":"0",
						  "tue":"0",
						  "wed":"0",
						  "thu":"0",
						  "fri":"0",
						  "sat":"0",
						  "sun":"0"
						  }]		
    }]
};

// GET

exports.timesheets = function (req, res) {
  var timesheets = [];
  data.timesheets.forEach(function (timesheet, i) {
    timesheets.push({
		id: i,
		startOn: timesheet.startOn,
		endOn: timesheet.endOn,
		status: timesheet.status,
		dueOn: timesheet.dueOn,
		totalHours: timesheet.totalHours,
		totalBillable: timesheet.totalBillable,
		totalOvertime: timesheet.totalOvertime,
		totalTimeOff: timesheet.totalTimeOff,
		activities: timesheet.activities
    });
  });
  res.json({
    timesheets: timesheets
  });
};

exports.timesheet = function (req, res) {
  var id = req.params.id;
  if (id >= 0 && id < data.timesheets.length) {
    res.json({
      timesheet: data.timesheets[id]
    });
  } else {
    res.json(false);
  }
};