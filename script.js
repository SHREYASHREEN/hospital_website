let token = 1;

function bookToken(){

let name = document.getElementById("name").value;
let dept = document.getElementById("dept").value;

if(name === ""){
alert("Please enter patient name");
return;
}

document.getElementById("result").innerHTML =
"Token " + token + " booked for " + name + " in " + dept + " department.";

let list = document.getElementById("tokenList");

let newToken = document.createElement("li");

newToken.innerHTML = "Token " + token + " - " + name + " (" + dept + ")";

list.appendChild(newToken);

token++;

}