/**
 * - A js Set là tập hợp các giá trị duy nhất
 * - Mồi giá trị chỉ xuất hiện duy nhất trong mảng
 * - .Method Set:
       1. new Set() : khởi tạo một đối tượng Set
       2. add() : Thêm ptu mới cho Set
       3. delete() : xóa bỏ 1 ptu trong Set thong qua key
       4. has() : trả về true khi có ptu trong Set
       5. forEach() : 
       6. values() : Trả về một iterator với tất cả các giá trị trong một Set
       7. size  : trả về số lượng element trong Set
  
  
 */
// create a set;
const letters = new Set();
// add một elêmnt
letters.add(['a','b','c']);
//list all element
var text = '';
for(var item of letters){
      text +=item+' , ';
}
console.log('letters:',text) //a , b , c

//method values() trả về một độis tượng iterator mới 
//chứa tất cả giá trị trong Set
console.log(letters.values()); //objrct Set Iterator
console.log(letters)