/**
 Strin Search method
       1. indexOf() :Phương thức trả về chỉ mục (position) Sự xuất hiện đầu tiên của một chuỗi trong một chuỗi:indexOf(), 
          trả về -1 nếu k tìm thấy
       2. lastIndex(para1,para2) :
           para1 : truyèn một chuỗi
           para2 : bắt đầu tìm kiếm từ vị trí bnhiue
       3. Search() : trả về vị trí của chuõi cần tìm
       4. match()
       5. mathchAll()
       6. includes(param1,param2) :
          param1 : chuỗi cần tìm
          param2 : vị trí bắt đầu tìm
           trả về true nếu tìm thấy chuỗi, 
           phân biệt chữ hoa chữ thương
       7. startWith()
       8. endsWith 
 */
//1
let text1 = "Please locate where 'locate' occurs!";
let index1 = text1.indexOf("locate");
//2
let text2 = "Please locate where 'locate' occurs!";
let index2 = text2.lastIndexOf("locate");
//indexOd(),LastIndexOf() cả 2 trả về -1 nếu k tìm thấy
//3
let text3 = "Please locate where 'locate' occurs!";
text3.search("locate");
// includes(para1,para2) 
let text4 = "Hello world, welcome to the universe.";
text4.includes("world", 12);

