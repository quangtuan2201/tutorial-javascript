/*
 JavaScript type Of
 - Trong JavaScript có 5 loại dữ liệu khác 
nhau có thể chứa các giá trị:
          1. string
          2. number
          3. boolean
          4. object 
          5. function
 - Có 6 loại đối tượng
          1. Object 
          3. Date 
          4. Array
          5. String
          6. Number
          7. Boolean
 Và 2 kiểu dữ liệu ko chữa dữ liệu
          1. null
          2. undefined

*/
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"
/**
  kiểu dũ liệu của NaN là : number
  kiểu dữ liệu của mảng là : object
  kiểu dữ liệu của Date : object
  kiểu dữ liệu cua null : object
  kiểu dữ liệu của một biến k xd : undefined
  kiểu dữ liệu k đc gán gtri là : undefined
  */

/* Kiểu dữ liệu nguyên thủy
 1. string
 2. number
 3. boolean
 4. underfined

*/
typeof "John"              // Returns "string"
typeof 3.14                // Returns "number"
typeof true                // Returns "boolean"
typeof false               // Returns "boolean"
typeof x                   // Returns "undefined" (if x has no value)
/*
kiểu dữ liệu phức tạp 
 1. function
 2. object
*/
"John".constructor                // Returns function String()  {[native code]}
(3.14).constructor                // Returns function Number()  {[native code]}
false.constructor                 // Returns function Boolean() {[native code]}
[1,2,3,4].constructor             // Returns function Array()   {[native code]}
{name:'John',age:34}.constructor  // Returns function Object()  {[native code]}
new Date().constructor            // Returns function Date()    {[native code]}
function () {}.constructor        // Returns function Function(){[native code]}

Object.keys