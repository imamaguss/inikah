const tombol = document.getElementsByTagName('button');
const usia = document.getElementById('usia');
const output = document.getElementById('output');
const gambar = document.getElementById('gambar');
const status = document.getElementById('status');
const footer = document.getElementById('footer');

output.disabled = true;
tombol.onclick = 'proses()';
gambar.src = 'img/0.png';

function proses() {
  if(usia.value < 0 || usia.value > 99) {
    output.value = 'Input tidak valid. Silakan coba lagi.';
  } else {
    output.value = count();
  }
}

function count() {
  let una = {};
  una['Rencana nikah usia'] = usia.value;
  una['Anak pertama'] = +usia.value + 2;
  una['Anak masuk SD'] = una['Anak pertama'] + 5;
  una['Anak masuk SMP'] = una['Anak masuk SD'] + 3;
  una['Anak masuk SMA'] = una['Anak masuk SMP'] + 3;
  una['Anak masuk Kuliah'] = una['Anak masuk SMA'] + 4;
  una['Anak lulus Kuliah'] = una['Anak masuk Kuliah'] + 4;
  una['Anak nikah'] = una['Anak lulus Kuliah'] + 1;
  una['Status'] = '';
  
  if(usia.value >= 60) {
    gambar.src = 'img/6.png';
    status.innerHTML = 'Yakin Nih?!';
    return `Yakin nih?!`
  } else if(usia.value >= 35) {
    una['Status'] += 'WASPADA';
    gambar.src = 'img/5.jpg';
    status.innerHTML = una['Status'];
  } else if(usia.value >= 32) {
    una['Status'] += 'SIAGA';
    gambar.src = 'img/4.jpg';
    status.innerHTML = una['Status'];
  } else if(usia.value >= 29) {
    una['Status'] += 'MATANG';
    gambar.src = 'img/3.png';
    status.innerHTML = una['Status'];
  } else if(usia.value >= 26) {
    una['Status'] += 'CUKUP';
    gambar.src = 'img/22.png';
    status.innerHTML = una['Status'];
  } else if(usia.value = 25) {
    una['Status'] += 'SUNNAH RASUL';
    gambar.src = 'img/2.png';
    status.innerHTML = una['Status'];
  } else if(usia.value >= 21) {
    una['Status'] += 'LUARBISA';
    gambar.src = 'img/1.jpg';
    status.innerHTML = una['Status'];
  } else if(usia.value >= 15) {
    gambar.src = 'img/m1.jpg';
    status.innerHTML = 'Sekolah dulu, Nak..';
    return 'Baiknya kamu sekolah dulu yaa, Nak...';
  } else if(usia.value < 15) {
    gambar.src = 'img/m2.jpg';
    status.innerHTML = 'Hmm...';
    return 'Hmm...';
  }

  return `Jika Anda menikah pada usia ${usia.value} tahun dan ini terbilang usia "${una['Status']}" untuk menikah. Berikut kami rangkumkan sekilas perkiraannya untuk Anda.\n\n1). Anda akan memiliki anak pertama pada usia ${una['Anak pertama']} tahun.\n2). Kemudian, ia akan masuk Sekolah Dasar (SD) ketika Anda berusia ${una['Anak masuk SD']} tahun.\n3). Berikutnya, ia akan masuk ke jenjang Sekolah Menengah Pertama (SMP) dan Anda berusia ${una['Anak masuk SMP']} tahun.\n4).Kemudian, ia akan masuk ke jenjang Sekolah Menengah Atas (SMA) ketika Anda berusia ${una['Anak masuk SMA']} tahun.\n5). Selanjutnya, ia masuk ke jenjang yang lebih tinggi lagi, KULIAH dan Anda berusia ${una['Anak masuk Kuliah']} tahun.\n6). Normalnya, ia akan wisuda 4 tahun kemudian dan ketika itu Anda berusia ${una['Anak lulus Kuliah']} tahun.\n7). Hingga akhirnya, bisa jadi ia memutuskan untuk menikah dan Anda saat itu berusia${una['Anak nikah']} tahun.\n\nSEKIAN`;
}