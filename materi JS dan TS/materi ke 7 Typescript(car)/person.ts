// class using method contractor
class person {
   static status :string = "okey"
   protected nama : string
   protected umur : number
   protected pekerjaan : string
    
    constructor(nama : string,
                umur : number,
                pekerjaan : string) 
    {
        this.nama=nama;
        this.umur=umur;
        this.pekerjaan=pekerjaan;
    }

    
    setNama(namaAwal : string) {
        this.nama = namaAwal;
    }
        
    public getNama() : string {
        return '\n' +'nama saya '+`${this.nama}`
    }
    

}
let employee = new person('pasya',23,'WebDeveloper')
console.log(employee.getNama())
