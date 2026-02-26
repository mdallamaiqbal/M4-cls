var a=20;
var a=30;//we can redeclare 
a=50;//and we can reassign as well
console.log(a);
let b=200;
//let b=300; so we can not redeclare;
b=300;//but we can reassign
console.log(b);
const c=2000;
//const c=3000; we can not redeclare;
//c = 3000; and we can not reassign too;
console.log(c);

{
    var x=20;
    let y=30;//block scope
    const z=40;//block scope
}
console.log(x);
// console.log(y);
// console.log(z);
