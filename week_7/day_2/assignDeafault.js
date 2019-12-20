// // function sum(maths, sci, eng){
// //     //old ways
// //     maths= maths ||0,
// //     sci=sci || 0,
// //     eng = eng || 0
// //     return maths+sci+eng
// // } 

// // console.log(sum(50,5))


// //ES6
// function sum(maths=0, sci=0, eng=0){
//     return maths+sci+eng
// } 

// console.log(sum(50,5))

// //showing error of user
// function err(error){

//     return error
// }
// function sum(maths=0, sci=err(`plz give the value of sci`), eng=0){
//     return maths+sci+eng
// } 

// console.log(sum(50,50))


// function getYear(){
//     var year =2019
// }

// getYear()
// console.log(year)

// const yara
// console.log(yara)

// function getName(){
//     var status = true
//     if(status){
//         const name='sud'
//     }

//     console.log(name)
// }

// getName()

// const email = "lalh"
// let name='sud'

// // email='aksjd'
// name='singh'

// const arr = [0,1,3]

// arr[0]=1
// console.log(arr)


// function getName(){
//     name="sud"
// }

// console.log(name)

// var name='sud'
var arrObj = [
    {FirstName: "Zach", LastName: "Emergency", Age: 35},
    {FirstName: "Nancy", LastName: "Nurse", Age: 27},
    {FirstName: "Ethel", LastName: "Emergency", Age: 42},
    {FirstName: "Nina", LastName: "Nurse", Age: 48},
    {FirstName: "Anthony", LastName: "Emergency", Age: 44},
    {FirstName: "Nina", LastName: "Nurse", Age: 32},
    {FirstName: "Ed", LastName: "Emergency", Age: 28},
    {FirstName: "Peter", LastName: "Physician", Age: 58},
    {FirstName: "Al", LastName: "Emergency", Age: 51},
    {FirstName: "Ruth", LastName: "Registration", Age: 62},
    {FirstName: "Ed", LastName: "Emergency", Age: 38},
    {FirstName: "Tammy", LastName: "Triage", Age: 29},
    {FirstName: "Alan", LastName: "Emergency", Age: 60},
    {FirstName: "Nina", LastName: "Nurse", Age: 54}
];


function sortArray(array, property, direction) {
    direction = direction || 1;
    array.sort(function compare(a, b) {
        let comparison = 0;
        if (a[property] > b[property]) {
            comparison = 1 * direction;
        } else if (a[property] < b[property]) {
            comparison = -1 * direction;
        }
        return comparison;
    });
    return array; // Chainable
}

console.log(sortArray(arrObj, 'LastName', -1))