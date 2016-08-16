"use strict";
var $ = function (id) {
    return document.getElementById(id);
}
var gabung = function () {
	var alamatEmail1 = $("alamat_email1");
	var alamatEmail2 = $("alamat_email2");
	var nama = $("nama");
	var isValid = true;
	
	// validate the first entry
	if (alamatEmail1.value == "") { 
		alamatEmail1.nextElementSibling.firstChild.nodeValue = "Wajib diisi..";
		isValid = false;
	} else {
		alamatEmail1.nextElementSibling.firstChild.nodeValue = "";
	} 
	
	// validate the second entry
	if (alamatEmail2.value == "") { 
		alamatEmail2.nextElementSibling.firstChild.nodeValue = "Wajib diisi..";
		isValid = false; 
	} else if (alamatEmail1.value !== alamat_email2.value) { 
		alamatEmail2.nextElementSibling.firstChild.nodeValue = "Email harus sama..";
		isValid = false;
	} else {
		alamatEmail2.nextElementSibling.firstChild.nodeValue = "";
	}
	
	// validate the third entry  
	if (nama.value == "") {
		nama.nextElementSibling.firstChild.nodeValue = "Wajib diisi..";
		isValid = false;
	} else {
		nama.nextElementSibling.firstChild.nodeValue = "";
	}  
	
	// submit the form if all entries are valid
	if (isValid) {
		$("email_form").submit(); 
	}
}
window.onload = function () {
    $("bergabung").onclick = gabung;
    $("alamat_email1").focus();
}
