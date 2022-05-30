document.querySelector("form").addEventListener("submit", myPayment);

function myPayment(){
    event.preventDefault();
    var Otp = document.querySelector("#otp").value;
    document.querySelector("h1").innerText = "Your Payment has been successfully recieved!";
    alert("Your Payment has been successfully recieved!");
    window.location.href = "header.html";

}