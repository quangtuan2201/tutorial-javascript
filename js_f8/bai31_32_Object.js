// Object trong js
// Object trong js


var emailkey = 'email';
var mykey ='adress';
var myInfo = {
     name : 'Quang tuan',
     age : 22 ,
     adress : 'Ha Noi',
     [emailkey] : 'tuna@gamil.com',// them ten thuoc tính thong qua tên biến lưu trữ đặt trong dấu ngoặc vuông
     info : function() {
          return this.name +' ' + this.age + ' ' + this.adress
     }

}
//them mot thuoc tinh
myInfo.sex = 'Nam';
//lay gia tri một thong tinh thong qua mot bien lưu trũ gia trị trùng với tên thuộc tính
console.log(myInfo[mykey]);
//goi gia trị thuộc tính là một fun 
console.log(myInfo.info())
console.log('myInfo:',myInfo)
//xoa mot thuoc tinh
delete myInfo.email;
console.log(myInfo)

/*contructor object*/