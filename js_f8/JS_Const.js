/*
 1. Các biến được khai báo bằng keyword const k thể khai báo lại
 2. các biến được xác định bằng từ khóa const k thể đc gán lại
 3. các biến được định nghĩa với có phạm vi khối 
*/
//example
const PI = 3.141592653589793;
PI = 3.14;      // báo lỗi
PI = PI + 10;   // báo lỗi
/*/Các biến const trong JavaScript phải được gán một giá trị khi 
chúng được khai báo:*/
const pi = 3.14;
 const pi2 ;
   pi2 =3.14 //=> báo lỗi


/*
- luôn khai báo một biến với const khi bạn biết
  rằng giá trị không nên thay đổi
  vd :
     1. Một arr mới
     2. Một object mới
     3. Một function mới
     4. Một Redexp mới 

- Nó không xd giá trị k đổi , nó định nghĩa một tham chiếu (refenrence) đến một giá trị
- khai báo với const bạn k thể :
       1. Gán gtri hằng số
       2. gán lại mảng hằng số
       3. gán lại một đối tượng hằng số
- nhưng b có thể
       1.Thay đổi các ptu của mảng k đổi
       2. thay đổi thuộc tính của đối tượng hằng số 
*/
//example

// khai báo var
     var x1 =2;
     var x1 =3;
     x1=4;// output : 4    
// khai bao
     var x = 2;     // Allowed
     const x = 2;   // Not allowed
    
     {
     let x = 2;     // Allowed
     const x = 2;   // Not allowed
     }
    
     {
     const x = 2;   // Allowed
     const x = 2;   // Not allowed
     }

    //Không được phép gán lại một biến hiện có, trong cùng một phạm vi:const
    const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}