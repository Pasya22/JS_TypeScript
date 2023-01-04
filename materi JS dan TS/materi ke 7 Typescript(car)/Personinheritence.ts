// materi inheritence
class PersonsIn {
    // private nama : string
    // private umur : number
    // private pekerjaan : string
    
    // protected nama : string
    // protected umur : number
    // protected pekerjaan : string
    
    nama : string
    umur : number
    pekerjaan : string
    constructor(nama :string, umur:number, pekerjaan:string) {
        this.nama = nama
        this.umur = umur
        this.pekerjaan = pekerjaan
    }
    
    setNama(nama : string) {
        this.nama = nama;
    }
    getNama() {
       return `${this.nama}`
    }
    
    GetPerson() : string {
        return `Nama Saya ${this.nama} dan pekerjaan saya sebagai ${this.pekerjaan}`
    }

   
}
class employe extends PersonsIn {
    status:string
    constructor(nama:string, umur:number,
                pekerjaan:string, status:string) {
                super(nama,umur,pekerjaan)
                this.status=status
    }
    ShowNama()
    {
        return `Nama saya ${super.getNama() } status ${this.status}`
    }
    
}
let emp1 = new employe('pangestu',23,'WebDeveloper','Aktif')
console.log(emp1.GetPerson())
emp1.setNama('pol')
console.log(emp1.ShowNama())