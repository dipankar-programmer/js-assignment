a = prompt("enter the number of numbers")
arr=[]
for(i=0;i<a;i++){
    k=prompt("enter the numbers")
    arr.push(k)
}

let even = arr.filter((el)=>el%2!=0);
console.log(even)
