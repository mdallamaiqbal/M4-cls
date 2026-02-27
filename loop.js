const numbers=[1,2,3,4,5];
for(let number of numbers){
    console.log(number);    
}
const employe ={
    name:'karim babu',
    1:'desk one',
    "home-address":'lal bag',
    position:'Software Engineer'
}
for(let key in employe){
    const value=employe[key]
    console.log(key,value);    
}