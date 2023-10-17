/*
1.Promise resolve : trả về giatri
2.Promise Reject : trả về lôi xử lý
3.Promise All([param]) :
                   param : đối số là một mảng 
                   xử lý 2 func cùng một lúc
*/ 
//1 promise.resolve(param)
console.log("Promise method (resolve,reject,all)")
const result1 = Promise.resolve([{id:1,name : "Tuấn Anh"}]);
result1.then((result1)=>{
     console.log(result1[0].id,result1[0].name); //kq : 1 'tuan anh'
})

//2 Promise.reject(param)
const result2 = Promise.reject("message");
result2
        .catch((err)=>{
             console.log("Succfully!",err)//kq succfully message 
        })

//3 Promise.all([param])
var promise1 = new Promise((resolve)=>{
     setTimeout(()=>{
          resolve([1]);
     })

})
var promise2 = new Promise((resolve)=>{
     setTimeout(()=>{
          resolve([2,3])
     })
})


Promise.all([promise1,promise2])
          .then((result)=>{
               console.log(result[0].concat(result[1]));//kq : [1,2,3]
          })