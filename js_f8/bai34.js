function myInfo(address, age, email) {
     this.address = address;
     this.age = age;
     this.email = email;
}
var info = new myInfo('HN', 22, 't@gmail.com');
myInfo.prototype.infoAll = function () {
     return `${this.address} ${this.age} ${this.email}`;
}
//console.log(info)
//----------------------
function User(firstName) {
     this.firstName = firstName;
}

User.prototype.lastName = "Tuấn Anh";
User.prototype.fullName = function () {
     return `${this.firstName} ${this.lastName}`
}

var quangtuan = new User('Nguyễn');
//console.log(object.fullName())
User.prototype = new myInfo('HaNoi' , 22 , 'quangtuan@gmail.com');
//quangtuan.infoAll();
//console.log('fullName:',quangtuan.fullName());
//quangtuan.address = 'HCM',
  //   quangtuan.age = 23;
//quangtuan.email = 'u@gamil.com';
quangtuan.infoAll('aaa',22,'222');