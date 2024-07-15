"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordChecker = void 0;
class passwordChecker {
    //  validator (arg:string){
    // // checks if the password is empty
    //     if(arg === ''){
    //      return console.log("Password is required");
    //     }
    // //  check for length if password
    //     if(arg.length < 8){
    //      return console.log("Password is too short");
    //     }
    // //  check if the password contains an upper case
    //     if (!arg.match(/(?=.*[A-Z])/)) {
    //      return console.log("password must contain atleast 1 capital letter");
    //     }
    // // check if the password contains a lower case
    //     if (!arg.match(/(?=.*[a-z])/)) {
    //      return console.log("password must contain atleast 1 small letter");
    //     }
    // // check if the password contains a number
    //     if (!arg.match(/(?=.*[0-9])/)) {
    //      return console.log("password must contain atleast 1 numbers from 0-9");
    //     }
    //     console.log("passord all correct");
    //  }
    validator(arg) {
        // checks if the password is empty
        if (!arg) {
            return console.log("Password is required");
        }
        //  check for length if password
        if (arg.length < 8) {
            return console.log("Password is too short");
        }
        // split each character of the password into array of strings
        const splitArgument = arg.split('');
        //  check if the splitted password contains an upper case
        const foundUpperCase = splitArgument.some(upper => upper === upper.toUpperCase());
        if (!foundUpperCase) {
            return console.log("password must contain atleast 1 capital letter");
        }
        //  check if the splitted password contains a lower case
        const foundLowerCase = splitArgument.some(upper => upper === upper.toLowerCase());
        if (!foundLowerCase) {
            return console.log("password must contain atleast 1 small letter");
        }
        //  specify a number from 0 to 9
        const numbers = "0123456789";
        //  check if the splitted array contains the listed number
        const containsNumber = splitArgument.some(num => numbers.includes(num));
        if (!containsNumber) {
            return console.log("password must contain atleast 1 numbers from 0-9");
        }
        //  specify a special Characters
        const specialCharacters = "~!@#$%^&*_-+=>?<,.;':";
        //  check if the splitted array contains the listed special Characters
        const containsSpecialCharacter = splitArgument.some(num => specialCharacters.includes(num));
        if (!containsSpecialCharacter) {
            return console.log("password must contain atleast 1 specialCharacters");
        }
        console.log("passord all correct");
    }
}
exports.passwordChecker = passwordChecker;
