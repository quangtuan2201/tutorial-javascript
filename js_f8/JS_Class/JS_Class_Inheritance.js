/* Inheritance : kế thừ
    Để tạo ra lớp kế thừa sử dụng từ khóa 'extends'
    Một lớp được tạo ra với một kế thừa lớp kế thừa tất cả các
     phương thức từ Một lớp khác:
     - Phương thức super() đề cập đến thuộc tính của lớp cha
     - Node : Kế thừa rất hữu cho khả năng tái sử dụng code , sử dụng
     lại thuộc tính và phương thức của lớp cha
     - Getter & Setter : được gọi k cần dấu ngoặc đơn
     Ghi: Đối với các khai báo khác, chẳng hạn như hàm, bạn sẽ KHÔNG nhận
          được lỗi khi bạn cố gắng sử dụng nó trước khi nó được khai báo,
          vì hành vi mặc định của các khai báo JavaScript đang hoisting 
          (di chuyển khai báo lên trên cùng).

*/ 
class Car{
     constructor(brand){
          this._carname = brand;
     }
     get carname() {
          return this._carname
     }
     set carname(value) {
          this._carname = value;
     }
     present(){
          return'I have '+this.carname;
     }
}

class Model extends Car{
     constructor(brand,model){
          super(brand);
          this.model = model;
     }
     show(){
          return this.present()+ ' it is a '+ this.model;

     }
}

// let myCar = new Model("VinFast",'Tuan anh');
// console.log(myCar.show());
// console.log(myCar.present())

// let myCar2 = new Car("honda");
// console.log(myCar2.carname) // gọi hàm get k cần dấu ngoặc đơn ()