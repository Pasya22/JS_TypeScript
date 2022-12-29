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