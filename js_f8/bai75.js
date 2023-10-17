/*
 ClassList property
 1. add // them mot atribute class vài element
 2. contains .// trả về true class có trong elemnet hay k
 3. remove // xoá class trong element
 4. toggle  // ktra có thuộc tính class đó hay k nếu có sẽ xoá bỏ,neu khong co se thêm class vào



*/
var boxElement = document.querySelector(".box");
console.log(boxElement.classList);
//1
boxElement.classList.add('red','blue');
//2
var testContains = boxElement.classList.contains("blue");
console.log(testContains);//true
//3
var testRemove = boxElement.classList.remove("blue")
console.log(testRemove);
//4
var testToggle = boxElement.classList.toggle("red");
console.log(testToggle)


setInterval(()=>{
boxElement.classList.toggle("red");
     
},1000)
