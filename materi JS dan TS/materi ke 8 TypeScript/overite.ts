// overite
class sum {
    operation(a:number,b:number):number{
    return a + b
    }
}
class multi extends sum {
    operation(a:number,b:number):number{
    return a *  b
    }
}
let MyMulti = new multi()
let result = MyMulti.operation(10,20)

console.log('\n'+
            "Result after performing calling the operation method is" 
            + result)

class employees {
    about():void{
        console.log("inside the employee class")

    }
}
class Man extends employees {
    gender:string = "Male"
    about():void{
        super.about()
        console.log("the gender of the mployee is " + this.gender)
    }
}
let MyMan = new Man()
MyMan.about()