
const SO2 = [50, 63, 800, 800, 800, 800];
const PM25 = [50, 63, 53, 74, 160, 160, 160, 160];
const PM10 = [50, 63, 53, 74, 350, 350, 350, 350];

// ------ cari rata2 (contoh)
const movingAverage = (arr = []) => {
   for(let i = 0; i < arr.length; i++){
      sum = arr.reduceRight((c => (s, v) => s + (c && c-- && v))(4), 0)
      var avg = sum / 4;
   };
   return avg;
};
// ------ end of cari rata2 (contoh)

// ------ cari rata2 24 jam
const movingAverage24h = (arr = []) => {
   for(let i = 0; i < arr.length; i++){
      sum = arr.reduceRight((c => (s, v) => s + (c && c-- && v))(1440), 0)
      var avg = sum / 1440;
   };
   return avg;
};
// ------ end of cari rata2 24 jam

// ------ parameter untuk fungsi ISPU
let avgPM10 = movingAverage(PM10);
let avgPM25 = movingAverage(PM25);
let avgSO2 = movingAverage(SO2);
// ------ end of parameter untuk fungsi ISPU


// ------ get PM10 ISPU
function getPM10ISPU(x){
   if (x <= 50) {
      return "RENDAH";}
   else if (x <= 150) {
      return 50 + (x - 50) * (100 - 50) / (150 - 50);}
   else if (x <= 350) {
      return 100 + (x - 150) * (200 - 100) / (350 - 150);}
   else if (x <= 420) {
      return 200 + (x - 350) * (300 - 200) / (420 - 350);}
   else if (x <= 500) {
      return "TINGGI";}
}
// ------ end of get PM10 ISPU

// ------ get PM25 ISPU
function getPM25ISPU(x){
   if (x <= 15.5) {
      return "RENDAH";}
   else if (x <= 55.4) {
      return 50 + (x - 15.5) * (100 - 50) / (55.4 - 15.5);}
   else if (x <= 150.4) {
      return 100 + (x - 55.4) * (200 - 100) / (150.4 - 55.4);}
   else if (x <= 250.4) {
      return 200 + (x - 150.4) * (300 - 200) / (250.4 - 150.4);}
   else if (x <= 500) {
      return "TINGGI";}
}
// ------ end of get PM25 ISPU

// ------ get SO2 ISPU
function getSO2ISPU(x){
   if (x <= 52) {
      return "RENDAH";}
   else if (x <= 180) {
      return 50 + (x - 52) * (100 - 50) / (180 - 52);}
   else if (x <= 400) {
      return 100 + (x - 180) * (200 - 100) / (400 - 180);}
   else if (x <= 800) {
      return 200 + (x - 400) * (300 - 200) / (800 - 400);}
   else if (x <= 1200) {
       return "TINGGI";}
}
// ------ end of get SO2 ISPU




console.log(getPM10ISPU(avgPM10));
console.log(getPM25ISPU(avgPM25));
console.log(getSO2ISPU(avgSO2));
