const courese= 
[
     {
       id : 1,
       name :'js',
       coin :1
     },
      
      {
       id : 2,
       name :'html',
       coin :0
     },
      
      {
       id : 3,
       name :'css',
       coin :0
     },
      
      {
       id : 4,
       name :'type script',
       coin :0
     },
     {
       id : 5,
       name :'css',
       coin :0
     },
     
]

Array.prototype.every2 = function(callback) {
   let lengths = this.length;
   for(let i =0 ; i<lengths ; i++){
         var result = callback(this[i],i);
         if(result === false){
        // console.log(result)
            return result;
            break;
         }
         
   }
    return true;
  

}



const everyFun = courese.every2((value,key)=>{
//console.log(value.coin)
return value.coin === 0;
})
console.log(everyFun);

