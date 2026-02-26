//function number(num1,num2) 
//number(10) value come undefined
function number(num1,num2=0){
    const result=num1+num2;
    console.log(num1,num2,result);
}
number(10);//now value is defined because i have given default value
//more example
//function string(fn,ln){}string('karim','shaheb'); value not defined
function string(fn,ln=''){
    const name =fn+' '+ln;
    console.log(name);
    
}
string('karim');//when i give default value now the value shows without any problem