// console.log('\n')
// // // // nomor 1
// function LuasLingkaran(radius: any): any {
//  let pi = Math.PI
//  let hasil :any
//   if (isNaN(radius)) {
//     hasil = "inputan harus angka"
//     return hasil
//   }
//   else if (radius < 0) {
//     hasil = "try higher"
//     return hasil
//   }
//   else {
//    hasil = pi *(radius * radius)
//  return hasil 
//   }
     
// }

// console.log(LuasLingkaran(-1))
// console.log(LuasLingkaran("a"))
// console.log(LuasLingkaran(5))
// console.log('\n')

// // // // nomor 2
// function Jarak(JarakA:any , JarakB:any) {
//   let rs = 0.5*JarakA*JarakB **2
//   let result : any

//   if (isNaN(JarakA||JarakB)) {
//     result = "Inputan harus angka"
//     return result 
//   }
//   else if (JarakA < 0 || JarakB <0) {
//     result = "Accelaration or ime must be >=0" 
//     return result 
//   }
//   else {
//     result = rs
//     return result + '\n'
//   }

// }
// console.log(Jarak("a","t"))
// console.log(Jarak(-1,9))
// console.log(Jarak(50,60))
// console.log('\n')

// // // nomor 3
// function fahrenheitToKelvin(fahrenheit: any): any {
//   let kelvin = (fahrenheit + 459.67) * (5/9);
// let hasilSuhu :any
// if (isNaN(fahrenheit)) {
//   hasilSuhu = "Fareinhiet a must Number" 
//   return hasilSuhu
// }
// else
// {
//   hasilSuhu = Math.round(kelvin)
//   return'convert fahrenhiet ' + fahrenheit +' to kelvin = '+ hasilSuhu 
// }

// }
// console.log(fahrenheitToKelvin(45))
// console.log(fahrenheitToKelvin("1"))
// console.log(fahrenheitToKelvin("F"))
// console.log('\n')

// // // nomor 4
// function getSalesTax(price :any, tax:any) {
 
//   let rumus = price * tax/100
//   let hs : any

//   if (typeof price !== "number"  ) {
//     if (typeof price !== "number" &&  typeof tax !== "number" ) {
//       hs = "Price and tax must be a number"
//       return hs
//     }
//     hs = "Price must be a number"
//     return hs 
//   }
   
//    if (typeof tax !== "number") {
//     hs = "Price must be in number"
//   return hs
//   }
//     hs = rumus
//     return 'total sales = '+price+ 
//     `\npajak = ` +tax+
//      `\ntotalHargaPajak = `+rumus 
  

// }
// console.log(getSalesTax("a",1))
// console.log(getSalesTax(500,"pajak"))
// console.log(getSalesTax("harga","pajak"))
// console.log(getSalesTax(4500,0.5))

// // nomor 5

// function GetSalesDiscount(price:any, pajak:any, discount:any) :any {
//   let rms = price * discount / 100
//   let result : any


//   if (typeof price !== "number") {
//     if (typeof price !== "number" && typeof pajak !== "number"&& typeof discount !== "number") {
//     result = "Price, pajak , dan discount harus dalam angka" +'\n'
//       return result
//   }
//      result = '\n'+ "Price harus dalam angka"
//     return result
//       }
//   if (typeof pajak !== "number") {
//       result = "pajak harus dalam angka"
//       return result
//   }
//   let afterDis = price - rms
//   let pajak2 = afterDis * pajak / 100
//   let totalpay = afterDis+ pajak2 
//   result = rms
//     return 'total sales = '+price+ 
//     `\ndiscount 5% = ` +rms+
//      `\npriceAfterDiscount = `+ afterDis+
//      `\nPajak 10% = `+pajak2+
//      `\ntotalPayment = `+totalpay
     
     
//     }
//     console.log(GetSalesDiscount("a",1,5))
//     console.log(GetSalesDiscount(500,"Pajak",5))
//     console.log(GetSalesDiscount("harga","pajak","discount"))
//     console.log(GetSalesDiscount(4500,10,5))

// // nomor 6

// function GetCordinate(x1:any, y1:any,x2:any,y2:any):any {
//  let hs :any
//  let dx = x1 - x2;
//  let dy = y1 - y2;
//  let distance = Math.sqrt((dx * dx) + (dy * dy) ) 
//  if (isNaN(x1)  
//  || isNaN(y1)   
//  ||isNaN(x2) 
//  || isNaN(y2) ) {
//    hs =" input kordinat dalam angka"
//    return hs
//  }
//   return distance 
// }
// console.log(GetCordinate(3,4,-4,-5))
// console.log(GetCordinate("1","2","-1","-2"))
// console.log(GetCordinate("x","2","y","-2"))
// console.log(GetCordinate(3.2,4.5,-4.4,-5))

// // nomor 7
// function sumDigit(nilai:any):any {
//   let a = nilai.toString()
//   let b = a.split('')

//   if (isNaN(nilai)) {
//     return "a123 bukan angka, silahkan coba lagi!!... "
//   }
//   else if (nilai > 9999) {
//    return "12345 harus lebih kecil dari 1000" 
//   } 
//   else
//   {
//     let sum= 0;
//     for (let i = 0; i < b.length; i++) {
//       sum = parseInt(b[i])+sum ;
      
//     }
//     return sum
//   }
  
// }

// console.log(sumDigit(1234))
// console.log(sumDigit("1234"))
// console.log(sumDigit(12345))
// console.log(sumDigit("a123"))


// // nomor 8

// function elapsed(secound:any):any {
//   let days = Math.floor(secound / (3600 * 24));
//   let hours = Math.floor(secound % (3600 * 24) / 3600)
//   let minutes = Math.floor(secound % 3600 / 60);
//   let secounds = Math.floor(secound % 60);
//   let elapsed = days + ' days '+ hours+ ' hours '
//    + minutes+ ' minutes '
//    + secounds + ' secound ';
//   if (isNaN(secound)) {
//     return '\n'+ secound +  " is Not Number" 
//   }

//   return elapsed;
// }

// console.log(elapsed("700005A"))
// console.log(elapsed("700005"))

// nomor 9

// function RandomPassword(passwords:any): any {
//   const passwordRegex  = /[a-zA-Z]/;
//   const numberRegex = /[0-9]/;
//   for (let i = 0; i < passwords.length; i++) {
//     let password = passwords[i];
//     if (password.length < 6) {
//       return "length must be more than 6";
//     }
//     if (!passwordRegex.test(password) || !numberRegex.test(password)) {
//       return "value must be character";
//     }
//   }
// }
// console.log(RandomPassword(["123465"]));
// console.log(RandomPassword([3422]));
// console.log(RandomPassword(["code"]));
// console.log(RandomPassword(["codeid"]));
// belum selesai