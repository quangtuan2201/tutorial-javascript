/* Scope JS

 - . Phạm vi khối () => khai bào bằng từ khóa var không đc có phạm vi khối , nó có thể truy cập từ bên ngoài , let thì không
 - . Phạm vi chức năng( var,let,const k thể đc sd hay truy cập từ bên ngoài fun)
 - . Phạm vi toàn cầu ()
 1. Phạm vi khối
   {
 let x = 2;
 //
 
 }
 //x=2(error)
 -----------
  {
 var x = 2;
 }
 //x=2
 
 2. Phạm vi chức năng
 function carName() {
  let carName = 'quangtuan';
 }
 //tham so carName chỉ sd ở trong pham vi chuc nang
 3.Phạm vi toàn cầu 
 -một biến khai báo ngoài hàm
 
 let carName ='quangtuan';
 function myFun() {
    console.log(carName); 
 }
 

*/
var a = 'quang tuan';
//console.log(window.a)


myfun();
function myfun() {
 name = 'nguyen tuan anh';
 //console.log(name)

}
//console.log('global',name)

function myFun2() {
 var age = 22;
 //console.log(age)

}

myFun2()
console.log( 'age:', age);

