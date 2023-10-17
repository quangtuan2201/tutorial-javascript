/* 
    JS method reduce(param1,param2,param3)
    - param1 : Đối số là một function
    - param2 : giá trị khởi tạo vd 0]
    - param3 : mảng mặc định gọi method reduce()

*/ 
const courese= 
[
     {
       id : 1,
       name :'js',
       coin :0
     },
      
      {
       id : 2,
       name :'html',
       coin :1
     },
      
      {
       id : 3,
       name :'css',
       coin :200
     },
      
      {
       id : 4,
       name :'type script',
       coin :200
     },
     {
       id : 5,
       name :'css',
       coin :30
     },
     
]

function totalCoin(a,b) {
     // console.table({
     //      'gt h.tai' : a,
     //      'coin' : b.coin,
     //      'soluong':a+b.coin

     // })
     // return a+b.coin;
     

}

//tính tong coin
console.log('method reduce')
const reduceFun = courese.reduce(totalCoin,0);
//console.log(reduceFun);
const arr=[1,0,200,200,30];
const total = arr.reduce((a,b)=>{
console.table(a,b);
return a+b;
})
