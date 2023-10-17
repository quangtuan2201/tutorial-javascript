/* Thao tác với mảng
    1.length : ktra do dai chuô
    2. toString() : convert sang kdl string
    3. pop() : popping - loại bỏ ptu cuối cùng khỏi mảng
               và in ra ptu bị xóa
    4. push() : add thêm phần tử vào mảng
    5. shift() : loại bỏ ptu dau tiên và in ra ptu bị xóa
    6. unshift() : thêm ptu vào đầu mảng ,tăng chỉ mục những ptu cũ hơn và in ra 
                   độ dài của mảng sau khi thêm
    7. join() : 
          myArr.join('param1')
          param1 : convert các ptu trong mang thanh string thông qua một dấu 
          hiệu param 
          vd : var myArr =['T','U','A']
          myArr.join('-') //kq : T-U-A
    8. delete() :
    9. concat() : Tạo ra một mảng mới bẳng cách 
                  ghép nối 1 hay nhiều mảng lại với nhau
    10.flat() : Làm phẳng một mảng là quá trình giảm tính chiều của một mảng.
           vd :const myArr = [[1,2],[3,4],[5,6]];
           const newArr = myArr.flat();
      ==> kq : myArr = [1,2,3,4,5,6]
    11.splice()'mối nối' :
    myArr.splice(param1,param2,param_n);
          param1 : xđ vị trí cần thêm  các ptu mới
          param2 : xđ bao nhiêu phần tử cần loại bỏ
          param_n : xác định ptu được thêm vào
     ==> phương thức trả về với các mục đã xóa
     note : có thể dùng để loại các phần tử
     vd : const arr = [ 'T' , 'U , 'A', 'N']
     arr.splice(0,0) // kq : arrNew =['U','A' , 'N']
    12. slice() 'lát cắt' : cắt một phần của mảng thành một mảng mới



*/
var arr = [
     'java',
     'js',
     'ruby',
     'c#',
     'php'    
];
console.log(arr);
//1
let length= arr.length
console.log(length)
//2
convert = arr;
console.log(convert.toString());
//3
let popFun = arr;
console.log(popFun.pop())
//4
let shiftFun = arr;
console.log(shiftFun.shift());
//5 
let joinFun = arr;
console.log(joinFun.join('-'))
//6 
let unShiftFun = arr;
console.log('output độ dài của mảng sau khi them :',unShiftFun.unshift('nodeJs','nextJs'))
console.log(unShiftFun);
//7 
let concatFun = ['html' , 'css']
console.log(arr.concat(concatFun));
//8
let flatFun = [ 
              [1,2],
              [3,4],
              [5,6]              
               ]
console.log(flatFun.flat())
//9 
let sliceFun = arr;
console.log(sliceFun.slice(3));
//10
console.log(arr);
//them ptu vao vitri bat ki
console.log(arr.splice(1,0,'sql','mogiDB'))
console.log(arr)
//thay đổi q phần tử khi biết chỉ mục (2 cách)
arr[2] = 'mongoDB';
console.log(arr)
//xoa phan tu 'next js' trong mảng arr
console.log(arr.splice(3,1));//in ra ptu bị xóa
// chỉ mục 1 : con trỏ bắt đầu đứng ở vitri đầu ptu thứ 3
//chỉ mục 2 : so ptu xóa (cụ thể là 1)

//const flags = [] !== !!!!![];
//console.log(flag);
