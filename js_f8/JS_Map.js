/*
   - JS a Map có các cặp key-value , trong đó các khóa có thể
   là bấy kỳ kiểu dữ liệu nào
   - Map ghi nhớ thứ tự chèn ban dầu của các phím
   - Metho Map
        1. new Map() : tạo đối tương map
        2. set() : set một giá trị cho map
        3. get() : lấy giá trị element thông qua key
        4. delete() : xóa 1 phần tử thông qua key
        5. has() : trẳ về true nếu có element
        6. forEach() : Gọi hàm cho từng cặp key/value
                       trị trong Bản đồ
        7. entries() : Trả về một trình vòng lặp với các cặp 
                      [key, value] trong Bản đồ
property-> 8. size :trả về số element có trong map
        
*/
// create a Map
/*
   - JS a Map có các cặp key-value , trong đó các khóa có thể
   là bấy kỳ kiểu dữ liệu nào
   - Map ghi nhớ thứ tự chèn ban dầu của các phím
   - Metho Map
        1. new Map() : tạo đối tương map
        2. set() : set một giá trị cho map
        3. get() : lấy giá trị element thông qua key
        4. delete() : xóa 1 phần tử thông qua key
        5. has() : trẳ về true nếu có element
        6. forEach() : Gọi hàm cho từng cặp key/value
                       trị trong Bản đồ
        7. entries() : Trả về một trình vòng lặp với các cặp 
                      [key, value] trong Bản đồ
property-> 8. size :trả về số element có trong map
        
*/
const maps = new Map();
maps.set('name','tuan');
maps.set('age',22);
maps.set('phone','0971095022')
console.log(maps.size);//3
console.log('getName: ',maps.get('name'))//tuan
maps.delete('phone');//delete key=phone
console.log(maps.size);//2
console.log(maps.has('name'))// tra ve true key=name ton tai
maps.set(22,'2201');
maps.set('','String rrong')
console.log(maps.size);
maps.forEach( (value , key) => {
       //console.log(`${key} : ${value}`);
       if(key === 22){
       //console.log('key number :',key)
       }
     //  console.log(typeof maps.get(22))
});
 for(var x of maps.entries()){
     console.log('[key]:[value]: ', x )
   
 }


