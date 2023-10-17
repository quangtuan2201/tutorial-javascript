/* DOM event*/ 

var h1E = document.querySelectorAll('h1');
// console.log(h1E[0])
for(let i=0 ; i< h1E.length; ++i){
     h1E[i].onclick = function() {
          console.log(h1E[i])
          console.log('i=',i)
         

     }

}
console.log('i khi ket thuc vong lap:',i)