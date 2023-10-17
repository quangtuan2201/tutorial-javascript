var users = [
     {
          id:1,
          name:'quang tuan'
     },
     {
          id:2,
          name:'son dang'
     },
     {
          id:3,
          name:'Le dam'
     },

];
var comments = [
     {
          id:1,
          user_id:1,
          content:'Bao gio ra video the anh oi !'
     },
     {
          id:2,
          user_id:2,
          content:'Anh ra roi em nhe.'
     },
     {
          id:3,
          user_id:1,
          content:'Cam on anh !',
     }
     
]
// --------------------------------
/* 1.Lấy coment
   2. Từ comment lấy ra userID
   3. từ userId lấy ra user    
*/ 

function getComments() {
     return new Promise((resolve)=>{
          setTimeout(()=>{
               resolve(comments);
          },1000)
     })
}
function getUsers(userIds) {
     return new Promise((resolve)=>{
        var  result = users.filter(user=>{
          return userIds.includes(user.id);
        })
        resolve(result);
     },1000)
}
getComments()
           .then((comments)=>{
                 var userIds = comments.map((id)=>{  
                    return id.user_id;
                 })
                 console.log(userIds);
          
                 return getUsers(userIds)
                    .then((users)=>{
                       console.log('user:',users);
                       return {
                         users:users,
                         comments:comments
                       };
                    });
            })
            .then(data=>{
               console.log('data:',data)
               var html ="", cmt_block = document.getElementById("cmt_block");
               data.comments.forEach(comment=>{
                    var user = data.users.find(user=>user.id===comment.user_id);
                    console.log(user)
                    html+=`<li>${user.name}:${comment.content}</li>`;
                    console.log('html:',html)
               });
               cmt_block.innerHTML=html;
               //cmt_block.innerHTML="hello"
            });
var elment = document.getElementById('name');
elment.innerHTML= html;