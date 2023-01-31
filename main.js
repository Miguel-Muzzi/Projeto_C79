menuListArray = 
["Pizza Vegetariana",
    "Pizza de Frango",
    "Pizza Portuguesa",
    "Pizza Quatro Queixos",
    "Pizza de Calabresa",
    "Pizza Extravaganza"
];

function getMenu(){
var htmldata = "";
 menuListArray.sort()
 for(var i=0;1<menuListArray.length;i++){
    htmldata = htmldata+ menuListArray[i] + '<br>'
 }
 document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var imgtags= '<img id= "im1" src="images/pizzaImg.png"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata =""
for(var i=0;i<menuListArray.Length;i++){
    htmldata=htmldata+imgtags+ menuListArray[i]+ '<br>';
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;
}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}