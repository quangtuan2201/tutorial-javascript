//forEach
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
// forEach
  // const forEachFun = courese.forEach((value,key)=>{
  //    console.log(key , value)

  // })
console.log('forEach')
Array.prototype.forEach2 = function (callback) {
  let lengths = this.length;
  var arr = [];
  for(let index in this) {
    if(this.hasOwnProperty(index)){
      var result = callback(this[index], index, this);
      arr.push(result);
    }

 }
}

const forEachFun1 = courese.forEach2((value, key, arr) => {
   console.log(value);
  return value ;
});



