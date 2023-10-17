/*
 HTML DOM 
 1. Element : ID , Class , tagName ,
  CssSelector(querySelector,querySelectorAll) , HTML Collection
 2. Attribute
 3. Text

*/ 
//idName
document.write("Hello word");
var heading = document.getElementById("idHeading");
// console.log(heading)
// className
var HeadingNodes = document.getElementsByClassName("ClassHeading")[0]
//console.log(HeadingNodes)
// tagName
var headingNodesTagName = document.getElementsByTagName("h1");//
//console.log(headingNodeTagName)
for(let nodeItem of headingNodeTagName){
    // console.log(nodeItem);
     //console.log("length node :",headingNodeTagName.length)
}
// console.log("length node :",headingNodeTagName.length)
//html selector
var headingNodesSelector = document.querySelectorAll(".box >h1")
//console.log(headingNodesSelector)
//html collection( vd : form , a)
var inputCollection = document.forms.testForm;
//console.log(inputCollection)
//node : document.anchors => trả về tất cả thẻ a có attribute là name