const employe ={
    name:'karim babu',
    1:'desk one',
    "home-address":'lal bag',
    family:{
        father:'Babu karim',
        // mother:{
        //   name:'tina',
        //   age:50
        // }
    },
    position:'Software Engineer'
}
console.log(employe.family?.mother);//?this is optional chaining when we don't have value
