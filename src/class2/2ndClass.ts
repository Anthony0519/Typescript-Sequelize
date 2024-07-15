// const greetings = (name:string,greet:string):string=>{
//     return `${greet} ${name}`
// }

// console.log(greetings("Anthony","Hello"))


interface UserInterface {
   name:string,
   email:string,
   age:number,
   gender:string,
   password:string
}

const user = (argument:UserInterface):UserInterface=>{
    return argument 
}

console.log(user({
    name:"Anthony",
    email:"anthony@gmail.com",
    age:15,
    gender:"male",
    password:"123456",
}))