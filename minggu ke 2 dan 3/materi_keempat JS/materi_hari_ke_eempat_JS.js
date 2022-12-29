// looping using "for"

// let ranks = ["A", "B", "C", "D"];
// for (let i = 0; i < ranks.length; i++) {
//     console.log(ranks[i]);

// }
// // using "of" in interation (for)
// for (let rank of ranks) {
//     console.log(rank);

// }
// // using "${index}" in interation (for)
// let colors = ["Green", "blue", "red", "yellow"];
// for (const [index, color] of colors.entries()) {
//     console.log(`${color} is at index ${index} `);

// }

// using object in interation(for)

// const user = [{
//         Names: 'PSY',
//         email: 'pangestuseptian09@gmail.com',
//         age: '23',
//         DOB: '22/09/1999',
//         active: true,
//     },
//     {
//         Names: 'yujin',
//         email: 'pangestuseptian09@gmail.com',
//         age: '23',
//         DOB: '22/09/1999',
//         active: true,

//     }
// ];

// for (const users in user) {
//     const element = user[users];
//     const data = 'username' + element['email'];
//     console.log(data);
// }
// for (const o of user) {
//     console.log(o.Names)
// }


// for (let i = 0; i < 7; i++) {
//     let concat = " ";
//     for (let j = i; j < 7; j++) {
//         concat = j - 1 + " " + concat;

//     }
//     console.log(concat.replace("0", ' '));
//     // console.log()
// }
// for (let i = 5; i > 0; i--) {
//     console.log('*'.repeat(i));
// }
// for (let i = 0; i < 6; i++) {
//     let concat = "";
//     for (let j = i; j < 6; j++) {
//         concat = j - 1 + " " + concat;
//     }
//     console.log(concat.replace("0", " "));
// }
// for (let i = 1; i < 7; i++) {
//     let line = " ";
//     for (let j = i; j < 7; j++) {
//         line = j - 1 + " " + line;
//     }
//     console.log(line.replace("0", " "));
// }

// const n = 6
// let concat = " "
// let angka = "* "
// for (let i = 1; i <= 6; i++) {
//     concat = concat.repeat(6 - 1) + angka.repeat(i)
//     console.log(concat)
//     concat = " "
// }

// let concat = " "
// let angka = "* "
// for (let i = 1; i <= 6; i++) {
//     concat = angka.repeat(i)
//     console.log(" ".repeat(6 - i) + concat + " ".repeat(6 - i) + concat)
//     // concat = " "
// }

// init arrays
// const emptyArray = []
// const foods = ["sup", "pizza", "pasta"]
// const numbers = [2, 4, 6, 8]
// const students = [{
//     names: "code",
//     names: "Academy"
// }]

// foods.push()
// foods.pop()
// foods.unshift()
// foods.shift()
// console.log(foods)


// let originalArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// let diagonalArray = [];

// originalArray.forEach((row, rowIndex) => {
//     row.forEach((col, colIndex) => {
//         if (rowIndex === colIndex) {
//             diagonalArray.push(col);
//         }
//     });
// });
// console.log(diagonalArray)


// function genapDiagonal(n) {
//     let result = "";
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (i === j && (i + j) % 2 === 0) {
//                 result += j;
//             } else {
//                 result += i;
//             }
//         }
//         result += "\n";
//     }
//     return result;
// }

// console.log(genapDiagonal(7));
// // const numbers = [1, 5, 6, 8, 9, 3];

// // numbers.forEach((elemen, index) => {
// //     numbers[index] = elemen + 2;
// // });
// // console.log(numbers)



// Diagonal using For 
function genapDiagonal(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(" ".repeat(n - i) + i + " ".repeat(i));

        }
    }

}
genapDiagonal(10);



// using whileDO 
function genapDiagonal2(n) {

    let x = 1;
    do {
        if (x % 2 == 0) {
            console.log(" ".repeat(n - x) + x + " ".repeat(x));
        }
        x++

    } while (x <= n);
}
genapDiagonal2(10)


for (let i = 0; i <= 7; i++) {
    let concat = " ";
    for (let j = i; j >= 1; j--) {
        concat = j - 1 + " " + concat;

        console.log(" ".repeat(j - 1) + i + " ".repeat(i));
    }
    console.log(concat.replace("0", ' '));
    console.log()
}
console.log('\n')
// let str2 = " ";
// for (let i = 1; i <= 10; i++) {
//     str2 += 10 - i;
//     console.log(str2.replace("0", "1"));
// }

function fungsiRekursif(NUmbers) {
    console.log('\n')
    // let str2 = " ";
    for (let i = 0; i < NUmbers; i--) {
        let str2 = " " + NUmbers - i
        console.log(str2);
    }
}
fungsiRekursif(7);

console.log('\n')

function kebalik(panjang) {
    let concat = " "
    for (let i = panjang; i > 0; i--) {
        let huruf = (`${String.fromCharCode(65 + (panjang - i ))}${concat}`)
        concat = concat.repeat(panjang - i) + huruf.repeat(i)
        console.log(concat);
        concat = " ";
    }
}

kebalik(6)

console.log('\n')

function kebalik(panjang) {
    let concat = " ";
    let i = panjang;
    while (i > 0) {
        let huruf = (`${String.fromCharCode(65 + (panjang - i ))}${concat}`)
        concat = concat.repeat(panjang - i) + huruf.repeat(i)
        console.log(concat);
        concat = " ";
        i--;
    }
}
kebalik(6)