import React from "react";

export function AdvicePM({ispu10, ispu25}){
    if((ispu10>100 && ispu10<200) || (ispu25>100 && ispu25<200)){
        return "\n\nKandungan debu di dalam ruangan cukup tinggi. Gunakan Air Conditioner atau kipas angin untuk sirkulasi dan pertukaran udara, atau anda dapat memasang alat penyaring debu di ventilasi udara."
    }
    else if(ispu10>200 || ispu25>200){
        return "\n\nKandungan debu di dalam ruangan sangat tinggi. Segera gunakan Air Conditioner atau kipas angin untuk sirkulasi dan pertukaran udara!"
    }
}

export function AdviceCH({ispu}){
    if(ispu>100 && ispu<200){
        return ("\n\nKandungan CH di dalam ruangan cukup tinggi. Anda dapat menggunakan ventilasi alami berupa jendela dan pintu untuk mendapatkan pertukaran udara.")
        }
    else if(ispu>200){
        return ("\n\nKandungan CH di dalam ruangan sangat tinggi. Segera gunakan ventilasi alami berupa jendela dan pintu untuk mendapatkan pertukaran udara!")
        }
}

export function AdviceCO({ispu}){
    if(ispu>100 && ispu<200){
        return ("\n\nKandungan CO di dalam ruangan cukup tinggi. Anda dapat menggunakan ventilasi alami berupa jendela dan pintu untuk mendapatkan pertukaran udara, atau dapat menambahkan properti berupa tanaman baik di luar maupun di dalam ruangan untuk mengurangi kandungan CO di dalam ruangan.")
        }
    else if(ispu>200){
        return ("\n\nKandungan CO di dalam ruangan sangat tinggi. Segera gunakan ventilasi alami berupa jendela dan pintu untuk mendapatkan pertukaran udara!")
        }
}

export function AdviceO3({ispu}){
    if(ispu>100 && ispu<200){
        return ("\n\nKandungan O3 di dalam ruangan cukup tinggi. Anda dapat menggunakan ventilasi alami berupa jendela dan pintu untuk mendapatkan pertukaran udara.")
        }
    else if(ispu>200){
        return ("\n\nKandungan O3 di dalam ruangan sangat tinggi. Segera gunakan ventilasi alami berupa jendela dan pintu untuk mendapatkan pertukaran udara!")
        }
}

export function AdviceNO2({ispu}){
    if(ispu>100 && ispu<200){
        return ("\n\nKandungan NO2 di dalam ruangan cukup tinggi. Anda dapat menggunakan ventilasi alami berupa jendela dan pintu untuk mendapatkan pertukaran udara.")
        }
    else if(ispu>200){
        return ("\n\nKandungan NO2 di dalam ruangan sangat tinggi. Segera gunakan ventilasi alami berupa jendela dan pintu untuk mendapatkan pertukaran udara!.")
        }
}

export function AdviceSuhu({temp}){
    if(temp>=28){
        return ("\n\nSuhu ruangan cukup tinggi. Silahkan dapat menyalakan alat penata udara seperti Air Conditioner (AC) atau kipas angin.")
    }
    else if (temp<=18){
        return ("\n\nSuhu ruangan cukup rendah. Silahkan dapat menggunakan pemanas ruangan atau membuka pintu dan jendela untuk mengalirkan siklus udara.")
    }
}

export function AdviceHumid({humid}){
    if(humid>=60){
        return ("\n\nKelembaban ruangan cukup tinggi. Berikan cahaya alami seperti sinar matahari yang masuk ke dalam ruangan atau cahaya buatan seperti lampu di ruangan tersebut, atau anda dapat menggunakan alat seperti dehumidifier untuk menurunkan kelembaban udara.")
    }
    else if (humid<=40){
        return ("\n\nKelembaban ruangan cukup rendah. Berikan cahaya alami seperti sinar matahari yang masuk ke dalam ruangan atau cahaya buatan seperti lampu di ruangan tersebut, membuka  pintu dan jendela agar mendapatkan sirkulasi udara yang baru, atau anda dapat menggunakan alat seperti humidifier untuk menaikkan kelembaban udara.")
    }
}

export function checkAll({ispuPM25, ispuPM10, ispuCO, ispuO3, ispuNO2, ispuCH}){
    if (ispuPM25<100 && ispuPM10<100 && ispuCO<100 && ispuO3<100 && ispuNO2<100 && ispuCH<100){
        return ("\n\nKualitas udara di dalam ruangan sudah bagus.")
    }
}
