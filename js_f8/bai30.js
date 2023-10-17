/*
Polyfill () : Polyfills la gì - "Polyfill là một đoạn mã (thường là JavaScript trên Web) được sử dụng để cung cấp 
chức năng hiện đại trên các trình duyệt cũ hơn vốn không hỗ trợ nó


*/
if (!Array.prototype.includes) {
     Array.prototype.includes = function includes(searchElement) {
       return this.indexOf(searchElement) !== -1
     }
   }
/*Đó là cách viết một polyfill khi trình duyệt không hỗ trợ method includes(). 
Chú ý, khi dùng if có nghĩa là nếu chức năng này chưa tồn tại thì có thể sử dụng cái mà tôi viết. 
CÒn nếu mà nó tồn tại rồi, thì sẽ không đi vào phần mà tôi viết. Chú ý !Array.prototype.includes có dấu chấm than (!) nhé.*/