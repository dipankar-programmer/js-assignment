 function checkAge(age) {
    (age > 99) ? alert(`the number entered is ${age} `):checkAge() 
   }
 
 age = prompt("enter a number ")
checkAge(age)
// alert(m)  