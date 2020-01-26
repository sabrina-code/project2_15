var attempt = 8; 

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Mike" && password == "Mike123"){
window.location = "./DB.html"; // Redirecting
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling 
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}