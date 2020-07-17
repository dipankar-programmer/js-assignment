marks=prompt("enter the marks here")
// if(marks>90){
//     console.log("A grade")
// }
// else if(marks>70){
//     console.log("B grade")

// }
// else{
//     console.log("nice try buddy")
// }

// console.log(marks>90 ? 'A grade':marks>70 ? 'B grade':'nice try buddy')

switch(marks){
    case marks>90:
        console.log("A Grade")
    case marks>70:
        console.log("B grade")
    default:
        console.log("Nice try buddy")

}
