$(document).ready( function() {
	$('#add-variable-btn').click( function() {
		$('#variable-label').text('Selected variable');
		$('#select-variable').hide();
		var outcome = $('#select-variable').val();
		$('#variables-selected').text(outcome);
		$('#add-variable-btn').text("Edit variable")
	});


	$('#add-parameter-btn').click( function() {
		$('#parameter-label').text('Selected parameters');
		var outcome = $('#select-parameter').val();
		$('#parameters-selected').append('<a href="javascript:void(0);" id="delete-parameter"> X </a>' + '<p class="parameter">' + outcome + '</p>');
	});
});