//function declaration
console.log(add(10,30))//eta ageo call korte parbo poreo;
function add (num1,num2){
    return num1+num2;
}
console.log(add(20,30))
//function expression
//console.log(add2(10,30))//eta ageocall korte parbo na 
const add2 =function(num1,num2){
     return num1+num2;
}
console.log(add2(10,30))//but pore parbo;
//arrow function;
const add3=(num1,num2)=> num1+num2;
console.log(add3(50,60));//arrow sign jonno return kora lagi nai single line jonno automatic return kore multiline jonno return use korte hobe;

const minus=(a,b)=>a-b;
console.log(minus(40,30));
const isEven=num => num % 2==0;
console.log(isEven(2));
const isOdd=num => num % 2 !=0;
console.log(isOdd(3));


