var sharedObject = CreateSharedObject();

var testString = "sdsadsad";

//function GetSharedHTML(){
//    var sh = document.getElementById("shared");
//    fetch('shared.html')
//    .then(response => response.text())
//    .then(res => sh.innerHTML = res);

//}    

function CreateSharedObject(){

    var result = document.createElement('div');
    var hd = document.createElement('h1');
    hd.innerHTML = "Shared heading";
    hd.setAttribute("style", "font-family: Arial, Helvetica, sans-serif;" );
    result.appendChild(hd);
    var tx = document.createElement('div');
    tx.innerHTML = "This text appears in all pages.";
    tx.setAttribute("style", "font-family: Arial, Helvetica, sans-serif;" );

    result.appendChild(tx);

    return result;
}    

//document.getElementById("shared").appendChild(sharedObject);
var sh = document.getElementById("shobject");
//document.getElementById("shared").appendChild(sh);
