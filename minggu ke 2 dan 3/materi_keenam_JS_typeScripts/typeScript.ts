// typeScript JS
// let data =10;
// console.log(data);

// let GXY :string|number|boolean //union type
// GXY = 9 + ' ';
// GXY = 0;
// GXY = 9;
// console.log(GXY)

// tipe gabungan 
// type  tipeGabungan = number|string|boolean
// let GXY : tipeGabungan
// GXY = 99
// GXY ="PSY"
// console.log(GXY)

// example enum|number|string
// enum ApproveStatusGXY{
//     draft,
//     submitted,
//     approved,
//     rejected
// }

// enum month{
//     jan,
//     feb,
//     mar,
//     apr,
//     mei,
//     jun,
//     jul,
//     agus,
//     sept,
//     okt,
//     nov,
//     des
// }
// let jans : number
// jans = 1
// let status_app:ApproveStatusGXY.approved
// let status_rej:ApproveStatusGXY.rejected
// console.log(jans)


// array string,any,number,boolean
// let names1:any[]=['a',0,'c']
// console.log(names1)
// let names2:string[]=['a','o','c']
// console.log(names2)
// let names3:number[]=[1,2,3,4]
// console.log(names3)
// let names4:boolean[]=[]
// console.log(names4)


// array tuple
// let color :[number,number?,number?] = [255,88]
// console.log(color)


// example try catch 

// let discount : Number;
// let itemCount = 10;

// try {
//     if ( itemCount > 0&& itemCount <= 5) {
//         discount = 5 //5% discount
//     }
//     else if (itemCount > 5 && itemCount <=10) {
//         discount = 10 //10% discount
//     }
//     else if (itemCount >10)
//     {
//         discount =15 //15% discount
//     }
//     else{
//         throw new Error ('The Number of otem cannot be negative!')
//     }
//     console.log(`You Got ${discount}% discount.`)
// } catch(e:any) {
//     console.log(e.message)
// }

// try {
//     switch (true) {
//         case itemCount > 0 && itemCount <= 5:
//             discount = 5;
//             break;
//         case itemCount > 5 && itemCount <= 10:
//             discount = 10;
//             break;
//         case itemCount > 10:
//             discount = 15;
//             break;
//         default:
//             throw new Error('The Number of items cannot be negative!');
//     }
//     console.log(`You Got ${discount}% discount.`);
// } catch (e:any) {
//     console.log(e.message);
// }

// example looping 
// let temp : number[] = []
// for(let i = 0;i<20;i+=2)
// {   
//     temp.push(i)
//     console.log(temp)
// }
// let i = 0 

// while (i<20) {
//     console.log(i)
//     i+=2
// }


// example addData Using Fucntion
// function tambah(x : number,y:number) {
//     console.log(x+y)
//     // return x + y
// }
// tambah(4,5)

// example addData on using return
// let add :(x:number , y:number) => void

// add= function (z:number,w:number) {
//     return z+w
// }

// let add = function (z:any,w:any):any 
// {
//     return z+w
//     // console.log('berhasil',z+w)
// }
// console.log(' ')
// console.log("berhasil")
// console.log(add(10,9))



// example optional in parameter
// function Multiple(a:number,b:number,c?:number):number {
//     if (typeof c !== 'undefined') {
//             return a*b*c
//     }
//     return a*b
// }
// console.log(Multiple(15,7,9))


// example rest parameter
// function GetTotal(x : number,y:number,...numbers:number[]):any {
//     let total = 0
//     numbers.forEach(jumlah => total += jumlah+x+y)

//     console.log(total)
// }
// GetTotal(12,2,2,2,2,2,2,2)


// function addData(a: number| string ,b:number|string):any {
//     if (typeof a === 'number' && typeof b === 'number') 
//     {
//         return a + b;
//         // console.log(a+b)
        
//     }
//     if (typeof a === 'string' && typeof b === 'string')
//     {
//         return a+ b;
//         // console.log(a+b)
//     }
        
// }
// console.log(addData(6,8))  

