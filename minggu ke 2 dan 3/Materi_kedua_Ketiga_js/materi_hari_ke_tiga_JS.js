// // control flow statements,
// // penggunaan IF untuk mengerjakan statements yang berada dalam block ketika kondisi true.
// // kondisi dapat berupa nilai atau ekspresi 
// // rekomendasi tetap pakai kurung kurawal, untuk kemudahan maintain kode program.


// // struktur flow satements
// // Start->condition(if back)->end;

// // example statements :
// // if (condition) {
// //     statement;
// // }

// // if (condition) {

// // }

// // nested if adalah (if) di dalam (if)

// // example if nested
// // if (condition) {
// //     if (condition) {

// //     }
// // }
// // example not use if nested
// // if (let a >= 1 && the_name === 'PSY') {
// //     console.log(a);
// // }


// // let read = require("readline-sync");
// // let inputs = read.question('Masukan data anda : ');

// // // let inputs = 5;
// // if (inputs == 5) {
// //     console.log("data yang di Input sama dengan 5");
// // } else if (inputs >= 5) {
// //     console.log("Data yang di input lebih besar sama dengan 5 ")
// // } else if (inputs != 5) {
// //     console.log("Data yang di input tidak sama dengan 5 ")
// // } else if (inputs <= 5) {
// //     console.log("Data yang di input kurang dari sama dengan 5 ")
// // } else {
// //     console.log("data yang di input tidak sesuai dengan kualifikasi kinerja")
// // }
// // let weight = 70; //kg
// // let height = 1.72; //meter

// // let bmi = weight / (height * height);

// // let weightStatus;

// // if (bmi < 10.5) {
// //     weightStatus = 'underWeight';
// // } else if (bmi >= 10.5 && bmi <= 24.9) {
// //     weightStatus = 'Healty Weight';

// // } else if (bmi >= 25 && bmi <= 29.9) {
// //     weightStatus = 'OverWeight';

// // } else {
// //     weightStatus = 'Obesity';
// // }
// // console.log(weightStatus)

// // kondisi statement 
// // let age = 60;
// // let message = age >= 15 ? "you can drive" : age >= 6 ? "you cannot drive" : age >= 80 ? "you cannot drive" : 'lol';

// // console.log(message);

// // kondisi statement kurawal
// // let age = 14;
// // let message;

// // if (age >= 17) {
// //     console.log('you can drive')
// // } else {
// //     console.log('you cannot drive')
// // }

// // example statements using switch case
// // switch (age) {
// //     case age = 14:
// //         message = "you can drive"
// //         break;
// //     case age < 14:
// //         message = "you cannot drive"
// //         break;
// //     default:
// //         message = "you cannot drive"
// // }
// // console.log(message)

// // getDay using switch case with insert
// // let day = ' ';
// // let hari = require("readline-sync");
// // let hariIni = hari.question('masukan range 0-6 : ')

// // switch (new Date(hariIni).getDay()) {
// //     case 0:
// //         day = "minggu";
// //         break;
// //     case 1:
// //         day = "senin";
// //         break;
// //     case 2:
// //         day = "selasa";
// //         break;
// //     case 3:
// //         day = "rabu";
// //         break;
// //     case 4:
// //         day = "kamis";
// //         break;
// //     case 5:
// //         day = "jumat";
// //         break;
// //     case 6:
// //         day = "sabtu";
// //         break;

// //     default:
// //         console.log("hari sudah ditetapkan !!")
// //         break;
// // }
// // console.log(day)

// // example bilangan ganjil genap menggunakan statement switch case
// // for (let i = 1; i <= 100; i++) {

// //     switch (i % 2) {
// //         case 0:
// //             console.log(i + " adalah bilangan ganjil");
// //             break;
// //         default:
// //             // break;
// //             console.log(i + " adalah bilangan genap");
// //     }
// // }
// // example capital using switch case
// // kapital = "  ";

// // let huruf = " ";
// // for (let i = 65; i <= 90; i++) {
// //     switch (true) {
// //         case huruf += String.fromCharCode(i) + ' ':
// //             break;

// //     }

// // }
// // console.log(huruf)


// // example grade using if and switch 

// let grades = ["A", "B", "C", "D", "E"];
// let read = require("readline-sync");
// let inputs = read.question('masukan range A-E : ')

// if (inputs >= 90 && inputs <= 100) {
//     grades = "A";
// } else if (inputs >= 80 && inputs <= 89) {

//     grades = "B";
// } else if (inputs >= 70 && inputs <= 79) {

//     grades = "C";
// } else if (inputs >= 60 && inputs <= 69) {

//     grades = "D";
// } else if (inputs >= 50 && inputs <= 59) {

//     grades = "E";
// }

// switch (true) {
//     // ===================  90 - 100
//     case inputs >= 90 && inputs <= 100:
//         console.log(grades[0])
//         break;
//         // =============== 80-89
//     case inputs >= 80 && inputs <= 89:
//         console.log(grades[1])
//         break;
//         // =============== 70 - 79
//     case inputs >= 70 && inputs <= 79:
//         console.log(grades[2])
//         break;
//         // =============== 60 - 69
//     case inputs >= 60 && inputs <= 69:
//         console.log(grades[3])
//         break;
//         // =============== 50 - 59 
//     case inputs >= 50 && inputs <= 59:
//         console.log(grades[4])
//         break;
// }



// exception try catch
// function add(x, y) {
//     if (typeof x !== 'number') {
//         throw new Error('the first argument must be a number');
//     }
//     if (typeof y !== 'number') {
//         throw new Error('the second argument must be a number');
//     }
//     return x, y;
// }

// try {
//     const result = add('a', 10);
//     console.log(result)
// } catch (e) {
//     console.log(e.name, ':', e.message);

// }

// example regular function

// function startEngine() {
//     console.log(" Start Hyundai Creta.. ")

// }

// function ChangeGear(Gear) {
//     if (`${Gear}` == 1) {
//         console.log(` Get The Gear ${Gear} to move a car `)
//     } else if (`${Gear}` == 2) {

//         console.log(` Please a change your Gear to ${Gear} for move a car `)
//     }

// }

// function gocar() {
//     console.log(" the car goes ")

// }

// function stopCar() {
//     console.log(" you have arrived at the location ")

// }

// function ShutdownCar() {
//     console.log(" Please trun off your car engine  ")

// }

// function driveCar(callBack) {
//     callBack();
//     ChangeGear(1);
//     gocar();
//     stopCar();
//     ShutdownCar();
// }
// driveCar(startEngine);

// // example regular function with const

// const startEngine = () => {
//     console.log(" Start Engine Hyundai Creta")
// }
// const ChangeGear = (Gear) => {
//     if (`${Gear}` == 1) {
//         console.log(` Get The Gear ${Gear} to move a car `)
//     } else if (`${Gear}` == 2) {

//         console.log(` Please a change your Gear to ${Gear} for move a car `)
//     }
// }
// const gocar = () => {
//     console.log(" the car goes ")
// }
// const stopCar = () => {
//     console.log(" you have arrived at the location ")
// }
// const ShutdownCar = () => {
//     console.log(" Please trun off your car engine  ")
// }

// const driveCar = (callBack) => {
//     callBack();
//     ChangeGear(2);
//     gocar();
//     stopCar();
//     ShutdownCar();
// }
// driveCar(startEngine)


// example count using const in class by JS
// const add = (x, y) => {
//     hasil = x + y;
//     console.log(hasil);
// }
// const showADD = (cb) =>

//     {
//         cb(10, 11);
//     }
// showADD(add)


// example a hoisting in function by JS
// function showMe() {
//     console.log('an hoisting example')
// }

// showMe()

// example a Sum in function by JS
// function add(a, b) {
//     return a + b;
// }
// let sum1 = add(add(1, 2), add(5, 7)); // sum1 will be 3
// // let sum2 = add(5, 7); // sum2 will be 12
// console.log('SUM : ' + sum1);

// example anonymous function as agruments
// let show = function () {
//     console.log('anonymous function');
// };
// show();

// sending data
// let mahasiswa = {
//     Nama: 'pasya',
//     kelas: 'TI - A'
// };

// // show data 
// (function () {
//     console.log(mahasiswa.Nama + ' ' + mahasiswa.kelas)
// })(mahasiswa);


// show data use timer
// function driveCar(callBack) {
//     setTimeout(function () {
//         callBack();
//         ChangeGear(2);
//         gocar();
//         stopCar();
//         ShutdownCar();

//     }, 1000);
// }
// driveCar(startEngine);

let str = ''

function increment(fromNumber) {
    str += String.fromCharCode(fromNumber) + ' '

    let nextNumber = fromNumber + 1

    if (nextNumber < 123) {
        increment(nextNumber)
    }
}

increment(97)
console.log(str)

let nextNumber = 0

function genap(number) {
    nextNumber++
    if (nextNumber <= number) {
        nextNumber % 2 == 0 ? console.log(nextNumber) : console.log('')
        genap(number)
    }
}

genap(10);

// let str1 = 0;

let str2 = " ";

function fungsiRekursif(NUmbers) {
    str2 += " *"
    // str1++
    let hasil = NUmbers - 1

    if (0 <= hasil) {
        // str1++
        console.log(str2)
        fungsiRekursif(hasil);
    }
}
fungsiRekursif(7)
// for (var i = 1; i <= 5; i++) {
//     for (var j = 1; j - i; j++) {
//         str1 += "*";
//         console.log(str1)
//     }
// for (let i = 0; i < (row * 2) - 1; i++) {
//     if (row === 0) {
//         process.stdout.write("#");
//         return;
//     }
//     console.log(process)

// }

// fungsiRekursif(5);