/*
  Attribute & text node
  1. Element
  2. Attribute (2 cách set attribute)
Set Attribute :
      c1: element.attribute="value_String";
      c2: element.setAttribute("attributeName","value")
      cách 2 có thể set attribute k thuộc element đó
Cách get Attribute :
     element.attribute("attributeName")   (attribute phải hợp lệ với element)
     element.getAttribute("attributeName"); không cần hợp lệ
  3. Text
*/ 
var headingNode = 
document.querySelector("div h1");

/*2.Attribute*/
console.log(headingNode)
//headingNode.style.color="red";// add attribute = style.color = red
headingNode.id="heading"
//setAttribute
headingNode.setAttribute("title",'tieu de');
//getAttribute
console.log(headingNode.title);
console.log(headingNode.getAttribute('title'))





