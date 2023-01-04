// interface TypeScript

interface mailable{
    send(email:string):boolean
    queue(email:string):boolean
}

interface FutureMailable extends mailable{
    later(email:string, after:number):boolean
}
class mail implements FutureMailable {
    email:string
    after:string
    constructor(email:string,after:string) {
        this.email=email
        this.after=after
    }
    later():boolean
    {
        console.log(`send email to ${this.email} ${this.after} ms.`)
        return true
    }
    send(): boolean {
        console.log(`send email to ${this.email}.`)
        return true
    }
    queue(): boolean {
        console.log(`${this.email} is in Queue`)
        return true
    }
}
let mails = new mail("pangestuSeptiansyah99@gmail.com","900")
mails.send()
// mails.later()
// mails.queue()
