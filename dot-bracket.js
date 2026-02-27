const employe ={
    name:'karim babu',
    1:'desk one',
    "home-address":'lal bag',
    position:'Software Engineer'
}
//console.log(employe.1); error
//console.log(employe."home-address");error
console.log(employe[1]);//bracket notation
console.log(employe["home-address"]);
const key='position';
console.log(employe[key]);

