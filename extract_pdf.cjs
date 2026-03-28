const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('d:/isan/Projek TA Tugas Akhir/Portofolio/portofolio-muhammad-ihsan-fadillah-29519-main (1)/Laporan Penilaian Aset_Muhammad Ihsan Fadillah_3C MAS.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('tmp_pdf_text.txt', data.text);
    console.log('Done');
}).catch(console.error);
