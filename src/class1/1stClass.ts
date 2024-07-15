
// interface defines a strict contract for the shape of an objectincluding the data types of its properties 
interface Student {
    name:string,
    age:number,
    punctuality:boolean
}

// const student : Student = {
//     name:"Anthony",
//     age: 15,
//     punctuality: true

// }

// partial makes it optional and not required
const student : Partial<Student> = {
    // name:"Anthony",
    age: 15,
    punctuality: true

}

// function
// function studentInfo (arg: string){
//     return arg;
// }
// const result = studentInfo("Loveth");
// console.log(result)

interface StudentRes {
    message:string,
    arg:Student
}

const studentInfo = (arg:Student): StudentRes=>{
    return {
        message:"success",
        arg
    }
}

const details :Student = {
    name:"Anthony",
    age:10,
    punctuality:true
}

const result = studentInfo(details)

console.log(result)

// stringArray
const humanArray: string[] = ["female", "male"];
 
// numberArray
type HumanInterface = [
    number,
    number,
    number,
    boolean,

    {
        name: string;
        id: number
    }
]

const humanNumberArray : HumanInterface = [1, 2,3, true, {
    name:"Anthony",
    id:1
},]

enum DomainError {
    not_found = 404
};

DomainError.not_found;

interface StudentInfoInterface {
    UserName :string;
    id:number;
}

class Students implements StudentInfoInterface {
    UserName : string;
    id: number;
    constructor (_userName: string, _id: number){
        this.UserName = _userName,
        this.id = _id
    }
};
const Info = new Students("Anthony0519", 5);

console.log(Info)