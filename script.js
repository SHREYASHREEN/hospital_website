let token = 1;

function bookToken(){

let name = document.getElementById("name").value;
let dept = document.getElementById("dept").value;

if(name === ""){
alert("Please enter patient name");
return;
}

document.getElementById("result").innerHTML =
"✅ Token " + token + " booked for " + name + " in " + dept + " department.";

token++;

}