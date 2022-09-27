$(document).ready(function() {
	// DatePicker
	$("#datepicker").datepicker({
		autoclose: true,
		todayHighlight: true,
		format: 'dd/mm/yyyy',
		pickerPosition: "bottom-left"
	}); // .datepicker('update', new Date())
});