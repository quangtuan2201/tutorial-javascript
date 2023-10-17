var courese = ['js','php','ruby'];
console.log("hello");
Array.prototype.map2 = function(callback) {
 lengtArr = this.length,output=[];
 for(let i = 0; i < lengtArr; i++){
     var result = callback(this[i],i)
     output.push(result);

 }
 return output;

}

function myFun(value,index) {

     return `<h2>${value}<h2>`;
}

var result2 = courese.map2(myFun);
console.log(result2)
console.log(Array.prototype);