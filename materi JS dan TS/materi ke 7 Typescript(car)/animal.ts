// // animals private
// class animals {
//    #name: string;
//    #pemakan: string ;
//    #species: string ;

//     constructor(name:string, pemakan:string, species:string) {
//      this.#name =name
//      this.#pemakan =pemakan
//      this.#species =species
      
//     }
//     #setData(name :string,pemakan:string,species:string)
//     {
//         this.#name = name
//         this.#pemakan = pemakan
//         this.#species = species
//     }
//     SetDataP(){
//         return this.#setData('harimau','kanivora','predator')
//     }
//    #getData()
//     {
//         return ` ${this.#name } merupakan hewan ${this.#species} dan juga ia pemakan ${this.#pemakan}`
//         // return this.#setData()
//     }
//     getDataP(){
//         return this.#getData()
//     }
// }
// class view extends animals {
//     constructor(name:string, pemakan:string, species:string) {
//         super(name,pemakan,species)
         
//        }
//      show(){
//         return `ini adalah hewan ${super.getDataP()}`
//        }
// }
// let myAnimal = new animals(" "," ","  ");
// myAnimal.SetDataP();
// console.log(myAnimal.getDataP())


// ============================= using abstraction ====================

// abstract class animal {
//     constructor(protected name :string, 
//                 protected pemakan:string,
//                 protected species:string ) {
//     }
//     abstract getData():string
//         DataAnimal():string{
//             return `${this.name} ${this.pemakan} ${this.species}`
//         }
//         tampungData():string{
//             return `${this.DataAnimal()} Show ${this.getData()} Animal `
//         }

// }
// class DataHewan extends animal {
//     constructor(name : string, pemakan:string, spicies:string) {
//         super(name,pemakan,spicies)
//     }
//     getData(): string {
//         return this.DataAnimal() 
//     }
// }
// let dataShow = new DataHewan("harimau","kanivora","predator")
// // console.log(dataShow.getData())
// console.log(dataShow.tampungData())

// ============================ using interface ====================
// interface animals2
// {
//     name(name:string):boolean
//     pemakan(pemakan:string):boolean
// }
// interface DataGet extends animals2{
//     species(species:string):boolean
// }
// class hewans implements DataGet {
//     species(species: string): boolean {
//         console.log(`adalah hewan ${species}`)
//         return true
//     }
//     name(name: string): boolean {
//         console.log(`${name}`)
//         return true
//     }
//     pemakan(pemakan: string): boolean {
//         console.log(`serta ia juga termasuk hewan ${pemakan}`)
//         return true
//     }
//     data(name: string, pemakan: string, species: string): boolean {
//         console.log(`${name} adalah hewan ${species} serta ia juga termasuk
//                     hewan ${pemakan}`)
//                     return true
//     }
// }

// let Myhewan = new hewans() 
// Myhewan.name('harimau')
// Myhewan.species('predator')
// Myhewan.pemakan('kanivora')
// Myhewan.data('harimau','predator','kanivora')

// ============= using overite ==============================

class SumAnimal {
    operation(hewan1 :number, hewan2:number):number
    {
        return hewan1 + hewan2
    }
}
class multiTotal extends SumAnimal {
    operation(hewan1:number, hewan2:number):number {
        return hewan1 * hewan2
    }
}
let MyTotalAnimal = new multiTotal()
let hasil = MyTotalAnimal.operation(10,10)

console.log('\n'+'Hasil setealah performa manggil metode operation is'+hasil)

class animal4(){
    about():void{
        console.log("didalam kelas hewan")
    }
}

class Predator extends animal4{
    nameAnimal:string = "Lion"
    about():void{
        super.about()
        console.log("the animal of predator is"+)
    }
}