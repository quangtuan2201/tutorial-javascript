/*
object contructor
*/
function User(firstName , lastName , avatar) {
     this.firstName = firstName;
     this.lastName = lastName;
     this.avatar = avatar;
     this.getName = function() {
          return `${this.firstName} ${this.lastName}`
     }

}
var author = new User('quang' , 'tuan' ,'image1.jpg');
// kiểm tra contructor của object
console.log(author.contructor)
//them thuoc tinh cho object author
author.email ='nguyentuan@gmail.com'
console.log(author)
// object gọi thuộc tính getName 
console.log(author.getName());