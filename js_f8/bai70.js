/*/ innerText : trả về text trong element giống như '
               khi hiện lên trình duyệt
               - nó là một thuoc tính của element node , nen sd khi 
               lay dc ra element node 
 & textContent : trả về text giống như trong element tính cả space(khoảng cách , xuống dòng)
               - nó tồn tại trên cả element node và text node
 */
var headingElement = 
document.querySelectorAll("div h1");
console.log(headingElement)
console.log("innerText",headingElement[0].innerText)
//k hieu dc the i
headingElement[0].innerText=
`<i>New Heading



</i>`
//set innertext nó sẽ hiểu khi xuống dòng thành thẻ <br>

console.log('contentText:',headingElement[1].textContent)
headingElement[1].textContent=`        



Text Content`;
//innerHTML
//headingElement[1].innerHTML="<i>New Heading</i>"//hiểu đc những thẻ html