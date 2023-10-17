/*
Regrex :Biểu thức chính quy là một chuỗi các ký tự tạo thành một mẫu tìm kiếm.
syntax : /pattern/modifiers;
vd : //w3schools/i;
  Modifier    Mô tả 
   i : Bỏ phân biệt chữ hoa thường hay hoa
   g : Tìm tất cả thay vì dừng lại sau khi tìm thấy vị trí đầu tiên
   m : Thực hiện khớp nhiều dòng
Mẫu biểu thức chính quy
 [abc] : tìm bất kỳ kí từj nào trong dấu ngoặc
 [0-9] : tìm bất kỳ số nào trog dấu ngoặc
 [x|y] : Tìm bất kỳ lựa chọn thay thế nào được phân tách bằng |
Ký tự
 \d : tìm kiếm một chuỗi số
 \s : tìm kiếm một kí tự
 \b : Tìm kết quả khớp ở đầu một từ như thế này: \bWORD hoặc ở cuối một từ như thế này: WORD\b
\uxxxx : Tìm ký tự Unicode được chỉ định bởi số thập lục phân xxxx
Quantifiers xác định số lượng:
  n+ : Khớp với bất kỳ chuỗi nào chứa ít nhất một n
  n* : Khớp với bất kỳ chuỗi nào chứa 0 hoặc nhiều lần xuất hiện của n
  n? : Khớp với bất kỳ chuỗi nào chứa 0 hoặc một lần xuất hiện của n
  SD method RegExp.test() : tìm kiếm một chuỗi trả về true hoặc false 
*/ 
//vd 
const pattern = '/e/';
pattern.test("the best things in life are free");