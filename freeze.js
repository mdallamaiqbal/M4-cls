const king={name:'Mufasa',age:55,kingdom:'Pride Lands'};
//Object.freeze(king);//kono object freeze korle kono jinish delet kora jabae na new add kora jabe na modify kora jabe na
Object.seal(king);//delete kora jabe na new add kora jabe na but value modify kora jabe na
delete king.age;
delete king.kingdom;
king.queen='Sarabi';
king.name='King simba';
console.log(king);
