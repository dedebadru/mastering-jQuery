<h2>Subchapter 2 : Seperti Apa Cara Kerja Web application?</h2>

<p>Sebuah web application terdiri dari dari beberapa elemen yang saling bekerja sama agar bisa memberikan suatu layanan pada sebuah komputer atau mobile device. Pada gambar dibawah ini sebuah web application terdiri dari web server dan clients. Sebuah client bisa berupa komputer, tablet atau mobile device. Client melakukan akses data pada web server menggunakan sebuah web browser.</p>
<img src="https://github.com/PUSRISTEK/learning-jQuery/blob/master/images/1.2.1%20Web%20Applications.PNG">

<p>Network, sebuah sistem yang membuat client dan server dapat berkomunikasi. Internet adalah sebuah network skala besar yang terdiri dari sekumpulan networks kecil yang saling terhubung. Pada gambar 1.2.1 gambar cloud merepresentasikan network atau internet yang menghubungkan client dan server. Sebuah network bisa dikategorikan berdasarkan ukuran :</p>
<ul>
<li>1.1.	LAN (Local Area Network) sebuah network dengan skala yang sangat kecil yang membuat sekumpulan komputer dapat berkomunikasi dengan jarak yang dekat biasanya dalam satu gedung atau ruangan. Network seperti ini seringkali disebut dengan Intranet, dapat digunakan untuk menjalankan sebuah web application yang hanya bisa diakses oleh pegawai saja. </li>
<li>1.2.	WAN (Wide Area Network) terdiri dari sekumpulan LAN (Local Area Network) yang saling terhubung. Untuk mengirimkan informasi dari satu client ke komputer lainya sebuah router akan memastikan network mana yang paling dekat ke target komputer dan mengirimnya melalui network tersebut. Sebuah WAN bisa dimiliki oleh sebuah perusahaan privat atau lebih dari satu perusahaan privat.</li>
<li>1.3.	ISP (Internet Service Provider) adalah sebuah perusahaan yang memiliki izin untuk memiliki dan mengatur WAN yang terhubung ke internet di seluruh dunia melaui Internet Exchange Point. Sebuah ISP akan menawarkan jasa kepada masyarakat agar bisa mengakses network yang dimilikinya.</li>
</ul>

<img src="https://github.com/PUSRISTEK/learning-jQuery/blob/master/images/1.2.2%20Static%20Page.PNG">

<p>Static Web Page, adalah sebuah halaman yang kontenya tidak akan berubah setiap kali kita melakukan HTTP Request. Halaman seperti ini secara langsung dikirimkan web server ke web browser saat browser melakukan request. Pada web browser kita bisa mengetahui sebuah halaman bersifat static dengan melihat ekstensinya pada address bar web browser. Jika ekstensinya adalah htm atau HTML maka halaman tersebut adalah halaman static.</p>

<p>Pada gambar 1.2.2 menunjukan bagaimana cara kerja web application, bagaimana sebuah client melakukan permintaan yang disebut dengan HTTP Request sebuah web page static ke web server. HTTP adalah kependekan dari hyper text transfer protocol dan dengan HTTP Request sebuah web server bisa mengetahui file mana yang diminta oleh client.</p>

<p>Saat web server menerima HTTP Request, server akan mencari file dalam disk drive yang dimilikinya. Setelah file ditemukan web server akan kembali mengirikan HTTP Response ke web browser milik client. Web browser akan menerjemahkan kode HTML (Hyper Text Markup Language) menjadi suatu tampilan visual (Render) yang mudah difahami.</p>

<img src="https://github.com/PUSRISTEK/learning-jQuery/blob/master/images/1.2.3%20Dynamic%20Page.PNG">
<p>Dynamic Web Page, adalah sebuah halaman yang dihasilkan oleh suatu program atau script dalam web server setiap kali permintaan dilakukan. Program atau script tersebut akan dieksekusi oleh application server yang dimiliki oleh server. Sebagai contoh Client meminta suatu gambar yang ada didalam database server maka HTTP Request akan dibaca dan script untuk mencari gambar yang diminta oleh client akan dieksekusi hasilnya akan diberikan kembali kepada client. (ada atau tidak ada gambar tersebut)</p>

<p>Permintaan yang dikirimkan ke web server termasuk data yang dibutuhkan application server untuk memproses permintaan. Seperti data yang ada didalam sebuah form, data tersebut sudah termasuk dalam HTTP Request. Saat web server menerima HTTP Request jika terdapat permintaan khusus pada application server maka script yang sesuai dengan permintaan pada server akan dieksekusi. Jika diperlukan script mampu melakukan permintaan pada database server sebagai data tambahan untuk menghasilkan sebuah halaman dinamis. Sebuah proses yang diselesaikan oleh application server kita bisa menyebutnya dengan server-side processing.</p>
