$(document).ready(function() {
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

	// Datepicker widget for arrival date
	$("#arrival_date").datepicker({
		minDate: 0, // minimum date is today
		maxDate: "+90D", // maximum date is 90 days from today
		dateFormat: "yy-mm-dd", // format of the date
	});

	// move the focus to the first text box
	$("#arrival_date").focus();

	$("#policies").click(function() {
		$("#dialog").dialog({
			modal: true, // Make the dialog modal
			width: "auto", // Set the width to auto
			resizable: false, // Disable resizing
			buttons: {
				Ok: function() {
					$(this).dialog("close"); // Close the dialog when Ok button is clicked
				},
			},
		});
	});

	// the handler for the submit event of the form
	// executed when the submit button is clicked
	$("#reservation_form").submit(function(event) {
		var isValid = true;

		// validate the requested arrival date
		var arrivalDate = $("#arrival_date").val().trim();
		if (arrivalDate == "") {
			$("#arrival_date").next().text("This field is required.");
			isValid = false;
		} else {
			$("#arrival_date").next().text("");
		}
		$("#arrival_date").val(arrivalDate);

		// validate the number of nights
		var nights = $("#nights").val().trim();
		if (nights == "") {
			$("#nights").next().text("This field is required.");
			isValid = false;
		} else if (isNaN($("#nights").val())) {
			$("#nights").next().text("This field must be numeric.");
			isValid = false;
		} else {
			$("#nights").next().text("");
		}
		$("#nights").val(nights);

		// validate the name entry
		var name = $("#name").val().trim();
		if (name == "") {
			$("#name").next().text("This field is required.");
			isValid = false;
		} else {
			$("#name").val(name);
			$("#name").next().text("");
		}
		$("#name").val(name);

		// validate the email entry with a regular expression
		var email = $("#email").val();
		if (email == "") {
			$("#email").next().text("This field is required.");
			isValid = false;
		} else if (!emailPattern.test(email)) {
			$("#email").next().text("Must be a valid email address.");
			isValid = false;
		} else {
			$("#email").next().text("");
		}
		$("#email").val(email);

		// validate the phone number
		var phone = $("#phone").val().trim();
		if (phone == "") {
			$("#phone").next().text("This field is required.");
			isValid = false;
		} else {
			$("#phone").next().text("");
		}
		$("#phone").val(phone);

		// prevent the submission of the form if any entries are invalid
		if (!isValid) {
			event.preventDefault();
		}
	}); // end submit

	// Tab functionality
	$(".tab_content").hide(); // Hide all tab content initially
	$("ul.tabs li:first").addClass("active").show(); // Activate first tab
	$(".tab_content:first").show(); // Show first tab content

	// On tab click
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active"); // Remove "active" class from all tabs
		$(this).addClass("active"); // Add "active" class to clicked tab
		$(".tab_content").hide(); // Hide all tab content
		var activeTab = $(this).find("a").attr("href"); // Get ID of clicked tab
		$(activeTab).fadeIn(); // Show clicked tab content
		return false;
	});
});
