/* 
Math.random : luôn trả về 1 số ngẫu nhiên nhỏ hơn 1
*/
// Returns a random integer from 0 to 9:
var x= Math.floor(Math.random() * 10);
var y =Math.random()* 10;
//console.log(y)
 
// luôn trả về số ngẫu nhiên trong khoảng pham vi =min và >max
function getRndInteger1(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
//console.log(getRndInteger1(1,4))

//Luôn trả về 1 số nguyên ngẫu nhiên trong phạm vi =min đến = max
function getRndInteger2(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(getRndInteger2(1,4))