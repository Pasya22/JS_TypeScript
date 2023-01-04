abstract class employee{
    constructor(protected firstName : string, protected lastName :string) {
    }
    abstract getSalary():Number
    fullName():String{
        return  `${this.firstName} ${this.lastName}`
    }
    compeStationStatement():string{
        return `${this.fullName} makes ${this.getSalary()} a month`
    }

}
class FullTimeEmployee extends employee {
    constructor(firstName : string, lastName:string, protected rate:number,protected hours:number) {
        super(firstName,lastName)
    }
    getSalary(): Number {
        return this.rate * this.hours
    }
    getFirstName():string
    {
        return this.firstName
    }
}

let MyEmployee = new FullTimeEmployee("Pangestu","Septiansyah",120000,40)
console.log(MyEmployee.getSalary())
console.log(MyEmployee.compeStationStatement())
console.log(MyEmployee.getFirstName())