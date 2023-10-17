[
     {
       id : 1,
       name :'js',
       coin :0
     },
      
      {
       id : 2,
       name :'html',
       coin :0
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
      
      {
       id : 6,
       name :'java',
       coin :500
     }
]
console.log('filter')
const filterFun = courese.filter((value, key) => {
     //console.log(key);
     return value.coin === 0;
   
   
   })
   console.log(filterFun)