
// ------ get PM10 ISPU
export function getPM10ISPU(x){
   if (x <= 50) {
      return x * 50 / 50;}
   else if (x <= 150) {
      return 50 + (x - 50) * (100 - 50) / (150 - 50);}
   else if (x <= 350) {
      return 100 + (x - 150) * (200 - 100) / (350 - 150);}
   else if (x <= 420) {
      return 200 + (x - 350) * (300 - 200) / (420 - 350);}
   else if (x <= 500) {
      return 300 + (x - 420) * (500 - 300) / (500 - 420);}
   else if (x >= 500) {
      return 500;}
}
// ------ end of get PM10 ISPU

// ------ get PM25 ISPU
export function getPM25ISPU(x){
   if (x <= 15.5) {
      return x * 50 / 15.5;}
   else if (x <= 55.4) {
      return 50 + (x - 15.5) * (100 - 50) / (55.4 - 15.5);}
   else if (x <= 150.4) {
      return 100 + (x - 55.4) * (200 - 100) / (150.4 - 55.4);}
   else if (x <= 250.4) {
      return 200 + (x - 150.4) * (300 - 200) / (250.4 - 150.4);}
   else if (x <= 500) {
      return 300 + (x - 250.4) * (500 - 300) / (500 - 250.4);}   
   else if (x >= 500) {
      return 500;}
}
// ------ end of get PM25 ISPU



// ------ get CO ISPU
export function getCOISPU(x){
   if (x <= 4000) {
      return (x) * (50)/4000;}
   else if (x <= 8000) {
      return 50 + (x - 4000) * (100 - 50) / (8000 - 4000);}
   else if (x <= 15000) {
      return 100 + (x - 8000) * (200 - 100) / (15000 - 8000);}
   else if (x <= 30000) {
      return 200 + (x - 15000) * (300 - 200) / (30000 - 15000);}
   else if (x <= 450000) {
      return 300 + (x - 30000) * (500 - 300) / (45000 - 30000);}  
   else if (x >= 45000) {
       return 500;}
}
// ------ end of get CO ISPU

export function getO3ISPU(x){
   if (x <= 120) {
      return x * 50 / 120;}
   else if (x <= 235) {
      return 50 + (x - 120) * (100 - 50) / (235 - 120);}
   else if (x <= 400) {
      return 100 + (x - 235) * (200 - 100) / (400 - 235);}
   else if (x <= 800) {
      return 200 + (x - 400) * (300 - 200) / (800 - 400);}
   else if (x <= 1000) {
      return 300 + (x - 800) * (500 - 300) / (1000 - 800);}  
   else if (x >= 1000) {
       return 500;}
}
// ------ end of get CO ISPU

export function getCHISPU(x){
   if (x <= 45) {
      return x * 50 / 45;}
   else if (x <= 100) {
      return 50 + (x - 45) * (100 - 50) / (100 - 45);}
   else if (x <= 215) {
      return 100 + (x - 235) * (200 - 100) / (215 - 100);}
   else if (x <= 432) {
      return 200 + (x - 215) * (300 - 200) / (432 - 215);}
   else if (x <= 648) {
      return 300 + (x - 432) * (500 - 300) / (648 - 432);}
   else if (x >= 648) {
       return 500;}
}

export function getNO2ISPU(x){
   if (x <= 80) {
      return x * 50 / 80;}
   else if (x <= 200) {
      return 50 + (x - 80) * (100 - 50) / (200 - 80);}
   else if (x <= 1130) {
      return 100 + (x - 200) * (200 - 100) / (1130 - 200);}
   else if (x <= 2260) {
      return 200 + (x - 1130) * (300 - 200) / (2260 - 1130);}
   else if (x <= 3000) {
      return 300 + (x - 2260) * (500 - 300) / (3000 - 2260);}  
   else if (x >= 3000) {
       return 648;}
}
// ------ end of get CO ISPU



// console.log(getPM25ISPU(avgPM25));
// console.log(getSO2ISPU(avgSO2));
