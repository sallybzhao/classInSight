$(document).ready( function() {

	$('#add-variable-btn').click( function() {
		$('#variable-label').text('Selected variable');
		$('#select-variable').hide();
		var outcome = $('#select-variable').val();
		$('#variables-selected').text(outcome);
		$('#add-variable-btn').text("Edit variable")
	});

	var deleteIndex = 0;
	$('#add-parameter-btn').click( function() {
		$('#parameter-label').text('Selected parameters');
		var outcome = $('#select-parameter').val();
		$('#parameters-selected').append('<div> <a href="javascript:void(0);" id="delete-parameter"> X </a>' + '<p class="parameter">' + outcome + '</p> </div>');
	
	});

	$('#parameters-selected').on( 'click', '#delete-parameter', function() {
		console.log('ih');
		$(this).parent().remove();
	});

});