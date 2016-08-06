<h2>Subchapter 3 : Apa itu client-side processing?</h2>

<p>Javascript adalah scripting language yang bisa dan awalnya digunakan sebagai client-side processing. Dengan javascript kita bisa mengubah suatu halaman secara langsung pada browser client menjadi dinamis tanpa memerlukan server-side processing. Namun hari ini javascript sudah berevolusi, ia tidak hanya digunakan untuk client-side processing namun juga bisa digunakan sebagai server-side processing semenjak ada node.js. Pada buku ini kita tidak akan membahas node.js, mungkin nanti saya akan menulis ebook tentang node.js </p>
<p>Saat kita membuat sebuah javascript application kita pasti menggunakan HTML (Hyper Text Markup Language) untuk mengatur konten dan struktur, selanjutnya kita pasti menggunakan CSS (Cascading Style Sheet) untuk memberi format pada konten dan terakhir dengan javascript kita bisa melakukan client-side processing.</p>
<p>Hal pertama yang akan kita lakukan dengan client-side processing adalah melakukan data validation. Apa itu data validation? Kita akan mempelajarinya sekarang dengan membuat sebuah interface sederhana untuk mempraktekan data validation. Di bawah ini adalah tampilan interface yang akan kita gunakan untuk melakukan data validation:</p>

<img src="https://github.com/PUSRISTEK/learning-jQuery/blob/master/images/1.2.4%20Interface%20untuk%20Data%20Validation.png">

<p>Pada interface diatas terdapat 3 kolom entry yang harus kita isi kemudian menekan tombol gabung. Bintang asterisk berwarna merah menunjukan bahwa kolom entry tersebut wajib diisi sebelum menekan tombol gabung. Ketika tombol gabung di tekan javascript akan memeriksa apakah data sudah valid atau belum. Jika belum valid informasi pemberitahuan untuk validasi akan muncul.</p>
<p>Dibawah ini adalah kode index.HTML untuk membuat interface :</p>

```html
<!DOCTYPE HTML>
<HTML lang="en">
<head>
	<meta charset="UTF-8">	
	<title>Data Validation</title>
   	<link rel="stylesheet" href="email_validation.CSS">
   	<script src="email_validation.js"></script>
</head>
<body>
    <main>
        <h1>Daftar Mailing List</h1>
        <form id="email_form" name="email_form" action="success.HTML" method="get">
	        <label for="alamat_email1">Alamat Email:</label>
	        <input type="text" id="alamat_email1" name="alamat_email1">
	        <span id="alamat_email1_error">*</span><br>
	        
	        <label for="alamat_email2">Verifikasi Lagi Email:</label>
	        <input type="text" id="alamat_email2" name="alamat_email2">
	        <span id="alamat_email2_error">*</span><br>
	        
	        <label for="nama">Nama :</label>
	        <input type="text" id="nama" name="nama">
	        <span id="nama_error">*</span><br>
	        
	        <label>&nbsp;</label>
	        <input type="button" id="bergabung" value="Gabung">
	    </form>
    </main>
</body>
</HTML>
```

<p>Pada kode HTML diatas diawali dengan deklarasi <!DOCTYPE HTML>, artinya kita akan menggunakan HTML 5. Selanjutnya kita membuat meta tag menggunakan UTF-8 (sebuah character encoding untuk halaman). Di dalam head section kita menyimpan format CSS dan script untuk melakukan client-side processing secara eksternal. Di dalam body section kita menggunakan main tag sebuah tag dalam HTML 5 yang akan sering kita gunakan. Di dalamnya terdapat beberapa tag lainya seperti <h1>, <span>, <label> dan sebagainya. </p>
<p>Satu lagi ada perbedaan yang harus kita ingat kembali antara tag dan element.
<label> nama : </label>
</p>

<p>Tag adalah syntax untuk membentuk struktur halaman (ditandai dengan warna merah) sementara element adalah tag dan nilai yang ada didalam sebuah tag (ditandai dengan warna biru).</p>

<p>Selanjutnya dibawah ini adalah kode CSS yang digunakan untuk membuat interface :</p>

```css
body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: white;
    margin: 0 auto;
    width: 770px;
    padding: 0 2em 1em;
    border: 3px solid blue;
}
h1 {
	color: green;
	margin-bottom: .5em;	
}
label {
	float: left;
    width: 10em;
    text-align: right;
}
input {
    margin-left: 1em;
    margin-bottom: .5em;
}
span {
	color: red;
}
```

<p>Pada kode CSS diatas kita bisa melihat rule set untuk tag body, h1, label, input dan span pada rule set tag body terdapat property untuk mengatur font-family, background-color, margin dan sebagainya. </p>

<p>Di bawah ini adalah kode javascript untuk melakukan client-side processing pada interface :</p>

```javascript
var $ = function (id) {
    return document.getElementById(id);
}
var gabung = function () {
	var alamatEmail1 = $("alamat_email1").value;
	var alamatEmail2 = $("alamat_email2").value;
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

```

<p>Saat kita menggunakan sebuah javascript untuk memanipulasi HTML maka kita telah melakukan DOM Scripting. DOM adalah singkatan dari Document Object Model sebuah representasi yang di dalamnya terdapat representasi element dan attribute dari kode HTML. Ketika javascript mengubah sebuah aspek didalam DOM maka tampilan yang dihasilkan oleh browser juga akan ikut berubah.</p>
<p>Pada kode javascript diatas terdapat 3 fungsi, yaitu fungsi $ untuk mendapatkan nilai dalam sebuah element HTML berdasarkan ID, fungsi gabung akan dieksekusi ketika tombol gabung dalam HTML diklik,  fungsi terakhir adalah window.onload yang akan berjalan setelah DOM berhasil dimuat oleh browser. </p>
<p>Di dalam fungsi gabung kita bisa melihat terdapat empat if statements dengan else clauses yang menjadi logika untuk melakukan data validation. Pada if statements yang pertama kita bisa melihat kode dibawah ini :</p>
```javascript
if (alamatEmail1 == "") { 
$("alamat_email1_error").firstChild.nodeValue = "Alamat Email Wajib diisi..";
```
<p>Jika kolom alamat email pertama kosong karena pengguna tidak memberi input maka javascript akan mengganti bintang asterisk * pada interface menjadi pemberitahuan informasi validasi.</p>

<img src="https://github.com/PUSRISTEK/learning-jQuery/blob/master/images/1.2.5%20Data%20Validation%20Alamat%20Email.png">
<p>Di bawah ini ketika pengguna memasukan input yang berbeda dengan alamat sebelumnya :</p>
<img src="https://github.com/PUSRISTEK/learning-jQuery/blob/master/images/1.2.6%20Data%20Validation%20Verifikasi%20Ulang%20Email.png">
