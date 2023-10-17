// Hàm (function) trong js
/*
1. Hàm
  - Một khối mã
  - Làm một việc cụ thể
2. Loại hàm
  - Built-in (hàm có sẵn)
  - tự định nghĩa

3. Tính chất
  - không thực thi khi định nghĩa
  - sẽ thực thi khi đươcj gọi
  - có thể trả về 1 giá trị
4.Tham số trong hàm
  - đối tương arguments
5. các loại function
  - Declaration function
  - Expresstion function
  - Arow function
*/
//1.
//2.tự định nghĩa
function name(name) {
     console.log('fun nam !')
     //  alert(`full name ${name}`);
     return name;
}
var name = name('quang tuan');
console.log(name)

// đối tượng argumants(arguments là một arr)
function funParam() {
     var fullName = ' ';
     for (var name of arguments) {
          fullName += `${name} - `;
     }
     console.log(fullName);

}

funParam('nguyen', 'tuan', 'anh')
//5
// Declaration fun là một fun 
function showMessage() {
     console.log('Declaration fun')

}
// Expresstion fun
var showMesage = function () {
     console.log("Expresstion fun")
}


