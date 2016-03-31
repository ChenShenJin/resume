GoodWillDesign.contactForm = function(){
	$("#contact-submit").on('click',function() {
		$contact_form = $('#form1');
		
		var fields = $contact_form.serialize();
		
		$.ajax({
			type: "POST",
			url: "../contact.php",
			data: fields,
			dataType: 'json',
			success: function(response) {
				
				if(response.status){
					$('#form1 input').val('');
					$('#form1 textarea').val('');
				}
				
				$('#response').empty().html(response.html);
			}
		});
		return false;
	});
}
