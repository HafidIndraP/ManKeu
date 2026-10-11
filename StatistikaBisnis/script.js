/* Lab SPSS - pendamping belajar analisis data
   Struktur data: CH (modul), TUT (tutorial SPSS), TREE (pemilih uji), QS (latihan). */

const PARTS = ["Fondasi", "Olah data & uji beda", "Kualitas instrumen"];

/* ---------- MODUL ---------- */
const CH = [
{n:1, part:0, t:"Dasar Statistik & Grafik",
 lead:"Sebelum membuka SPSS, kenali dulu jenis datanya dan cara menggambarkannya dengan tabel serta grafik yang tepat.",
 pts:[
  "**Populasi** = seluruh objek yang diteliti; **sampel** = bagian yang benar-benar diamati. Angka yang menggambarkan populasi disebut **parameter**, angka dari sampel disebut **statistik**.",
  "**Simple random sampling**: setiap anggota punya peluang sama dan terpilih murni karena kebetulan. **Systematic sampling**: daftar populasi diambil dengan interval tetap, titik awalnya dipilih acak.",
  "**Statistik deskriptif** merangkum data (tabel, grafik, ukuran ringkas). **Statistik inferensial** memakai sampel untuk menarik kesimpulan, perkiraan, dan prediksi tentang populasi.",
  "Variabel **kategorikal** (nominal, ordinal) vs **numerik** (diskrit hasil menghitung, kontinu hasil mengukur).",
  "Nominal: kode angka hanya label (1 = pria, 2 = wanita). Ordinal: ada urutan, misalnya rating kepuasan 1 sampai 5.",
  "**Distribusi frekuensi** adalah daftar kelas beserta jumlah pengamatannya; versi relatifnya memakai persen. **Cross table** (crosstab) menyilangkan dua variabel kategorikal.",
  "Kelas pada data numerik tidak boleh tumpang tindih, misalnya 20 sampai 29 lalu 30 sampai 39.",
  "Bentuk sebaran bisa **simetris** (kedua sisi seperti cermin) atau **miring** (skewed)."
 ],
 tb:{t:"Data apa, grafik apa",h:["Jenis data","Grafik","Gunanya"],r:[
  ["Kategorikal","Bar chart","Membandingkan frekuensi tiap kategori"],
  ["Kategorikal","Pie chart","Porsi tiap kategori terhadap keseluruhan"],
  ["Penyebab masalah","Pareto","Memisahkan “vital few” dari “trivial many”"],
  ["Dua variabel kategorikal","Cross table, component atau cluster bar","Membandingkan satu variabel menurut variabel lain"],
  ["Time series","Line chart","Melihat tren dari waktu ke waktu"],
  ["Numerik","Histogram, stem-and-leaf","Melihat bentuk sebaran"],
  ["Dua variabel numerik","Scatter plot","Melihat hubungan, pola, dan outlier"]]},
 gl:[["Parameter","Ukuran yang menggambarkan populasi."],["Statistik","Ukuran yang menggambarkan sampel."],["Time series","Data satu hal yang diukur berurutan menurut waktu."],["Outlier","Titik data ekstrem yang jauh dari pola umum."],["Skewed","Sebaran miring, tidak simetris."]],
 tu:[]},

{n:2, part:0, t:"Skala Ukur & Peta Uji",
 lead:"Skala data menentukan uji apa yang boleh dipakai. Kuasai peta ini dan memilih uji tidak lagi menebak.",
 pts:[
  "Analisis data bertujuan mengambil informasi relevan dari data untuk **menguji hipotesis nol (H0)**: ditolak atau tidak ditolak berdasarkan data sampel.",
  "**Pengukuran** = memberi angka atau simbol pada karakteristik menurut aturan tertentu. Menurut Stevens (1946) ada empat skala.",
  "**Nominal**: label kelompok. Angka tidak bermakna, jadi rata-rata dan simpangan baku tidak pantas dihitung; cocok untuk modus dan frekuensi.",
  "**Ordinal**: kategori plus urutan (peringkat merek 1 sampai 4). Cocok untuk modus, median, dan statistik non-parametrik seperti korelasi peringkat.",
  "**Interval**: jarak antar nilai bermakna (rating preferensi 5 tingkat). **Rasio**: interval ditambah titik nol mutlak (umur, gaji).",
  "Nominal dan ordinal disebut **non-metrik**; interval dan rasio disebut **metrik**.",
  "**Metode dependen**: ada variabel bebas dan terikat. **Metode interdependen**: tidak ada pembagian itu; tujuannya memahami bagaimana dan mengapa variabel saling berkaitan.",
  "**Univariat**: satu variabel terikat. **Multivariat**: lebih dari satu variabel terikat atau bebas.",
  "Untuk data interdependen metrik dipakai korelasi sederhana (dua variabel), principal component, atau analisis faktor (lebih dari dua). Untuk non-metrik dipakai tabel kontingensi, loglinear, atau correspondence analysis."
 ],
 tb:{t:"Peta uji metode dependen",h:["Variabel terikat","Variabel bebas","Uji"],r:[
  ["1 metrik","1 non-metrik, 2 kategori","t-test"],
  ["1 metrik","1 non-metrik, lebih dari 2 kategori","ANOVA"],
  ["1 metrik","1 atau lebih metrik","Regresi"],
  ["2 atau lebih metrik","1 atau lebih non-metrik","MANOVA"],
  ["1 atau lebih metrik","lebih dari 1 non-metrik","Canonical correlation"],
  ["1 non-metrik, 2 kategori","1 atau lebih metrik","Analisis diskriminan"],
  ["1 non-metrik, lebih dari 2 kategori","1 atau lebih metrik","Multiple discriminant"],
  ["1 non-metrik, 2 kategori","metrik dan non-metrik","Regresi logistik"],
  ["lebih dari 1 metrik","lebih dari 1 metrik","Analisis jalur (path), SEM"]]},
 note:"Materi menyebut skala Likert 5 poin sebagai skala ordinal, sementara contoh rating preferensi diperlakukan sebagai interval. Tanyakan kebiasaan dosenmu untuk mata kuliah ini.",
 gl:[["Metrik","Data interval atau rasio, angkanya bermakna secara hitung."],["Non-metrik","Data nominal atau ordinal."],["Dependen","Variabel yang dipengaruhi (terikat)."],["Independen","Variabel yang memengaruhi (bebas)."],["H0","Hipotesis nol: tidak ada beda atau tidak ada hubungan."]],
 link:{h:"#/pilih",t:"Coba pemilih uji interaktif"},
 tu:[]},

{n:3, part:1, t:"SPSS, Deskriptif & Normalitas",
 lead:"Kenalan dengan SPSS, lalu periksa datamu lewat statistik deskriptif, crosstab, dan uji normalitas sebelum uji lanjutan.",
 pts:[
  "**SPSS** (Statistical Package for the Social Sciences) adalah perangkat lunak analisis statistik parametrik dan non-parametrik, kini dikembangkan IBM.",
  "Data baru: `File › New › Data`, lalu isi di **Data Editor**. Variabel didefinisikan di tab Variable View. Data dari Excel: `File › Open › Data` dan pilih tipe file Excel.",
  "**Cross-section**: banyak entitas diukur pada satu waktu. **Time series**: satu entitas diukur dari waktu ke waktu. Contoh di materi: file crossec1 berisi 100 responden dan 12 variabel survei keuangan keluarga.",
  "**Statistik deskriptif** memberi gambaran data: mean, simpangan baku, varians, minimum, maksimum, jumlah, range, skewness, dan kurtosis.",
  "**Crosstab + Chi-square** dipakai untuk dua variabel nominal: apakah keduanya berasosiasi?",
  "**Normalitas** adalah langkah pertama sebelum analisis multivariat. Data normal punya skewness dan kurtosis mendekati nol.",
  "Tiga cara cek normalitas: skewness dan kurtosis, uji **Kolmogorov-Smirnov** (H0: data normal), dan **histogram**. Histogram bisa menipu, jadi jangan jadi satu-satunya bukti.",
  "Pola penting: pada **uji asumsi** (normalitas, Levene) kamu berharap sig lebih besar dari 0,05. Pada **uji hipotesis** (t, F) biasanya kamu berharap sig lebih kecil dari 0,05."
 ],
 gl:[["Data Editor","Jendela utama SPSS tempat data dan variabel."],["Skewness","Ukuran kemiringan sebaran; dekat 0 berarti simetris."],["Kurtosis","Ukuran puncak sebaran; dekat 0 berarti puncak normal."],["Sig. (p)","Peluang hasil sebesar itu jika H0 benar; pembandingnya biasanya 0,05."],["Asosiasi","Hubungan antara dua variabel kategorikal."]],
 tu:["deskriptif","crosstab","ks","histogram"]},

{n:4, part:1, t:"Uji Beda: t-test & ANOVA",
 lead:"Bandingkan rata-rata antar kelompok. Dua kelompok pakai t-test, tiga kelompok atau lebih pakai ANOVA.",
 pts:[
  "**t-test** membandingkan rata-rata **dua kelompok** pada satu outcome. **Independent**: dua kelompok berisi orang berbeda. **Paired**: subjek yang sama diukur dua kali (sebelum dan sesudah).",
  "**p-value** adalah peluang menemukan beda rata-rata sebesar itu jika sebenarnya tidak ada beda. Ambang umum 0,05.",
  "Pada independent t-test, **periksa Levene dulu**. Sig lebih besar dari 0,05 berarti varians sama, pakai baris *equal variances assumed*. Sig lebih kecil dari 0,05 berarti pakai baris *not assumed*.",
  "**ANOVA** membandingkan rata-rata **tiga kelompok atau lebih**. One-way: satu faktor. Two-way: dua faktor. Bisa menguji **main effect** (pengaruh langsung) dan **interaction effect** (pengaruh gabungan).",
  "Asumsi ANOVA: **varians homogen** (Levene), **sampel acak**, dan **normalitas**. ANOVA cukup robust terhadap pelanggaran kecil sampai sedang.",
  "ANOVA hanya menjawab “ada yang beda atau tidak”. **Post hoc** (Tukey, Bonferroni) menunjukkan pasangan kelompok mana yang beda. Post hoc tidak jalan untuk faktor yang kurang dari tiga kategori.",
  "**Adjusted R square** menunjukkan seberapa besar variasi outcome yang dijelaskan oleh faktor.",
  "**ANCOVA** = ANOVA dengan variabel kontrol (kovariat). **MANOVA** = ANOVA dengan dua outcome atau lebih sekaligus."
 ],
 tb:{t:"Cara mengingat",h:["Uji","Kelompok","Outcome","Contoh"],r:[
  ["t-test","2 kelompok","1","Laki-laki vs perempuan → kepuasan"],
  ["ANOVA","3 kelompok atau lebih","1","Gen Z vs Milenial vs Gen X → kepuasan"],
  ["ANCOVA","kelompok + variabel kontrol","1","Metode A/B/C → prestasi, kemampuan awal sebagai kontrol"],
  ["MANOVA","kelompok","2 atau lebih","Metode A/B/C → prestasi dan motivasi"]]},
 note:"File materi Chapter 7 hanya membahas praktik SPSS sampai two-way ANOVA. ANCOVA dan MANOVA muncul sebagai perbandingan konsep.",
 gl:[["Levene","Uji kesamaan varians antar kelompok."],["Post hoc","Uji lanjutan untuk menemukan pasangan kelompok yang beda."],["Main effect","Pengaruh langsung satu faktor."],["Interaction","Pengaruh gabungan dua faktor atau lebih."],["Kovariat","Variabel kontrol pada ANCOVA."]],
 tu:["independen","paired","anova1","anova2"]},

{n:5, part:2, t:"Validitas, Reliabilitas & Analisis Faktor",
 lead:"Sebelum datamu dipakai untuk uji hipotesis, pastikan kuesionernya mengukur hal yang tepat dan konsisten.",
 pts:[
  "**Validitas = ketepatan** (mengukur apa yang seharusnya). **Reliabilitas = konsistensi** (hasil stabil jika diulang). Alat yang valid pasti reliabel, tetapi yang reliabel belum tentu valid.",
  "Jenis validitas: **content** (isi mewakili seluruh aspek yang diukur), **construct** (mengukur konstruk teoretis yang benar), **criterion** (berkaitan dengan kriteria luar; concurrent dan predictive), dan **face** (kesan sekilas, paling lemah).",
  "Bukti validitas konstruk: korelasi tinggi dengan skala sejenis (**konvergen**), korelasi rendah dengan skala yang tidak terkait (**divergen**), dan **analisis faktor**.",
  "Validitas butir kuesioner diuji dengan **korelasi item dengan skor total** (item analysis). Butir valid jika r hitung memenuhi r tabel atau sig kurang dari 0,05.",
  "Klasifikasi Guilford: 0,80 sampai 1,00 sangat tinggi; 0,60 sampai 0,80 tinggi; 0,40 sampai 0,60 cukup; 0,20 sampai 0,40 rendah; di bawah 0,20 sangat rendah.",
  "**Skala Likert 5 poin**: 1 sangat tidak setuju, 2 tidak setuju, 3 netral, 4 setuju, 5 sangat setuju.",
  "Dua cara mengukur reliabilitas: **repeated measure** (ukur ulang di waktu berbeda, melihat stabilitas) dan **one-shot** (sekali ukur, melihat konsistensi internal). Alatnya **Cronbach's alpha**; alpha di atas 0,70 dianggap reliabel (Nunnally, 1994).",
  "**Analisis faktor**: KMO di atas 0,50 dan Bartlett signifikan berarti data layak. Jumlah faktor ditentukan eigenvalue di atas 1. Rotasi **Varimax** memperjelas pengelompokan indikator ke faktor."
 ],
 tb:{t:"Validitas vs reliabilitas",h:["Aspek","Validitas","Reliabilitas"],r:[
  ["Makna","Ketepatan: mengukur yang seharusnya","Konsistensi: stabil saat diulang"],
  ["Analogi","Panah tepat mengenai sasaran","Panah selalu jatuh di titik yang sama"],
  ["Hubungan","Valid pasti reliabel","Reliabel belum tentu valid"],
  ["Sumber kesalahan","Systematic error (bias desain)","Random error (kondisi responden)"],
  ["Uji populer","Korelasi item-total, analisis faktor","Cronbach's alpha, test-retest"]]},
 note:"Di slide prosedur ini disebut CFA, tetapi PCA + Varimax di SPSS secara teknis bersifat eksploratori. CFA sesungguhnya dikerjakan lewat SEM (misalnya AMOS atau SmartPLS). Istilah ini bagus untuk ditanyakan ke dosen.",
 gl:[["Konstruk","Konsep abstrak yang diukur lewat beberapa indikator."],["Indikator","Butir pertanyaan yang mewakili konstruk."],["Cronbach's alpha","Ukuran konsistensi internal butir."],["KMO","Ukuran kecukupan sampel untuk analisis faktor."],["Eigenvalue","Besar variasi yang dijelaskan satu faktor."],["Factor loading","Kekuatan hubungan indikator dengan faktor."],["Unidimensional","Semua indikator konstruk berkumpul di satu faktor."]],
 tu:["validitas","reliabilitas","faktor"]}
];

/* ---------- TUTORIAL SPSS ---------- */
const TUT = [
{id:"deskriptif", ch:3, t:"Statistik Deskriptif",
 path:["Analyze","Descriptive Statistics","Descriptives"], file:"Crossec1.xls",
 goal:"Menggambarkan gaji kepala keluarga (EARNS) dari 100 responden: pusat, sebaran, dan bentuk datanya.",
 steps:[
  ["Buka datanya","`File › Open › Data`, lalu pilih file Crossec1.xls."],
  ["Buka menu analisis","`Analyze › Descriptive Statistics › Descriptives`."],
  ["Pilih variabel","Pindahkan EARNS ke kotak Variable(s)."],
  ["Atur statistiknya","Klik **Options**, centang Mean, Std. deviation, Variance, Range, Minimum, Maximum, Sum, Kurtosis, dan Skewness."],
  ["Jalankan","Klik **Continue**, lalu **OK**."]],
 out:[{t:"Descriptive Statistics",
  h:["","N","Range","Minimum","Maximum","Sum","Mean","Mean Std. Error","Std. Deviation","Variance","Skewness","Skew Std. Error","Kurtosis","Kurt Std. Error"],
  r:[["EARNS","100","29,25",",75","30,00","791,10","7,9110",",51297","5,12970","26,314","{{2,590}}",",241","{{8,422}}",",478"],["Valid N (listwise)","100","","","","","","","","","","","",""]]}],
 read:[
  ["N","Ada 100 dari 100 responden yang datanya terisi lengkap."],
  ["Minimum dan maksimum","Gaji kepala keluarga terendah 0,75 dan tertinggi 30 (ribu dolar). Range-nya adalah selisih keduanya, 29,25."],
  ["Mean dan simpangan baku","Rata-rata gaji 7,911 ribu dolar dengan simpangan baku 5,130. Simpangan yang besar relatif terhadap rata-rata berarti gaji antar keluarga sangat beragam."],
  ["Skewness dan kurtosis","Data normal punya keduanya mendekati 0. Di sini 2,590 dan 8,422, jauh dari 0. Data menumpuk di nilai kecil dengan ekor panjang ke kanan (positively skewed)."]],
 concl:"Data EARNS **tidak berdistribusi normal**.",
 tip:"Skewness dan kurtosis hanyalah indikasi awal. Untuk keputusan yang lebih formal lanjutkan ke uji Kolmogorov-Smirnov, dan lihat bentuknya lewat histogram."},

{id:"crosstab", ch:3, t:"Crosstab & Chi-square",
 path:["Analyze","Descriptive Statistics","Crosstabs"], file:"Crossec1.xls",
 goal:"Menguji apakah ada asosiasi antara tempat tinggal (REG: 1 Northeast, 2 Northcentral, 3 South, 4 West) dan ras (RACE: 1 kulit putih, 2 kulit hitam).",
 hyp:"H0: tidak ada hubungan antara REG dan RACE.",
 steps:[
  ["Buka datanya","`File › Open › Data`, pilih Crossec1.xls."],
  ["Buka Crosstabs","`Analyze › Descriptive Statistics › Crosstabs`."],
  ["Tentukan baris dan kolom","Masukkan REG ke kotak **Row(s)** dan RACE ke kotak **Column(s)**."],
  ["Minta Chi-square","Klik **Statistics**, centang **Chi-square**, lalu Continue."],
  ["Tampilkan persentase","Klik **Cells**, centang Observed, Expected, serta persentase Row, Column, dan Total. Continue, lalu **OK**."]],
 out:[
  {t:"REG * RACE Crosstabulation (dipangkas: Region 1 ditampilkan lengkap)",
   h:["REG","Isi sel","RACE 1","RACE 2","Total"],
   r:[["1","Count","28","1","29"],["","Expected Count","27,0","2,0","29,0"],["","% within REG","96,6%","3,4%","100,0%"],["","% within RACE","30,1%","14,3%","29,0%"],["","% of Total","28,0%","1,0%","29,0%"],["2","Count","27","0","27"],["3","Count","23","4","27"],["4","Count","15","2","17"],["Total","Count","93","7","100"]]},
  {t:"Chi-Square Tests",h:["","Value","df","Asymp. Sig. (2-sided)"],
   r:[["Pearson Chi-Square","5,720ᵃ","3","{{,126}}"],["Likelihood Ratio","7,061","3",",070"],["Linear-by-Linear Association","3,029","1",",082"],["N of Valid Cases","100","",""]],
   n:"a. 4 sel (50,0%) memiliki expected count kurang dari 5. Expected count minimum adalah 1,19."}],
 read:[
  ["Membaca tabel silang","Baris adalah REG, kolom adalah RACE. “% within REG” 96,6% berarti dari semua keluarga di Region 1, sebagian besarnya kulit putih. “% within RACE” 30,1% berarti dari semua keluarga kulit putih, itulah porsi yang tinggal di Region 1. “% of Total” memakai seluruh 100 responden sebagai pembanding."],
  ["Pearson Chi-Square","Nilainya 5,720 dengan sig 0,126. Karena lebih besar dari 0,05, H0 tidak ditolak."],
  ["Catatan di bawah tabel","Ada 4 sel (50%) dengan expected count kurang dari 5, sehingga hasil Chi-square ini kurang kuat."]],
 concl:"**Tidak ada asosiasi** antara tempat tinggal (REG) dan ras (RACE).",
 tip:"Karena banyak sel yang expected count-nya kecil, di laporan sungguhan pertimbangkan menggabungkan kategori atau memakai uji eksak. Itu tambahan dari saya, bukan dari slide."},

{id:"ks", ch:3, t:"Uji Normalitas Kolmogorov-Smirnov",
 path:["Analyze","Nonparametric Tests","Legacy Dialogs","1-Sample K-S"], file:"Crossec1.xls",
 goal:"Memastikan secara statistik apakah EARNS dan WEALTH berdistribusi normal.",
 hyp:"H0: data berdistribusi normal. HA: data tidak berdistribusi normal.",
 steps:[
  ["Buka datanya","`File › Open › Data`, pilih Crossec1.xls."],
  ["Buka menu uji","`Analyze › Nonparametric Tests › Legacy Dialogs › 1-Sample K-S`."],
  ["Pilih variabel","Masukkan EARNS dan WEALTH ke kotak Test Variable List."],
  ["Pilih distribusi","Pada Test Distribution, centang **Normal**."],
  ["Jalankan","Klik **OK**."]],
 out:[{t:"One-Sample Kolmogorov-Smirnov Test",h:["","EARNS","WEALTH"],
  r:[["Kolmogorov-Smirnov Z","1,859","2,271"],["Asymp. Sig. (2-tailed)","{{,002}}","{{,000}}"]]}],
 read:[
  ["Cari baris sig","Perhatikan Asymp. Sig. (2-tailed): 0,002 untuk EARNS dan 0,000 untuk WEALTH."],
  ["Bandingkan dengan 0,05","Keduanya jauh di bawah 0,05, jadi H0 ditolak."]],
 concl:"EARNS dan WEALTH **tidak berdistribusi normal**.",
 tip:"Ingat pola ini: pada uji asumsi (K-S, Levene) kamu berharap sig **lebih besar** dari 0,05 karena itu berarti asumsi terpenuhi."},

{id:"histogram", ch:3, t:"Histogram dengan Kurva Normal",
 path:["Graphs","Legacy Dialogs","Histogram"], file:"Crossec1.xls",
 goal:"Melihat bentuk sebaran EARNS dan WEALTH secara visual.",
 steps:[
  ["Buka datanya","`File › Open › Data`, pilih Crossec1.xls."],
  ["Buka menu grafik","`Graphs › Legacy Dialogs › Histogram`."],
  ["Pilih variabel","Masukkan EARNS ke kotak Variable. Ulangi untuk WEALTH."],
  ["Tampilkan kurva","Centang **Display normal curve**."],
  ["Jalankan","Klik **OK**."]],
 out:[{t:"Histogram EARNS (ilustrasi bentuk, bukan data asli)",chart:[92,70,48,30,18,11,7,4,3,2,1],n:"Batang menumpuk di sisi kiri dan ekornya memanjang ke kanan."}],
 read:[
  ["Bentuk batang","Sebagian besar data berkumpul di nilai kecil, sementara sebagian kecil tersebar jauh ke kanan."],
  ["Dibanding kurva normal","Bentuk batang tidak mengikuti kurva lonceng. Itu ciri kemiringan positif."]],
 concl:"Grafik **mendukung** hasil uji lain: EARNS dan WEALTH tidak normal dan miring ke kanan.",
 tip:"Histogram bisa tampak hampir normal padahal uji statistik menolak normalitas. Jadikan grafik sebagai pelengkap, bukan penentu."},

{id:"independen", ch:4, t:"Independent Samples t-test",
 path:["Analyze","Compare Means","Independent-Samples T Test"], file:"Employee data.sav",
 goal:"Apakah rata-rata pengalaman kerja sebelumnya (prevexp, dalam bulan) berbeda antara karyawan laki-laki dan perempuan?",
 hyp:"Levene H0: varians kedua kelompok sama. Uji-t H0: rata-rata kedua kelompok sama.",
 steps:[
  ["Buka datanya","`File › Open › Data`, pilih Employee data.sav."],
  ["Buka menu uji","`Analyze › Compare Means › Independent-Samples T Test`. Dipilih karena kelompok laki-laki dan perempuan berasal dari populasi yang berbeda."],
  ["Isi variabel","Previous Experience ke **Test Variable(s)**, Gender ke **Grouping Variable**."],
  ["Definisikan kelompok","Klik **Define Groups**: Group 1 = `m`, Group 2 = `f`."],
  ["Jalankan","Klik **Continue**, lalu **OK**."]],
 out:[
  {t:"Group Statistics",h:["Gender","N","Mean","Std. Deviation","Std. Error Mean"],r:[["Male","258","111,62","109,692","6,829"],["Female","216","77,04","95,012","6,465"]]},
  {t:"Independent Samples Test (Previous Experience, bulan)",
   h:["","Levene F","Levene Sig.","t","df","Sig. (2-tailed)","Mean Difference","Std. Error Diff.","95% CI Lower","95% CI Upper"],
   r:[["Equal variances assumed","2,582","{{,109}}","3,631","472","{{,000}}","34,583","9,524","15,869","53,297"],["Equal variances not assumed","","","3,678","471,444",",000","34,583","9,404","16,105","53,062"]]}],
 read:[
  ["Group Statistics","Rata-rata pengalaman laki-laki 111,62 bulan, perempuan 77,04 bulan. Beda secara angka, tetapi signifikan atau tidaknya baru terjawab di tabel kedua."],
  ["Levene (langkah 1)","Sig 0,109 lebih besar dari 0,05, jadi H0 tidak ditolak: varians sama. Pakai baris **Equal variances assumed**."],
  ["Uji-t (langkah 2)","Pada baris itu t = 3,631 dengan sig 0,000 (dua sisi), lebih kecil dari 0,05, jadi H0 ditolak."],
  ["Mean Difference dan CI","Selisih rata-rata 34,583 bulan. Interval kepercayaan 95% (15,869 sampai 53,297) tidak memuat 0, konsisten dengan hasil signifikan."]],
 concl:"Rata-rata pengalaman kerja sebelumnya **berbeda signifikan** antara laki-laki dan perempuan; laki-laki lebih lama.",
 tip:"Di slide dosen, angka t tertulis 3,361 padahal tabel output menunjukkan 3,631. Jika teks dan output berbeda, percayai output."},

{id:"paired", ch:4, t:"Paired Samples t-test",
 path:["Analyze","Compare Means","Paired-Samples T Test"], file:"Paired.xls",
 goal:"Apakah kinerja perusahaan (ROA) berbeda sebelum dan sesudah go public? Sampelnya sama (perusahaan yang sama diukur dua kali), maka dipakai uji berpasangan.",
 hyp:"H0: rata-rata ROA sebelum dan sesudah go public sama.",
 steps:[
  ["Buka datanya","`File › Open › Data`, pilih Paired.xls."],
  ["Buka menu uji","`Analyze › Compare Means › Paired-Samples T Test`."],
  ["Pasangkan variabel","Pindahkan ROASBL (Variable1) dan ROASSD (Variable2) ke baris Pair 1."],
  ["Jalankan","Klik **OK**."]],
 out:[
  {t:"Paired Samples Statistics",h:["","Mean","N","Std. Deviation","Std. Error Mean"],r:[["ROASBL (sebelum)","2,9942","69","2,26998",",27327"],["ROASSD (sesudah)","1,9194","69","3,62120",",43594"]]},
  {t:"Paired Samples Test (ROASBL - ROASSD)",h:["","Mean","Std. Deviation","Std. Error Mean","95% CI Lower","95% CI Upper","t","df","Sig. (2-tailed)"],
   r:[["Pair 1","1,07478","4,10938",",49471",",08760","2,06196","2,173","68","{{,033}}"]]}],
 read:[
  ["Paired Samples Statistics","Rata-rata ROA sebelum go public 2,99, sesudahnya 1,92. Arahnya turun."],
  ["Paired Samples Test","Sig 0,033 lebih kecil dari 0,05, jadi H0 ditolak. Cara lama yang menghasilkan kesimpulan sama: t hitung 2,173 lebih besar dari t tabel 5% (sekitar 1,96)."],
  ["Mean pasangan","Mean selisih bernilai positif karena dihitung sebelum dikurangi sesudah: ROA sebelum lebih tinggi. CI 95% tidak memuat 0."]],
 concl:"ROA **turun signifikan** setelah perusahaan go public.",
 tip:"Pilih paired jika subjek yang sama diukur dua kali, dan independent jika dua kelompok isinya orang atau objek berbeda. Slide menyebut 68 perusahaan, tetapi output menunjukkan N = 69; ikuti output."},

{id:"anova1", ch:4, t:"One-Way ANOVA + Post Hoc",
 path:["Analyze","General Linear Model","Univariate"], file:"Employee data.sav",
 goal:"Apakah rata-rata pengalaman kerja sebelumnya berbeda menurut kategori pekerjaan (jobcat: clerical, custodial, manager)?",
 hyp:"H0: rata-rata pengalaman kerja sama di semua kategori pekerjaan.",
 steps:[
  ["Buka datanya","`File › Open › Data`, pilih Employee data.sav."],
  ["Buka menu","`Analyze › General Linear Model › Univariate`."],
  ["Isi variabel","Previous Experience ke **Dependent Variable**, jobcat ke **Fixed Factor(s)**."],
  ["Minta uji Levene","Klik **Options**, centang **Homogeneity tests**, lalu Continue."],
  ["Minta post hoc","Klik **Post Hoc**, pindahkan jobcat ke Post Hoc Tests for, centang **Bonferroni** dan **Tukey** (Tukey's-b). Continue."],
  ["Jalankan","Klik **OK**."]],
 out:[
  {t:"Levene's Test of Equality of Error Variances",h:["F","df1","df2","Sig."],r:[["2,544","2","471","{{,080}}"]]},
  {t:"Tests of Between-Subjects Effects (Previous Experience)",h:["Source","Type III Sum of Squares","df","Mean Square","F","Sig."],
   r:[["Corrected Model","1174906,874ᵃ","2","587453,437","69,192",",000"],["Intercept","4106802,719","1","4106802,719","483,709",",000"],["jobcat","1174906,874","2","587453,437","{{69,192}}","{{,000}}"],["Error","3998899,936","471","8490,233","",""],["Total","9529528,000","474","","",""],["Corrected Total","5173806,810","473","","",""]],
   n:"a. R Squared = ,227 (Adjusted R Squared = ,224)"},
  {t:"Multiple Comparisons (Bonferroni)",h:["(I) Category","(J) Category","Mean Difference (I-J)","Std. Error","Sig.","95% CI Lower","95% CI Upper"],
   r:[["Clerical","Custodial","{{-213,07*}}","18,380",",000","-257,23","-168,91"],["Clerical","Manager","7,42","11,156","1,000","-19,38","34,22"],["Custodial","Clerical","213,07*","18,380",",000","168,91","257,23"],["Custodial","Manager","220,49*","20,384",",000","171,52","269,47"],["Manager","Clerical","-7,42","11,156","1,000","-34,22","19,38"],["Manager","Custodial","-220,49*","20,384",",000","-269,47","-171,52"]],
   n:"*. Beda rata-rata signifikan pada tingkat 0,05."},
  {t:"Homogeneous Subsets (Tukey B)",h:["Employment Category","N","Subset 1","Subset 2"],
   r:[["Manager","84","77,62",""],["Clerical","363","85,04",""],["Custodial","27","","298,11"]]}],
 read:[
  ["Levene","Sig 0,080 lebih besar dari 0,05: varians homogen, asumsi ANOVA terpenuhi."],
  ["Tests of Between-Subjects","Fokus pada baris **jobcat** (faktor yang diuji): F = 69,192 dengan sig 0,000, jadi H0 ditolak. Baris Intercept boleh diabaikan."],
  ["Adjusted R Squared","0,224 berarti kategori pekerjaan menjelaskan sekitar 22,4% variasi pengalaman kerja."],
  ["Post hoc (Bonferroni)","ANOVA hanya bilang ada yang beda. Tabel ini menunjukkan: Custodial berbeda signifikan dari Clerical dan Manager (sig 0,000), sedangkan Clerical dan Manager tidak berbeda (sig 1,000)."],
  ["Homogeneous Subsets","Manager dan Clerical berada di satu subset (rata-rata 77,62 dan 85,04), Custodial di subset lain dengan rata-rata 298,11 bulan."]],
 concl:"Pengalaman kerja **berbeda antar kategori pekerjaan**, dan penyebabnya adalah kelompok **custodial** yang jauh lebih berpengalaman.",
 tip:"Slide menyebut p = 0,784 untuk Clerical dan Manager, sedangkan tabel Bonferroni menunjukkan 1,000. Kesimpulannya sama (tidak signifikan), tapi kutip dari tabel."},

{id:"anova2", ch:4, t:"Two-Way ANOVA",
 path:["Analyze","General Linear Model","Univariate"], file:"Employee data.sav",
 goal:"Apakah pengalaman kerja sebelumnya dipengaruhi oleh kategori pekerjaan (jobcat), jenis kelamin (gender), atau gabungan keduanya?",
 hyp:"Tiga H0: tidak ada efek jobcat, tidak ada efek gender, dan tidak ada interaksi jobcat dengan gender.",
 steps:[
  ["Mulai seperti one-way","Ikuti langkah one-way ANOVA sampai kotak Fixed Factor(s)."],
  ["Tambah satu faktor","Masukkan **gender** sebagai Fixed Factor kedua, di samping jobcat."],
  ["Atur model","Klik **Model**. Biarkan **Full factorial** (default) agar interaksi jobcat * gender ikut diuji. Slide menyebut Custom/main effects, tetapi output contoh memuat baris interaksi."],
  ["Minta Levene","Klik **Options**, centang **Homogeneity tests**."],
  ["Minta post hoc","Klik **Post Hoc**, pindahkan faktor, centang Bonferroni dan Tukey."],
  ["Jalankan","Klik **Continue**, lalu **OK**."]],
 out:[
  {t:"Warnings",h:["Pesan SPSS"],r:[["Post hoc tests are not performed for gender because there are fewer than three groups."]]},
  {t:"Levene's Test of Equality of Error Variances",h:["F","df1","df2","Sig."],r:[["1,958","4","469","{{,100}}"]],n:"Design: Intercept + jobcat + gender + jobcat * gender"},
  {t:"Tests of Between-Subjects Effects (Previous Experience)",h:["Source","Type III Sum of Squares","df","Mean Square","F","Sig."],
   r:[["Corrected Model","1203354,370ᵃ","4","300838,593","35,536",",000"],["Intercept","2101927,707","1","2101927,707","248,285",",000"],["jobcat","1059830,227","2","529915,113","{{62,595}}","{{,000}}"],["gender","13001,080","1","13001,080","{{1,536}}","{{,216}}"],["jobcat * gender","500,634","1","500,634","{{,059}}","{{,808}}"],["Error","3970452,440","469","8465,783","",""],["Total","9529528,000","474","","",""],["Corrected Total","5173806,810","473","","",""]],
   n:"a. R Squared = ,233 (Adjusted R Squared = ,226)"}],
 read:[
  ["Warning post hoc","Gender hanya punya dua kategori, jadi post hoc tidak dijalankan untuk gender. Post hoc hanya berlaku jika faktor punya lebih dari dua kategori."],
  ["Levene","Sig 0,100 lebih besar dari 0,05: varians homogen, asumsi terpenuhi."],
  ["Main effect jobcat","F = 62,595, sig 0,000: jobcat berpengaruh langsung terhadap pengalaman kerja."],
  ["Main effect gender","F = 1,536, sig 0,216 lebih besar dari 0,05: gender tidak berpengaruh."],
  ["Interaksi","jobcat * gender punya sig 0,808: tidak ada pengaruh gabungan yang berarti."],
  ["Adjusted R Squared","0,226: jobcat dan gender bersama menjelaskan sekitar 22,6% variasi."]],
 concl:"Hanya **jobcat** yang berpengaruh pada pengalaman kerja. Gender dan interaksinya tidak signifikan.",
 tip:"Angka di teks slide (F = 62,863 dan 3,308, p = 0,107, adj R² 0,228) berbeda dari tabel output di atas. Gunakan angka tabel."},

{id:"validitas", ch:5, t:"Uji Validitas (Korelasi Bivariat)",
 path:["Analyze","Correlate","Bivariate"], file:"job survey.sav",
 goal:"Menguji apakah keempat indikator konstruk AUTONOMY (autonom1 sampai autonom4) valid, lewat korelasi tiap indikator dengan skor total.",
 hyp:"Sebuah indikator valid jika korelasinya dengan skor total signifikan.",
 steps:[
  ["Buka datanya","`File › Open › Data`, pilih job survey.sav. Skor total autonom sudah ada di data."],
  ["Buka menu","`Analyze › Correlate › Bivariate`."],
  ["Pilih variabel","Masukkan autonom1, autonom2, autonom3, autonom4, dan skor total **autonom** ke kotak Variables."],
  ["Pilih koefisien","Centang **Pearson**."],
  ["Jalankan","Klik **OK**."]],
 out:[{t:"Correlations (Pearson, N = 70 untuk semua sel)",h:["","autonom1","autonom2","autonom3","autonom4","autonom (total)"],
  r:[["autonom1","1",",520**",",429**",",633**","{{,837**}}"],["autonom2",",520**","1",",349**",",380**","{{,758**}}"],["autonom3",",429**",",349**","1",",449**","{{,711**}}"],["autonom4",",633**",",380**",",449**","1","{{,776**}}"],["autonom (total)",",837**",",758**",",711**",",776**","1"]],
  n:"**. Korelasi signifikan pada level 0,01 (2-tailed). Sig semua sel 0,000 kecuali autonom2 dengan autonom3 (0,003) dan autonom2 dengan autonom4 (0,001)."}],
 read:[
  ["Fokus pada kolom total","Yang dibaca adalah korelasi tiap indikator dengan skor total autonom: 0,837; 0,758; 0,711; dan 0,776."],
  ["Tanda **","Semuanya bertanda dua bintang, artinya signifikan pada level 0,01 (sig 0,000)."],
  ["Kategori Guilford","0,837 masuk sangat tinggi (0,80 sampai 1,00). Tiga lainnya masuk tinggi (0,60 sampai 0,80)."]],
 concl:"Keempat indikator **valid**.",
 tip:"Slide menyebut hasil ini identik dengan kolom Corrected Item-Total Correlation di analisis reliabilitas. Angkanya mirip tapi tidak sama persis (misalnya 0,837 vs 0,680 untuk autonom1), karena korelasi bivariat ikut menghitung item itu sendiri di dalam skor total."},

{id:"reliabilitas", ch:5, t:"Uji Reliabilitas (Cronbach's Alpha)",
 path:["Analyze","Scale","Reliability Analysis"], file:"job survey.sav",
 goal:"Menguji konsistensi internal konstruk AUTONOMY yang diukur dengan empat indikator.",
 hyp:"Konstruk reliabel jika Cronbach's alpha di atas 0,70 (Nunnally, 1994).",
 steps:[
  ["Buka datanya","`File › Open › Data`, pilih job survey.sav."],
  ["Buka menu","`Analyze › Scale › Reliability Analysis`."],
  ["Isi item","Masukkan autonom1 sampai autonom4 ke kotak Items. Pastikan Model = **Alpha**."],
  ["Atur statistik","Klik **Statistics**, centang Item, Scale, Scale if item deleted, dan Inter-Item Correlations."],
  ["Jalankan","Klik **Continue**, lalu **OK**."]],
 out:[
  {t:"Reliability Statistics",h:["Cronbach's Alpha","Alpha Based on Standardized Items","N of Items"],r:[["{{,768}}",",773","4"]]},
  {t:"Item-Total Statistics",h:["","Scale Mean if Item Deleted","Scale Variance if Item Deleted","Corrected Item-Total Correlation","Squared Multiple Correlation","Cronbach's Alpha if Item Deleted"],
   r:[["autonom1","6,97","4,318",",680",",502","{{,650}}"],["autonom2","7,01","4,449",",512",",291","{{,751}}"],["autonom3","7,07","5,053",",493",",253","{{,750}}"],["autonom4","7,19","4,907",",612",",440","{{,694}}"]]}],
 read:[
  ["Reliability Statistics","Cronbach's alpha = 0,768, lebih besar dari 0,70."],
  ["Alpha if Item Deleted","Kalau salah satu item dibuang, alpha turun ke 0,650 sampai 0,751 (semuanya di bawah 0,768). Artinya tidak ada item yang perlu dibuang."],
  ["Corrected Item-Total","Semua item berkorelasi cukup kuat dengan sisa item lain (0,493 sampai 0,680)."]],
 concl:"Konstruk AUTONOMY **reliabel**. Ulangi langkah yang sama untuk konstruk ROUTINE.",
 tip:"Di slide hasilnya tertulis “7,3%”, padahal output menunjukkan 0,768 (alpha adalah angka antara 0 dan 1, bukan persen)."},

{id:"faktor", ch:5, t:"Analisis Faktor (KMO, Bartlett, Varimax)",
 path:["Analyze","Data Reduction","Factor"], file:"job survey.sav",
 goal:"Memeriksa apakah delapan indikator (autonom1-4 dan routine1-4) mengelompok menjadi dua faktor sesuai konstruknya.",
 hyp:"Harapan: autonom1-4 berkumpul di satu faktor dan routine1-4 di faktor lain.",
 steps:[
  ["Buka datanya","`File › Open › Data`, pilih job survey.sav."],
  ["Buka menu","`Analyze › Data Reduction › Factor` (pada SPSS versi baru menunya bernama Dimension Reduction)."],
  ["Isi variabel","Masukkan autonom1 sampai autonom4 dan routine1 sampai routine4 ke kotak Variables."],
  ["Minta KMO dan Bartlett","Klik **Descriptives**, centang **KMO and Bartlett's test of sphericity**, lalu Continue."],
  ["Atur rotasi","Klik **Rotation**, pilih **Varimax**, centang Rotated solution, lalu Continue."],
  ["Jalankan","Klik **OK**."]],
 out:[
  {t:"KMO and Bartlett's Test",h:["Ukuran","","Nilai"],r:[["Kaiser-Meyer-Olkin Measure of Sampling Adequacy","","{{,713}}"],["Bartlett's Test of Sphericity","Approx. Chi-Square","183,867"],["","df","28"],["","Sig.","{{,000}}"]]},
  {t:"Total Variance Explained (Principal Component Analysis)",h:["Component","Eigenvalue Total","% of Variance","Cumulative %","Rotasi Total","Rotasi % Var.","Rotasi Cum. %"],
   r:[["1","{{3,240}}","40,495","40,495","2,532","31,654","31,654"],["2","{{1,491}}","18,643","59,138","2,199","27,484","59,138"],["3",",909","11,357","70,495","","",""],["4",",783","9,793","80,288","","",""],["5",",591","7,384","87,672","","",""],["6",",464","5,800","93,472","","",""],["7",",325","4,068","97,540","","",""],["8",",197","2,460","100,000","","",""]]},
  {t:"Component Matrix (sebelum rotasi)",h:["","Component 1","Component 2"],r:[["autonom1",",734",",439"],["autonom2",",750",",103"],["autonom3",",568",",363"],["autonom4",",692",",372"],["routine1","-,763",",482"],["routine2","-,512",",265"],["routine3","-,111",",745"],["routine4","-,693",",400"]],n:"Campur aduk dan sulit ditafsirkan, sehingga perlu rotasi."},
  {t:"Rotated Component Matrix (Varimax)",h:["","Component 1","Component 2"],r:[["autonom1","{{,845}}","-,128"],["autonom2","{{,645}}","-,397"],["autonom3","{{,669}}","-,081"],["autonom4","{{,771}}","-,153"],["routine1","-,283","{{,857}}"],["routine2","-,226","{{,530}}"],["routine3",",388","{{,646}}"],["routine4","-,280","{{,750}}"]],n:"Rotation converged in 3 iterations."}],
 read:[
  ["KMO dan Bartlett","KMO 0,713 melewati syarat minimal 0,50, dan Bartlett signifikan (0,000). Data layak dianalisis faktor."],
  ["Total Variance Explained","Dua komponen punya eigenvalue di atas 1 (3,240 dan 1,491), jadi terbentuk dua faktor. Bersama-sama keduanya menjelaskan 59,138% variasi."],
  ["Sebelum rotasi","Pengelompokannya campur: indikator routine tersebar di dua komponen. Itu sebabnya perlu rotasi."],
  ["Sesudah Varimax","Autonom1 sampai autonom4 jelas berada di Faktor 1 (loading 0,645 sampai 0,845), routine1 sampai routine4 di Faktor 2 (0,530 sampai 0,857). Routine3 masih punya loading 0,388 di Faktor 1, tetapi lebih kuat di Faktor 2 (0,646)."]],
 concl:"Tiap konstruk bersifat **unidimensional**: seluruh indikator AUTONOMY dan ROUTINE **valid**.",
 tip:"Di materi prosedur ini disebut CFA, tetapi PCA + Varimax adalah analisis faktor eksploratori. CFA sejati memakai SEM (AMOS atau SmartPLS)."}
];

/* ---------- PEMILIH UJI ---------- */
const TREE = {q:"Apakah variabelmu bisa dibagi menjadi variabel bebas (penyebab) dan terikat (akibat)?", o:[
 ["Ya, ada bebas dan terikat", {q:"Skala variabel terikat (DV)?", o:[
   ["Metrik (interval atau rasio)", {q:"Berapa variabel terikatnya?", o:[
      ["Satu", {q:"Seperti apa variabel bebasnya?", o:[
         ["Non-metrik, 2 kategori", {r:"t-test", d:"Bandingkan rata-rata dua kelompok. Independent jika kelompoknya berbeda, paired jika subjek yang sama diukur dua kali.", tu:"independen"}],
         ["Non-metrik, lebih dari 2 kategori", {r:"ANOVA", d:"Bandingkan rata-rata tiga kelompok atau lebih. Lanjutkan dengan post hoc jika signifikan.", tu:"anova1"}],
         ["Non-metrik dan ingin mengontrol variabel lain", {r:"ANCOVA", d:"ANOVA dengan variabel kontrol (kovariat), misalnya kemampuan awal."}],
         ["Metrik", {r:"Regresi", d:"Menguji pengaruh satu atau lebih variabel bebas metrik terhadap satu variabel terikat metrik."}]]}],
      ["Dua atau lebih", {q:"Seperti apa variabel bebasnya?", o:[
         ["Non-metrik (kelompok)", {r:"MANOVA", d:"Membandingkan kelompok pada beberapa outcome sekaligus, misalnya prestasi dan motivasi."}],
         ["Metrik", {r:"Analisis jalur (path) atau SEM", d:"Dipakai ketika ada lebih dari satu variabel metrik di kedua sisi."}]]}]]}],
   ["Non-metrik", {q:"Berapa kategori variabel terikatnya?", o:[
      ["Dua kategori", {q:"Seperti apa variabel bebasnya?", o:[
         ["Semuanya metrik", {r:"Analisis diskriminan", d:"Memprediksi kelompok (misalnya pembeli atau bukan pembeli) dari variabel metrik."}],
         ["Campuran metrik dan non-metrik", {r:"Regresi logistik", d:"Lebih aman jika asumsi normalitas multivariat diragukan."}]]}],
      ["Lebih dari dua kategori", {r:"Multiple discriminant", d:"Memprediksi keanggotaan tiga kelompok atau lebih dari variabel metrik."}]]}]]}],
 ["Tidak, aku ingin melihat keterkaitan antar variabel", {q:"Skala variabelnya?", o:[
   ["Metrik", {q:"Berapa variabelnya?", o:[
      ["Dua", {r:"Korelasi sederhana", d:"Melihat kekuatan hubungan dua variabel metrik."}],
      ["Lebih dari dua", {r:"Analisis faktor atau principal component", d:"Mengelompokkan banyak variabel menjadi sedikit faktor atau komponen.", tu:"faktor"}]]}],
   ["Non-metrik", {q:"Berapa variabelnya?", o:[
      ["Dua", {r:"Tabel kontingensi (crosstab) + Chi-square", d:"Menguji asosiasi dua variabel kategorikal.", tu:"crosstab"}],
      ["Lebih dari dua", {r:"Loglinear atau correspondence analysis", d:"Untuk tabel kontingensi multiway atau tabel silang yang besar."}]]}]]}]]};

/* ---------- LATIHAN ---------- */
const QS = [
["Angka yang menggambarkan karakteristik seluruh populasi disebut...",["Statistik","Parameter","Sampel","Variabel"],1,"Parameter menggambarkan populasi; statistik menggambarkan sampel."],
["Grafik yang dipakai untuk memisahkan “vital few” dari “trivial many” adalah...",["Pie chart","Histogram","Pareto","Scatter plot"],2,"Diagram Pareto mengurutkan penyebab dari yang paling sering ke yang jarang."],
["Kode 1 untuk laki-laki dan 2 untuk perempuan termasuk skala...",["Nominal","Ordinal","Interval","Rasio"],0,"Angkanya hanya label kategori tanpa makna hitung."],
["Dua skala yang termasuk data metrik adalah...",["Nominal dan ordinal","Ordinal dan interval","Interval dan rasio","Nominal dan rasio"],2,"Interval dan rasio disebut metrik; nominal dan ordinal non-metrik."],
["Satu variabel terikat metrik dan satu variabel bebas non-metrik dengan tiga kategori. Ujinya?",["t-test","ANOVA","Regresi logistik","Chi-square"],1,"ANOVA membandingkan rata-rata tiga kelompok atau lebih."],
["Kelompok yang dibandingkan pada dua outcome sekaligus (prestasi dan motivasi) memakai...",["ANOVA","ANCOVA","MANOVA","t-test"],2,"MANOVA = ANOVA dengan dua variabel terikat atau lebih."],
["Pada uji Kolmogorov-Smirnov, H0 menyatakan bahwa...",["Data tidak normal","Data berdistribusi normal","Varians berbeda","Tidak ada asosiasi"],1,"H0 pada K-S: data berdistribusi normal. Sig di bawah 0,05 berarti H0 ditolak.","ks"],
["Skewness 2,590 dan kurtosis 8,422 pada variabel EARNS menunjukkan bahwa data...",["Normal","Tidak normal","Valid","Reliabel"],1,"Nilai normal mendekati 0. Angka sejauh itu menunjukkan data miring dan tidak normal.","deskriptif"],
["Pada independent t-test, sig Levene 0,109. Baris mana yang dipakai?",["Equal variances assumed","Equal variances not assumed","Keduanya","Tidak ada"],0,"Sig di atas 0,05 berarti varians sama, jadi pakai baris pertama.","independen"],
["ROA perusahaan yang sama diukur sebelum dan sesudah go public. Ujinya?",["Independent t-test","One-way ANOVA","Paired samples t-test","Chi-square"],2,"Subjek yang sama diukur dua kali, maka berpasangan.","paired"],
["ANOVA menunjukkan hasil signifikan. Langkah berikutnya untuk tahu kelompok mana yang beda adalah...",["Uji Levene","Post hoc","Uji normalitas","Rotasi Varimax"],1,"Post hoc (Tukey, Bonferroni) menunjukkan pasangan kelompok yang berbeda.","anova1"],
["Post hoc tidak dijalankan untuk gender pada two-way ANOVA karena...",["Gender tidak signifikan","Gender hanya punya dua kategori","Varians berbeda","Sampelnya kecil"],1,"Post hoc membutuhkan faktor dengan lebih dari dua kategori.","anova2"],
["Sig Chi-square 0,126 pada crosstab REG dan RACE berarti...",["Ada asosiasi kuat","Tidak ada asosiasi","Data tidak valid","Varians berbeda"],1,"Sig di atas 0,05 berarti H0 (tidak ada hubungan) tidak ditolak.","crosstab"],
["Pernyataan yang benar tentang validitas dan reliabilitas adalah...",["Alat reliabel pasti valid","Alat valid pasti reliabel","Keduanya selalu sama","Keduanya tidak berhubungan"],1,"Alat yang valid pasti reliabel, tetapi yang reliabel belum tentu valid."],
["Konstruk dianggap reliabel menurut Nunnally (1994) jika Cronbach's alpha...",["Kurang dari 0,50","Di atas 0,70","Tepat 0","Di atas 5"],1,"Kriterianya di atas 0,70.","reliabilitas"],
["Menu SPSS untuk uji reliabilitas adalah...",["Analyze › Scale › Reliability Analysis","Analyze › Compare Means","Graphs › Histogram","Analyze › Correlate › Bivariate"],0,"Reliabilitas ada di Analyze › Scale › Reliability Analysis.","reliabilitas"],
["Butir kuesioner dinyatakan valid pada korelasi bivariat jika korelasinya dengan skor total...",["Negatif","Tidak signifikan","Signifikan","Sama dengan 0"],2,"Korelasi item-total yang signifikan menunjukkan butir valid.","validitas"],
["KMO minimal berapa agar analisis faktor layak dilakukan?",["Di atas 0,50","Di atas 0,95","Tepat 1","Di bawah 0,10"],0,"Nilai KMO yang diinginkan lebih dari 0,50.","faktor"],
["Tujuan rotasi Varimax pada analisis faktor adalah...",["Menghapus indikator","Memperjelas pengelompokan indikator ke faktor","Menghitung alpha","Menguji normalitas"],1,"Rotasi membuat loading lebih jelas sehingga indikator mudah dikelompokkan.","faktor"]
];

/* ---------- UTIL ---------- */
const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
const fmt = s => esc(s).replace(/\{\{(.+?)\}\}/g,"<mark>$1</mark>").replace(/\*\*(.+?)\*\*/g,"<b>$1</b>").replace(/`(.+?)`/g,"<code>$1</code>");
const store = {
  get(k,d){try{const v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(e){return d}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
};
let doneCh = store.get("lab-ch",[]), doneT = store.get("lab-tut",[]), stepsDone = store.get("lab-steps",{});
const RUN = {};            // status eksekusi tutorial: "l" (memuat) atau "d" (selesai), hanya selama sesi
let Q = {i:0,s:0,a:null};  // status kuis
let W = [];                // jalur pemilih uji
const M = document.getElementById("M");
const tutOf = id => TUT.find(t => t.id === id);
const toggle = (arr,v,key) => { const i = arr.indexOf(v); i<0 ? arr.push(v) : arr.splice(i,1); store.set(key,arr); };
const path = p => `<div class="path">${p.map((x,i)=>`${i?'<span class="sep" aria-hidden="true">&#8250;</span>':''}<kbd>${esc(x)}</kbd>`).join("")}</div>`;

/* ---------- KOMPONEN ---------- */
const win = (title,body) => `<section class="win"><div class="bar"><i></i><i></i><i></i><span>${esc(title)}</span></div><div class="in">${body}</div></section>`;
const table = o => `<div class="tw"><table class="dt"><thead><tr>${o.h.map(x=>`<th>${fmt(x)}</th>`).join("")}</tr></thead><tbody>${o.r.map(r=>`<tr>${r.map(c=>`<td>${fmt(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
const glossary = g => `<dl>${g.map(x=>`<dt>${esc(x[0])}</dt><dd>${fmt(x[1])}</dd>`).join("")}</dl>`;

function outTable(o){
  if(o.chart) return `<figure class="out"><figcaption>${esc(o.t)}</figcaption><div class="hist" role="img" aria-label="Histogram miring ke kanan">${o.chart.map(h=>`<span style="height:${h}%"></span>`).join("")}</div>${o.n?`<div class="nt">${fmt(o.n)}</div>`:""}</figure>`;
  return `<figure class="out"><figcaption>${esc(o.t)}</figcaption><div class="tw"><table class="ot"><thead><tr>${o.h.map(x=>`<th>${fmt(x)}</th>`).join("")}</tr></thead><tbody>${o.r.map(r=>`<tr>${r.map((c,i)=>i?`<td>${fmt(c)}</td>`:`<th scope="row">${fmt(c)}</th>`).join("")}</tr>`).join("")}</tbody></table></div>${o.n?`<div class="nt">${fmt(o.n)}</div>`:""}</figure>`;
}

function outHTML(t){
  const st = RUN[t.id];
  if(!st) return `<div class="runbox"><p class="mute" style="margin:0 0 12px">Sudah mengikuti langkah di atas? Klik tombol ini untuk menjalankan dan melihat output SPSS.</p><button class="run" data-a="run" data-id="${t.id}">&#9654; Klik OK / Run</button></div>`;
  if(st==="l") return `<pre class="log" role="status">$ spss --open "${esc(t.file)}"\n$ analyze ${t.path.map(esc).join(" > ")}\nmemproses data ...</pre>`;
  const d = doneT.includes(t.id);
  return `<h3>Output SPSS</h3>${t.out.map(outTable).join("")}
  <h3>Pembahasan: cara membaca</h3><ol class="read">${t.read.map(r=>`<li><b>${fmt(r[0])}</b>${fmt(r[1])}</li>`).join("")}</ol>
  <div class="callout"><span class="lb">Kesimpulan</span>${fmt(t.concl)}</div>
  ${t.tip?`<div class="callout tip"><span class="lb">Catatan</span>${fmt(t.tip)}</div>`:""}
  <button class="btn ${d?"on":"pri"}" data-a="mark-tut" data-id="${t.id}">${d?"&#10003; Tutorial selesai (klik untuk batal)":"Tandai tutorial selesai"}</button>`;
}

/* ---------- HALAMAN ---------- */
function home(){
  const total = CH.length + TUT.length, d = doneCh.length + doneT.length, pct = Math.round(d/total*100);
  let h = win("boot.log", `<p class="boot">$ ./lab-spss --start\n<span class="ok">[ok]</span> ${CH.length} modul dimuat\n<span class="ok">[ok]</span> ${TUT.length} tutorial SPSS dimuat\n<span class="ok">[ok]</span> ${QS.length} soal latihan dimuat</p>
  <h1>Belajar analisis data, langkah demi langkah di SPSS.</h1>
  <p class="lead">Pilih modul untuk memahami konsepnya, lalu buka tutorial SPSS untuk mempraktikkan menu, melihat output, dan memahami pembahasannya.</p>
  <div class="meter"><span>progres</span><div class="track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><div class="fill" style="width:${pct}%"></div></div><span>${d}/${total}</span></div>`);
  PARTS.forEach((p,pi)=>{
    h += `<div class="sec">modul/${esc(p.toLowerCase().replace(/[^a-z]+/g,"-"))}/ <small>${esc(p)}</small></div><div class="grid">` +
      CH.filter(c=>c.part===pi).map(c=>{const dn=doneCh.includes(c.n);
        return `<a class="card ${dn?"done":""}" href="#/ch/${c.n}"><span class="code">modul_0${c.n}</span>${dn?'<span class="badge">&#10003; selesai</span>':""}<b>${esc(c.t)}</b><p>${esc(c.lead)}</p><span class="meta">${c.tu.length?`<span class="tag">${c.tu.length} tutorial SPSS</span>`:'<span class="tag">konsep</span>'}</span></a>`}).join("") + `</div>`;
  });
  h += `<div class="sec">tutorial-spss/ <small>praktik langsung</small></div><div class="grid">` + TUT.map(t=>cardT(t)).join("") + `</div>`;
  return h;
}
const cardT = t => `<a class="card ${doneT.includes(t.id)?"done":""}" href="#/spss/${t.id}"><span class="code">modul_0${t.ch}</span>${doneT.includes(t.id)?'<span class="badge">&#10003; selesai</span>':""}<b>${esc(t.t)}</b><p>${t.path.map(esc).join(" &#8250; ")}</p><span class="meta"><span class="tag">${esc(t.file)}</span></span></a>`;

function chapter(n){
  const c = CH[n-1]; if(!c) return home();
  const dn = doneCh.includes(n);
  let b = `<p><a class="back" href="#/">&#8592; semua modul</a></p><span class="tag">modul_0${n}</span><h2>${esc(c.t)}</h2><p class="lead">${esc(c.lead)}</p>
  <h3>Yang perlu kamu kuasai</h3><ul>${c.pts.map(x=>`<li>${fmt(x)}</li>`).join("")}</ul>`;
  if(c.tb) b += `<h3>${esc(c.tb.t)}</h3>${table(c.tb)}`;
  if(c.note) b += `<div class="callout tip"><span class="lb">Catatan</span>${fmt(c.note)}</div>`;
  if(c.link) b += `<p><a class="btn pri" href="${c.link.h}">${esc(c.link.t)}</a></p>`;
  b += `<h3>Kamus mini</h3>${glossary(c.gl)}`;
  if(c.tu.length) b += `<h3>Praktik di SPSS</h3><div class="grid">${c.tu.map(id=>cardT(tutOf(id))).join("")}</div>`;
  b += `<p style="margin-top:22px"><button class="btn ${dn?"on":"pri"}" data-a="mark-ch" data-n="${n}">${dn?"&#10003; Sudah dikuasai (klik untuk batal)":"Tandai sudah dikuasai"}</button></p>
  <div class="row"><span>${n>1?`<a href="#/ch/${n-1}">&#8592; modul sebelumnya</a>`:""}</span><span>${n<CH.length?`<a href="#/ch/${n+1}">modul berikutnya &#8594;</a>`:""}</span></div>`;
  return win(`modul_0${n}.md`, b);
}

function tutIndex(){
  let b = `<h2>Tutorial SPSS</h2><p class="lead">Setiap tutorial berisi menu yang harus dibuka, langkah pengerjaan, output, lalu pembahasan cara membacanya.</p>`;
  CH.filter(c=>c.tu.length).forEach(c=>{ b += `<div class="sec">${esc(c.t)}</div><div class="grid">${c.tu.map(id=>cardT(tutOf(id))).join("")}</div>`; });
  return win("tutorial-spss/", b);
}

function tutorial(id){
  const t = tutOf(id); if(!t) return tutIndex();
  const i = TUT.indexOf(t), sd = stepsDone[id] || [];
  let b = `<p><a class="back" href="#/spss">&#8592; semua tutorial</a> <span class="mute">/ </span><a class="back" href="#/ch/${t.ch}">modul_0${t.ch}</a></p>
  <h2>${esc(t.t)}</h2>
  <div class="callout goal"><span class="lb">Yang ingin dijawab</span>${fmt(t.goal)}${t.hyp?`<br><span class="mute">${fmt(t.hyp)}</span>`:""}</div>
  <h3>Menu SPSS</h3>${path(t.path)}<span class="file">${esc(t.file)}</span>
  <h3>Langkah pengerjaan</h3><p class="hint">Centang tiap langkah sambil kamu praktik.</p>
  <ol class="steps">${t.steps.map((s,k)=>`<li><label><input type="checkbox" data-step="${k}" data-id="${id}" ${sd.includes(k)?"checked":""}><span class="n" aria-hidden="true"></span><span class="tx"><b>${fmt(s[0])}</b><small>${fmt(s[1])}</small></span></label></li>`).join("")}</ol>
  <div id="out" data-id="${id}" aria-live="polite">${outHTML(t)}</div>
  <div class="row"><span>${i>0?`<a href="#/spss/${TUT[i-1].id}">&#8592; ${esc(TUT[i-1].t)}</a>`:""}</span><span>${i<TUT.length-1?`<a href="#/spss/${TUT[i+1].id}">${esc(TUT[i+1].t)} &#8594;</a>`:""}</span></div>`;
  return win(`${t.id}.sps`, b);
}

function pilih(){
  let node = TREE; const trail = [];
  for(const k of W){ trail.push(node.o[k][0]); node = node.o[k][1]; }
  let b = `<h2>Pilih uji yang tepat</h2><p class="lead">Jawab pertanyaan satu per satu. Hasilnya mengikuti peta uji di modul 2.</p>`;
  if(trail.length) b += `<p class="crumbs">$ ${trail.map(esc).join(" &#8250; ")}</p>`;
  if(node.r){
    b += `<div class="res"><span class="mute">Ujinya:</span><h2>${esc(node.r)}</h2><p>${esc(node.d)}</p>${node.tu?`<a class="btn pri" href="#/spss/${node.tu}">Buka tutorial SPSS</a>`:""}</div>`;
  } else {
    b += `<h3>${esc(node.q)}</h3>` + node.o.map((o,k)=>`<button class="opt" data-a="wiz" data-k="${k}">${esc(o[0])}</button>`).join("");
  }
  b += `<p style="margin-top:18px">${W.length?`<button class="btn" data-a="wiz-back">&#8592; kembali</button> `:""}<button class="btn" data-a="wiz-reset">Mulai ulang</button></p>`;
  return win("pilih-uji.sh", b);
}

function quiz(){
  if(Q.i >= QS.length){
    return win("latihan.test", `<div class="res"><span class="mute">Skor akhir</span><div class="score">${Q.s}/${QS.length}</div><p>${Q.s>=Math.ceil(QS.length*.8)?"Kuat. Sekarang coba praktik tutorial tanpa melihat langkahnya.":"Buka lagi modul atau tutorial yang masih terasa kabur, lalu ulangi latihan."}</p><button class="btn pri" data-a="qreset">Ulangi latihan</button></div>`);
  }
  const x = QS[Q.i];
  return win("latihan.test", `<div class="qhead"><span>soal ${Q.i+1} dari ${QS.length}</span><span>benar: ${Q.s}</span></div><div class="track"><div class="fill" style="width:${Q.i/QS.length*100}%"></div></div>
  <h2 style="margin-top:18px;font-size:1.25rem;line-height:1.4">${esc(x[0])}</h2>
  ${x[1].map((o,j)=>`<button class="opt ${Q.a==null?"":j===x[2]?"ok":j===Q.a?"no":""}" ${Q.a==null?"":"disabled"} data-a="pick" data-j="${j}">${esc(o)}</button>`).join("")}
  ${Q.a==null?"":`<div class="ex" role="status"><b>${Q.a===x[2]?"Benar.":"Belum tepat."}</b> ${esc(x[3])}</div>${x[4]?`<a class="btn" href="#/spss/${x[4]}">Buka tutorial terkait</a> `:""}<button class="btn pri" data-a="qnext">Lanjut</button>`}`);
}

/* ---------- ROUTER ---------- */
function render(){
  const [, r, a] = location.hash.slice(1).split("/");
  let h, title = "Lab SPSS";
  if(r==="ch"){ h = chapter(+a); const c=CH[a-1]; if(c) title = c.t; }
  else if(r==="spss"){ h = a ? tutorial(a) : tutIndex(); const t=tutOf(a); title = t ? t.t : "Tutorial SPSS"; }
  else if(r==="pilih"){ h = pilih(); title = "Pilih uji"; }
  else if(r==="latihan"){ h = quiz(); title = "Latihan"; }
  else h = home();
  M.innerHTML = h;
  document.title = title + " | Lab SPSS";
  document.querySelectorAll("nav a").forEach(e=>e.classList.toggle("on", e.dataset.r === (r==="ch" ? "" : (r||""))));
}

/* ---------- EVENT ---------- */
M.addEventListener("click", e=>{
  const b = e.target.closest("[data-a]"); if(!b) return;
  const a = b.dataset.a;
  if(a==="mark-ch"){ toggle(doneCh,+b.dataset.n,"lab-ch"); render(); }
  else if(a==="mark-tut"){ toggle(doneT,b.dataset.id,"lab-tut"); render(); }
  else if(a==="run"){
    const id = b.dataset.id, t = tutOf(id);
    RUN[id] = "l";
    const box = document.getElementById("out"); box.innerHTML = outHTML(t);
    const wait = matchMedia("(prefers-reduced-motion:reduce)").matches ? 0 : 900;
    setTimeout(()=>{ RUN[id] = "d"; const bx = document.getElementById("out"); if(bx && bx.dataset.id===id){ bx.innerHTML = outHTML(t); bx.scrollIntoView({block:"start"}); } }, wait);
  }
  else if(a==="wiz"){ W.push(+b.dataset.k); render(); }
  else if(a==="wiz-back"){ W.pop(); render(); }
  else if(a==="wiz-reset"){ W = []; render(); }
  else if(a==="pick"){ Q.a = +b.dataset.j; if(Q.a===QS[Q.i][2]) Q.s++; render(); }
  else if(a==="qnext"){ Q.i++; Q.a = null; render(); }
  else if(a==="qreset"){ Q = {i:0,s:0,a:null}; render(); }
});
M.addEventListener("change", e=>{
  const c = e.target.closest("[data-step]"); if(!c) return;
  const id = c.dataset.id, k = +c.dataset.step, arr = stepsDone[id] || (stepsDone[id] = []);
  const i = arr.indexOf(k); c.checked ? (i<0 && arr.push(k)) : (i>=0 && arr.splice(i,1));
  store.set("lab-steps", stepsDone);
});
addEventListener("hashchange", ()=>{ render(); scrollTo(0,0); });
render();
