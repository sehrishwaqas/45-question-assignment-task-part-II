
let num1:number=30;
let num2:number=15;
console.log(num1>num2);

console.log(num1<num2);

console.log(num1>=num2);

console.log(num1<=num2);
console.log((num1>num2) && (num2!=num1));
console.log((num1>num2) || (num2==num1));

const array: number[]=[213,415,276,786,564];
console.log(array[4]);
console.log(array[5]);
const item =564;
if(array.indexOf(item)){
    console.log(`The array includes ${item}`);

}else{
    console.log(`The array does not include ${item}`)
}



