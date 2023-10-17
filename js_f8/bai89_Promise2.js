/* Một đối tượng Promise có 3 trạng thái
     1. Chờ (Pending)
     2. Hoàn thành (Fulfilled)
     3. Từ chối (Rejectted)
Đối tượng hỗ trợ 2 thuộc tính state và result
- trong khi đối tượng Promise là 'đang chờ xuwre lý (đang hoạt động)'
,kết quả không được xđ
- khi một đối tượng Promise được "Fulfilled",kq là 1 giá trị
- Khi một đối tượng Promise được "Reject" , kq là một đối tượng lôiz   
vd 
        --------------------------------------------
        myPromise.stake  |  myPromise.result
        "pending"        |  undefined
        "fulfilled"      |  Kq là một giá trị
        "rejected"       |  kq là đối tượng trị lối (mã lôiz)

node : không thể truy cập stake và result thuộc tính promise
       Phải sử dụng ".then" , ".catch" để xử lý
1.".then" : có 2 đối số , một callback cho thành công và thất bại
hoặc bạn có thể dùng nó xử lý thành công và dùng .catch để xử lý lỗi
*/ 
function sleep(ms){
     return new Promise((resolve)=>{
         setTimeout(resolve,ms);
          })
}
sleep(1000)
           .then(()=>{
          
               //console.log(1);
              // return sleep(1000);
          })
          .then(()=>{
              // console.log(2);
               
          })
          .then(()=>{
               //console.log(3);
          })