/*Vòng lặp loop
1. for- lặp với điều kiện đúng
2. for/in - lặp qua key của đối tượng
3. for/of - lặp qua value của đối tượng
4. while - lặp khi điều kiện đúng
5. do/while - lặp ít nhất một lần , sau đó lặp khi
điều kiện đúng

*/
1
// for( var i =0 ; i <= 1000 ; i++){
//      console.log(i)
// }

//2
var arr = [
     'js',
     'typrScript',
     'nodeJS',
     'nextJS',
     'reactJS'
];
var obj = {
     firstName: 'quang',
     lastName: 'tuan',
     age: 22,
     address: 'HN',
     sex: 'Men',
     fullName: function () {
          return this.firstName + this.lastName;
     }

}
for (var i = 0; i < arr.length; i++) {
     console.log(arr[i])
}

for (var i of obj) {
     console.log(i)
}
////////
const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
     //nsole.log(x)
     text += person.x
};

//
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
     txt += value;
}
//nsole.log(txt);


//
const cars = [1, 4, 3, 5];

let text2 = 0;
for (let x of cars) {
     console.log(x);
     text2 += x;
}
console.log(typeof text2)

//
