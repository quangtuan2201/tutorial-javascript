/* 
1. forEach(function(value,key): lap lai tat ca cac phan tu
2. every((value,key)=>{}) : kq trả ve la một giá trị là boolean , lao lại tât cả giá trị   
                          tất cả phần tử nếu có giá trị sai return false
3. some((value,key)=>{}) : kiểm tra dừng lại khi thấy 1 điều kiện đúng
4.find((value,key)=>{}) : trả về ptu can tim dau tien thay , k tim thấy trả về null hoạc undefind 
5.filter((value,key)=>{}) : trả ve list cac doi tuong tim thay,k tim thay tra ve undefied
6.map((value,key)=>{}) : trả về một mảng từ function trả về
7.reduce()

*/
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
//1 forEach
for (let item of courese) {
  //console.log(item.id ,item.name , item.coin)
}
courese.forEach(function (value, key) {
  //console.log(key,value)
})
//2 everry
const everyFun = courese.every((value, key) => {
  //console.log(key)
  return value.coin === 0;
});
//console.log(everyFun) //kq false ,(id=2 )

//3 some
const someFun = courese.some((value, key) => {
  //console.log(key);
  return value.coin === 200;//kq : true (id=2)
})
console.log(someFun)

//4 find
const findFun = courese.find((value, key) => {
  //console.log(key);
  return value.name === 'css'; //kq : ptu co index=2

})
//console.log(findFun);

// 5. filter

const filterFun = courese.filter((value, key) => {
  //console.log(key);
  return value === 'css';


})
console.log(filterFun)

//6 map()
const mapFun = courese.map((value, key) => {
  return {
    id: value.id,
    name: `Khóa học ${value.name}`,
    coin: value.coin
  }
})
console.log(mapFun)

//7 reduce




