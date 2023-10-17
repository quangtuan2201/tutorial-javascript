/*oán tử ??(nullish)

Toán tử ?? trong JavaScript được gọi là "nullish coalescing operator" (toán tử hợp nhất nullish) và được sử dụng để kiểm tra 
nếu giá trị bên trái của nó là null hoặc undefined, thì nó sẽ trả về giá trị bên phải, 
ngược lại thì nó sẽ trả về giá trị bên trái. Đây là một cách tiện lợi để gán một giá trị mặc
 định cho một biến hoặc thuộc tính nếu nó không tồn tại hoặc bằng null hoặc undefined.

*/
const value1 = null;
const value2 = undefined;
const value3 = 'Hello';

const result1 = value1 ?? 'Default Value'; // 'Default Value', vì value1 là null
const result2 = value2 ?? 'Default Value'; // 'Default Value', vì value2 là undefined
const result3 = value3 ?? 'Default Value'; // 'Hello', vì value3 không phải là null hoặc undefined

console.log(result1);
console.log(result2);
console.log(result3);
/*Toán tử ?. trong JavaScript được gọi là "optional chaining operator" (toán tử xác định tùy chọn)
 và được sử dụng để tránh lỗi khi truy cập các thuộc tính hoặc phương thức của một đối tượng khi 
 đối tượng có thể là null hoặc undefined. Toán tử này kiểm tra xem đối tượng bên trái của nó có tồn tại (không phải null hoặc undefined) 
 trước khi truy cập thuộc tính hoặc phương thức bên phải của nó.*/
const person = {
  name: 'John',
  address: {
    street: '123 Main St',
    city: 'New York'
  }
};

// Truy cập thuộc tính có sẵn trong đối tượng
const name = person?.name; // 'John'
const street = person?.address?.street; // '123 Main St'

// Truy cập thuộc tính không có sẵn trong đối tượng
const phone = person?.phone; // undefined, không gây lỗi

console.log(name);
console.log(street);
console.log(phone);
