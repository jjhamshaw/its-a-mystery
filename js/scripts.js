var clock;

$(document).ready(function() {

	// Grab the current date
	var currentDate = new Date();

	// 30th jan 2016 10:00am
	var futureDate  = new Date(2016, 0, 30, 10, 0, 0);

	// Calculate the difference in seconds between the future and current date
	var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

	// Instantiate a coutdown FlipClock
	clock = $('.dw_clock').FlipClock(diff, {
		clockFace: 'DailyCounter',
		countdown: true,
		showSeconds: true
	});
});