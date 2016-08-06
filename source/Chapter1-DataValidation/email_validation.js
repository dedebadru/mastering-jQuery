var $ = function (id) {
    return document.getElementById(id);
}
var gabung = function () {
	var alamatEmail1 = $("alamat_email1").value;
	var alamatEmail2 = $("alamat_email").value;
	var isValid = true;
	
	if (alamatEmail1 == "") { 
		$("alamat_email1_error").firstChild.nodeValue = "Alamat Email Wajib diisi..";
		isValid = false;
	} else {
		$("alamat_email1_error").firstChild.nodeValue = "";
	} 

	if (alamatEmail1 != alamatEmail2) { 
		$("alamat_email2_error").firstChild.nodeValue = "Email harus sama dengan email sebelumnya..";
		isValid = false;
	} else {
		$("alamat_email2_error").firstChild.nodeValue = "";
	}  
	if ($("nama").value == "") {
		$("nama_error").firstChild.nodeValue = "Nama wajib diisi..";
		isValid = false;
	} else {
		$("nama_error").firstChild.nodeValue = "";
	}  
	
	if (isValid) {
		$("email_form").submit(); 
	}
}

window.onload = function () {
    $("bergabung").onclick = gabung;
    $("alamat_email1").focus();
}
