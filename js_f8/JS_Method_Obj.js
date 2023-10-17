/* Thao tac voi Object 
 1. hasƠnProperty(); lặp qua các thuộc tính của đối tượng , 
     k p các thuộc tính kế thừa  từ prototype
 2. keys() : lặp qua cá     key của object
 3. values() : lặp qua các giá trị của object 
 4. entries : lặp qua key,value của object

*/

var obj = {
     name : 'Tuan',
     age : 22,
     gender : 'Name',
     myfun : function() {
       return this.name+' ' + this.age;
     }
 }
 //1
 for( let key in obj){
    if(obj.hasOwnProperty(key)){
       const value = obj[key];
      // console.log(`${key} : ${value}`)
    }
 }
 //2 
 var keys = Object.keys(obj);
 for(const key of keys){
     const value = obj[key];
     //console.log(`${key}: ${value}`)
 }
 //3
 var values = Object.values(obj);
 for(let value of values){
     //console.log(value);//show ra vaklue has Object
 }
 console.log(typeof obj.myfun);
 // 
 var entries = Object.entries(obj);
 for( let [key,value] of entries){
     console.log(`${key} : ${value}`)
     if(key === 'myfun'){
      console.log(key+":",   obj.myfun());
     }
 }
 
 
  //console.log(obj.myfun())
 for(let i in obj){
    console.log( `${i}: `+obj[`${i}`])
 }