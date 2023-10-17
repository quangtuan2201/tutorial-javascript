/*
  Keyword this
  1. Trong một pt đối tượng , this đề vập đến đối tượng
  2. Khi một mình , this đề cập đến đối tượng toàn cầu
  3. Trong một hàm ở chế độ nghiêm ngặt this laf undefined 
  4. Trong một sụ kiện ,this đề cập đến ptu đã nhận sự kiện
node : this k phai là một biến mà lag một từ khoá
*/ 
//1 this trong 1 thuộc tính(fuction) trong object
const obj = {
    firstName : 'Nguyen',
    lastName : 'Tuan Anh',
    fullName : function() {
        return this.firstName + this.lastName

    }

}
// obj.fullName = 'Nguyen Tuan Anh'
//2
let x = this //vì this đang chạy trong phạm vi toàn cầu , trong cửa sổ trình duyệt đối tượng chung là obj window  là đối tượng toàn cầu (object Window)

//3
'use trict'
function myFun() {

    return this;
}
//kq : undefined
//4
<button onclick="this.style.display='none'">Click to Remove Me!</button>