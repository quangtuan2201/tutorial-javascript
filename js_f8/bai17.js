/*iểu dữ liệu js
* kiểu dữ liệu nguyên thủy primitive-data
    1. number
    2. String
    3. Boolean
    4. symbol (unique)
    5. undefined
    6, null
* kiểu dữ liệu phức tạp
    7 function
    8 object (arr)

1*/
//1
var n1 = '2';
var number2 = '3';
console.log(n1 - number2);

//2
var str = ' tuan anh'
console.log(str);

//3
var a = true;

//4
var isSymbol1 = Symbol('doc_nhat')
var isSymbol2 = Symbol('doc_nhat')
if (isSymbol1 === isSymbol2) {
     console.log("bang nhau")
} else {
     console.log("k bang nhau")
}
//5
var typeUn;
//6
var isNull = null;

//7
var myFun = function () {
     alert('hello , xin chao');
}
//8
var myObject = {
     name : 'tuan anh',
     age : 22,
     adress : 'ha noi',
     myFun : function() {

     }
};
myObject.name;
myObject[name];
//9 
var isArr = [
     'js',
     'java',
     'php',
     'html'

]