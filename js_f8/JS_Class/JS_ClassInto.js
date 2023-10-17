/* 
 Note : Một class javascript 'không' phải là một đối tượng
        nó là một mẫu cho các đối tượng js
        - Phương thức constructor được gọi tự động khi đối 
        tượng mới đc tạo ra
*/ 

class ClassName{
     constructor(name,age){
         this.name = name;
         this.age = age;
     }
      displayName() {
          return `${this.name}, ${this.age}`;
     }
}

// console.log("Class in js")
// var user1 = new ClassName('tuan anh',22);
// console.log(user1.displayName())// kq : tuan anh , 22