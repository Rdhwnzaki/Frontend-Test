# Test Roots

### Berikut adalah jawaban dari soal test Logic dan Technical

## Berikut Jawaban Test Teori

1. Singleton Design Pattern adalah Creational Design Pattern yang memastikan hanya ada satu jenis instance tersebut dalam memory yang dapat diakses di berbagai code.
   Contoh Singleton terdapat pada link berikut : (https://github.com/Rdhwnzaki/Singleton-Example)

2. Abstract Factory dan Factory Keduanya memiliki tujuan yang sama, yaitu memberikan implementasi objek sesuai input user. Bedanya, jika Factory Method hanya berfokus pada inheritance, maka Abstract Factory juga berfokus pada composition.

3. Observer adalah salah satu desain pola dalam pemrograman berorientasi objek. Ini adalah cara untuk memungkinkan sebuah objek untuk mengamati perubahan pada objek lain.
   Contoh Observer terdapat pada link berikut : (https://gist.github.com/Rdhwnzaki/62b12d26edf6268d8fceaae11da50530)

4. MVC atau Model View Controller adalah sebuah cara dalam membuat aplikasi atau website dengan memisahkan masing-masing databasenya di Model, tampilannya di View, dan perintah-perintah yang memiliki fungsi (function) dalam menghubungkan model dan view tersebut di Controller.

MVC sangat membantu sehingga proses pengembangan website menjadi lebih cepat. Hal ini karena MVC memisahkan bagian Model, View dan Controller. Jadi jika dalam pembuatan website ini terbagi dalam tim, maka pengerjaannya akan terbagi antara backend dan frontend dan proses testing dapat dilakukan per bagian yang telah siap, daripada menunggu keseluruhan website selesai.

5. GIT adalah sebuah tools bagi para programmer dan developer yang berfungsi sebagai control system untuk menjalankan proyek pengembangan software. GIT adalah singkatan dari Group Inclusive Tour. Tujuan penggunaan GIT yakni untuk mengelola versi source code program dengan menentukan baris serta kode yang akan ditambahkan atau diganti. Cara kerja Git melibatkan beberapa file proyek yang tersimpan di direktori proyek. Kemudian, file yang tersimpan tadi akan diperbarui yang dipindah ke Staging Area. Setelah peninjauan, file kode tersebut dimuat ke Git Repository.

6. GIT commit digunakan untuk menyimpan perubahan yang sudah dilakukan, namun tidak ada perubahan yang terjadi pada remote repository. Langkah - langkah untuk melakukan git commit yaitu :

- Modifikasi terlebih dahulu file yang akan kita commit
- Kemudian ubah file ke staged dengan perintah git add contoh "git add index.js"
- Setelah itu kita ubah file staged menjadi commited dengan perintah git commit contoh git commit -m "First commit"

7. Git branch adalah membuat cabang dari repositori utama dan melanjutkan melakukan pekerjaan pada cabang yang baru. Manfaat dari Git branch adalah tidak merubah cabang utama jadi apabila dalam cabang yang baru terdapat error, maka error tersebut tidak akan terbawa ke cabang utama.

8. Merge-conflict merupakan sebuah kasus di mana terdapat pertentangan (conflict) ketika proses integrasi (merge) antara dua source berbeda. Sejauh ini saya menyelesaikan merge conflict dengan cara menghapus conflict pada source yang lama dan menggantinya dengan source yang baru karena yang di source yang terbaru bug nya sudah ditangani.

9. Git stash berfungsi untuk memudahkan developer untuk ‘melenyapkan’ perubahan kode program, melakukan perubahan lain, dan kembali lagi pada kode yang sebelumnya telah dikerjakan. Fasilitas stashing tidak hanya dapat mengembalikan kode, namun dapat melakukan merging dengan perubahan yang sekarang.

Cara penggunaan git stash untuk mengambil perubahan yang tersimpan di dalam stash ke branch yang sedang aktif dengan cara berikut:

- Terapkan perubahan dari stash ke branch aktif "git stash apply NAMA-STASH"
- Terapkan perubahan dan hapus file dari stash "git stash pop NAMA-STASH"
  Cara penggunaan git stash untuk menghapus perubahan dari daftar stash, jika kita sudah tidak lagi membutuhkannya dengan cara berikut:

- Menghapus stash yang dipilih "git stash drop NAMA-STASH"
- Menghapus semua stash "git stash clear"

10. Perbedaan antara Git reset dan Git revert adalah git reset akan mengembalikan keadaan berkas menjadi seperti sebelumnya dan akan menghapus perubahan dimasa sekarang. git revert akan mengembalikan keadaan berkas menjadi seperti sebelumnya dan akan digabungkan dengan kondisi saat ini.

### Jawaban Problem Solving Test terdapat pada link berikut : (https://github.com/Rdhwnzaki/Problem-Solving-Test)

### Jawaban SQL Test terdapat pada link berikut : (https://gist.github.com/Rdhwnzaki/3e2b4bc56be6d936e2212b58aa860a19)

### Untuk Frontend Test saya membuat aplikasi Admin Toko sederhana dimana Admin bisa melihat, membuat, mengedit, dan juga menghapus product. Pada halaman home Admin dapat melihat, memfilter dan juga melakukan search pada data product, terdapat pula button untuk menambah, mengedit dan juga menghapus data product. Jika admin menekan button tambah dan juga edit otomatis akan dialihkan ke halaman lain untuk mengisi data product yang akan diedit ataupun ditambahkan. Terdapat pada link berikut : (https://github.com/Rdhwnzaki/Frontend-Test)
