"use strict";
// const student : Student = {
//     name:"Anthony",
//     age: 15,
//     punctuality: true
// }
// partial makes it optional and not required
const student = {
    // name:"Anthony",
    age: 15,
    punctuality: true
};
const studentInfo = (arg) => {
    return {
        message: "success",
        arg
    };
};
const details = {
    name: "Anthony",
    age: 10,
    punctuality: true
};
const result = studentInfo(details);
console.log(result);
// stringArray
const humanArray = ["female", "male"];
const humanNumberArray = [1, 2, 3, true, {
        name: "Anthony",
        id: 1
    },];
var DomainError;
(function (DomainError) {
    DomainError[DomainError["not_found"] = 404] = "not_found";
})(DomainError || (DomainError = {}));
;
DomainError.not_found;
class Students {
    constructor(_userName, _id) {
        this.UserName = _userName,
            this.id = _id;
    }
}
;
const Info = new Students("Anthony0519", 5);
console.log(Info);
