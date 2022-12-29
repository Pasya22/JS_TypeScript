// Diagonal using For 
// function genapDiagonal(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 === 0) {
//             console.log(" ".repeat(n - i) + i + " ".repeat(i));

//         }
//     }

// }
// genapDiagonal(10);



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