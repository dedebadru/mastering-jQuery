<h2>Subchapter 4 : Quick Fighting dengan HTML 5 & CSS 3</h2>

<p>Seluruh implementasi yang ditulis didalam buku ini menggunakan HTML 5 Semantic Element, sebuah element yang maknanya jelas dan mudah dimengerti baik untuk browser dan developer. Saat dulu kita sering kali menandai suatu blok kode menggunakan tag div seperti <div id="nav"> <div class="header"> <div id="footer"> sekarang pada HTML 5 terdapat semantic element yang dapat mempermudah untuk menjelaskan hal tersebut yaitu :</p>
```
<article>
<aside>
<details>
<figcaption>
<figure>
<footer>
<header>
<main>
<mark>
<nav>
<section>
<summary>
<time>
```

<img src="https://github.com/PUSRISTEK/learning-jQuery/blob/master/images/1.2.7%20Struktur%20Semantic%20Elements.gif">

<p>Sebelumnya kita menggunakan tag div atau division untuk membagi sebuah konten didalam halaman kemudian memberinya id attributes agar CSS bisa mengaksesnya untuk memberikan sebuah format. Namun pada HTML 5 tag div (termasuk tag span) alangkah lebih baiknya tidak digunakan lagi untuk membuat struktur sebuah halaman kecuali digunakan untuk kepentingan javascript application seperti yang telah kita lakukan dalam data validation sebelumnya. </p>

<p>Selain itu secara historis tag span biasa digunakan untuk menjelaskan sebuah teks yang sering diberi format dengan CSS tetapi standar hari ini lebih baik menggunakan tag sesuai dengan konten elemen yang diinginkan misal menggunakan tag <q> untuk membuat sebuah double quotation mark. Sehingga adanya HTML 5 semantic element memang digunakan untuk mengganti posisi tag div.</p>

<p>Selanjutnya kita akan mempelajari HTML Attributes yang sering digunakan dalam membuat javascript application. Kita akan menggunakan id attribute untuk mengidentifikasi sebuah HTML element dan menggunakan class attribut yang bisa diterapkan pada lebih dari satu HTML element. Kemudian pada label di data validation sebelumnya terdapat for attribute yang merelasikan sebuah label dengan sebuah input dan title attribute yang bisa kita gunakan untuk memberikan tooltip pada sebuah HTML element. Pada server-side processing sebuah name attribute digunakan untuk mengakses data yang dikirimkan.</p>

<p>Pada CSS atau (Cascading Style Sheet) sebelumnya kita menggunakan mode external style sheet yaitu kode CSS dibuat terpisah. Kita bisa menggunakan suatu CSS dalam suatu halaman ini dikenal dengan sebutan embedded style sheet. Seringkali dibuat external style sheet sehingga satu kode CSS bisa digunakan untuk banyak halaman kecuali kita memiliki suatu halaman dengan CSS yang harus unique.</p>

<p>Contoh penggunaan external style sheet :</p>
```html
<link rel="stylesheet" href="email_validation.CSS">
```

<p>Contoh penggunaan embedded style sheet :</p>
```css
<style>
    body {
                font-size : 80%;
            }
</style>
```

<p>Sekarang kita akan belajar menggunakan CSS Selector untuk menerapkan sebuah style pada HTML Page. Di bawah ini adalah kode HTML yang memiliki semantic element main dan footer element. Pada main terdapat dua buah element paragraf yang memiliki class attribute “blue” dan pada footer terdapat satu paragraf yang memiliki dua class attribute :</p>
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">	
	<title>Data Validation</title>
   	<link rel="stylesheet" href="selector.css">
</head>
<body>
    <main>
        <h1>Title</h1>
		<p class="blue"> Paragraf 1 </p>
		<p class="blue"> Paragraf 2 </p>
    </main>
	
	<footer>
		<p id="copyleft" class="blue right"> Copyleft PT.Robinhood</p>
	</footer>
</body>
</html>
```

<p>Pada kode CSS dibawah ini terdapat 4 rule set yang ditandai dengan warna merah, disebut dengan type selector yang bisa kita gunakan untuk memberikan style pada sebuah HTML element. Selanjutnya terdapat 1 rule set yang ditandai dengan warna hijau, disebut dengan id selector yang bisa kita gunakan untuk memberikan style pada suatu HTML element berdasarkan id attributes. Terakhir terdapat 2 rule set yang ditandai dengan warna biru, disebut dengan class selector yang bisa kita gunakan untuk memberikan style pada lebih dari satu HTML element.</p>

```css
body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 1em auto;
    width: 500px;

}
main {
    display: block;
    padding: 1em;
	border: 2px solid black;
}

h1 {
	margin: 0 0 .25em;	
}

p {
	margin: .25em 0 .25em 3em;
}

#copyleft {
	font-size: 90%;
}

.blue {
	color: blue;
}

.right {
	text-align: right;
}
```

<p>Di bawah ini adalah halaman hasil dari kode HTML dan CSS sebelumnya :</p>
<img src="https://github.com/PUSRISTEK/learning-jQuery/blob/master/images/1.2.8%20Implementasi%20CSS%20Selector.png">
