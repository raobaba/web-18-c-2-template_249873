document.querySelector("form").addEventListener("submit",sinUpFun);
var userData = JSON.parse(localStorage.getItem("userCreds"))||[];
console.log(userData);
 function sinUpFun(){
     event.preventDefault();
     var userObj = {
          name:document.querySelector("#name").value,
          email:document.querySelector("#email").value,
          password:document.querySelector("#pass").value,
          username:document.querySelector("#user").value,
     }
   //   console.log(userObj);
     userData.push(userObj);
   //   console.log(userData)
     localStorage.setItem("userCreds",JSON.stringify(userData));
 }