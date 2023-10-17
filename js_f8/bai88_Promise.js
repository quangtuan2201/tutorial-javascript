/* Promise
- Sync
- Async
- Nỗi đau
- Lý thuyết 
- thực hành , ví dụ

*/ 
// Sync , Async
/* setTiemout , setInterval , fetch , XMLHttpResquest , file Reading 
   resquest animation frame
   //callback 

*/
//vd cái nào in ra trc
/*Node PV : Promise là gì ? yes
- là một kahi niệm xly bất đồng bộ
- trc khi có promise thì chúng ta xử lý bằng call back 
(callback thì xảy ra một vấn đề đó là call back hell (gọi lại chết tiệt) nó bị show vào rất khó
nhìn gây khó hiểu 
-  Promise sinh ra trong phiên bản ES6 để cải khắc phục tình trạng đó
- Để tạo ra một promise sử dụng từ khóa 'new' với từ khóa 'Promise',ở trong contructor của nó
truyền vào một function callback(thường gọi là excutor function) nó nhận vào 2 tham số dạng function
  (+ resolve : gọi nó khi login xl thành công
   + reject : thất bại
    )
- Khi sd promise đối tượng promise đc tạo ra , sd qua các phương thức .then , .catch
- ".then", ".catch" : nhận tham số callback func ,.then sẽ đc thực thi khi thằng
resole trả về , và ".catch": sẽ đc thực thi khi thằng reject trả về




*/ 
// setTimeout(()=>{console.log("1")},1000);
// console.log(2) //kq 2,1
var myPromise = new Promise((resolve , reject)=>{
    //logic
    //thành công : resolve
    //thất bại : reject
    //Fake call API
    
   //  resolve([{
   //    id: 1,
   //    name : "javascript"
   //  }])// resolve : trả về một arr các ptu obj khóa học
    //reject("That bai !")
});
myPromise
.then((khoaHoc)=>{
   console.log("khoa học: ",khoaHoc)
})
.catch((error)=>{
   console.log(error)
})
.finally(()=>{console.log("Done!")})
//console.log("Promise prototype",Promise.prototype)