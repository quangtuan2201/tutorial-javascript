const courese =
  [
    {
      id: 1,
      name: 'js',
      coin: 0
    },

    {
      id: 2,
      name: 'html',
      coin: 0
    },

    {
      id: 3,
      name: 'css',
      coin: 200
    },

    {
      id: 4,
      name: 'type script',
      coin: 200
    },
    {
      id: 5,
      name: 'css',
      coin: 30
    },

    {
      id: 6,
      name: 'java',
      coin: 500
    }
  ]

//   const findFun = courese.find((value,key)=>{
//      //console.log(key);
//      return value.name === 'css'; //kq : ptu co index=2
     
//      })
//      console.log(findFun)
console.log('find')
Array.prototype.find2 = function(callback) {
     if(typeof callback === 'function'){
          let lengths = this.length;
          for(let i =0 ; lengths ; i++){
               var result = callback(this[i],i);
               //console.log(this[i])
              if(result === true){
               return this[i];
              }
          }
          return 'khong tim thay';
     }
}

const findFun = courese.find2((value , key)=>{
    return value.coin === 0 ;

})
console.log(findFun)