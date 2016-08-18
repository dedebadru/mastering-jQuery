$(document).ready(function() {
	$("#bergabung").click(
		function() {
			var emailAddress1 = $("#alamat_email1").val();
			var emailAddress2 = $("#alamat_email2").val();
			var isValid = true;
			
			// validate the first email address
			if (emailAddress1 == "") { 
				$("#alamat_email1_error").text("Email wajib diisi..");
				isValid = false;
			} else {
				$("#alamat_email1_error").text("");
			} 
			
			// validate the second email address
			if (emailAddress2 == "") { 
				$("#alamat_email2_error").text("Email wajib diisi..");
				isValid = false; 
			} else if (emailAddress1 !== emailAddress2) { 
				$("#alamat_email2_error").text("Email harus sama..");
				isValid = false;
			} else {
				$("#alamat_email2_error").text("");
			}
			
			// validate the first name entry  
			if ($("#nama").val() == "") {
				$("#nama_error").text("Nama wajib diisi..");
				isValid = false;
			} 
			else {
				$("#nama_error").text("");
			}
			
			// submit the form if all entries are valid
			if (isValid) {
				$("#email_form").submit(); 
			}
		} // end function
	);	// end click
	
		
	$("#batalkan").click(function() {
		$(":text").val("");
		$(":text").next().text("*");
		$("#alamat_email1").focus();
	});	// end click
	
	$(":text").dblclick(function() {
		//$("#batalkan").click();
		$(this).val("");
	});
	
	$("#alamat_email1").focus();
}); // end ready
