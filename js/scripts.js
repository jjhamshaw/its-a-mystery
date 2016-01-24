var clock;

$(document).ready(function() {
	$('#next_clue').hide();

	var currentDate = new Date();

	// 30th jan 2016 9:30am
	var futureDate  = new Date(2016, 0, 30, 9, 30, 0);

	// Calculate the difference in seconds between the future and current date
	var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

	// Instantiate a coutdown FlipClock
	clock = $('.dw_clock').FlipClock(diff, {
		clockFace: 'DailyCounter',
		countdown: true,
		showSeconds: true,
		callbacks: {
			interval: function(a, b) {
				init();
			}
		}
	});

	function countdownComplete() {
		return new Date() > futureDate;
	}

	function showNumber() {
		$('#dw_countdown').hide();
		$('#phone_number').text('07824 358455');
		$('#next_clue').show();
	}

	function showCountdown() {
		$('#dw_countdown').show();
		$('#next_clue').hide();
	}

	function init() {
		if (countdownComplete()) {
			showNumber();
		}
		else {
			showCountdown();
		}
	}
	init()
});
