/* Static method JS
      Các phương thức lớp tĩnh đc định nghĩa trên chính lớp
      Không thể gọi một pthuc trên một đối tuowngjn, chỉ trên một đối
      tượng 'static'
      vd =>> k thể : object.method_static()
            Có thể : Class_Name.method_static() 


*/

class Car {
  constructor(name) {
    this._name = name;
  }
  static getName(param) {
    return 'hello '+param._name;
  }
}
console.log("Static method js");
const myCar = new Car("VinFast");
//console.log("getName Car:",myCar.getName());// lỗi
console.log(Car.getName(myCar));// truyeefm đối tượng myCar vào 
console.log(Car.getName());//ok
