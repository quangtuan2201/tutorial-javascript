/* DOM event
      1.input/select
      2.keyup/down
      note : lấy ptu nơi sự kiện xảy ra
vd : onchang : ng dung thay doi
     oninput : thao tác input
     keyup : khi di xuống r nhấc lên
     keydown : khi nâng lên
     keypress : ngâm phím 
*/ 

var inputElement=
document.querySelectorAll('input[type=text]');
//console.log('input2',inputElement[1])
//console.log(inputElement.value="hello new")
//console.log([inputElement])
inputElement.onchange = function(e) {
    // console.log(e) // tim hieu thêm sự kiện xong console.log
     //console.log(e.target.value);

}
//2
inputElement[1].onkeyup = function(e) {
console.log(e);/// which : trả về số phím
switch(e.which){
 case 27:
     console.log("exit")
}

}