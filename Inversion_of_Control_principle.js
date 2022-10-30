function square(item){
    return item * item; 

}
function divideBy5(item){
return item /5
}
function squareRoot(item){
    return Math.sqrt(item)
}

let arrr =[2,4,2,6,5];
//Square call back
console.log(arrr.map(square));
//DivideBy6 callback
let arr1 =[10,45,15,20,100]
console.log(arrr.map(divideBy5));
//Squareroot callback
let arr2 =[25,12,14,42,55,22]
console.log(arrr.map(squareRoot));


