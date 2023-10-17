/* Thao tác với mảng 
   1. length()
   2. slice(start , end) => cắt chuỗi, start : điểm bắt đầu, end : điểm kết thúc 
   3. substring( start , end ) => cắt chuỗi 
   tham số thứ hai quyết định chiều dài cũả phần đc trích xuất,nó chỉ thay đổi cụm giuống đầu tiên trong chuối
   4. substr( start , length )
   5  replace() //thay thế 1 giá trị trong chuỗi
   6. replaceAll() ==> thay đổi tất cả 
   7. toUpperCase()
   8. toLowerCase()
   10. concat()
   11. trim()
   12. trimStart()
   13. trimEnd()
   14. padStart()
   15. split()

*/

var str = "nguyentuananh";
console.log(str.length);

//trim()
var str2 = str.trim();
console.log(str2);
//1
console.log(str.length);
//2
console.log(str.slice(0,6));
//3
console.log(str.substring(7,5));
//4
console.log(str.replace('anh','tuan'))
console.log(str.replace(/NGUYEN/i,'nguyenxuan')) //thêm /mystr/i : để phân biệt dc cả chữ hoa hay là chữ thương k bị ảnh hưởng
//charAt ; inra giá trị index truyền vào
console.log(str.charAt(0) , str.charAt[0])
//split : chuyển đổi thành mảng từ 1 chuỗi
console.log(str.split(""))


