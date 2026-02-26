const numbers=[12,20,33];
console.log(...numbers);// ...spread ja sob element chorai dey;
//const max=Math.max(numbers);NaN asto kron eta Math.max(12,20,33)
const max=Math.max(...numbers);
console.log(max);

function sum(x,y,z){
    return x+y+z;
}
console.log(sum(...numbers));

const arr =[1,2,3];
const newArr=[10,...arr,4,5];
console.log(newArr);
