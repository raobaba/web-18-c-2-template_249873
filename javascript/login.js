document.querySelector("form").addEventListener("submit",loginFun);
var regdUsers = JSON.parse(localStorage.getItem("userCreds"));
//   console.log(regdUsers);


function loginFun(){
    event.preventDefault();
    var enteremail = document.querySelector("#email").value;
    var enterpass = document.querySelector("#pass").value;
  //   console.log(email,pass);
  for(var i=0;i<regdUsers.length;i++)
  {
      console.log(regdUsers[i]);
      if(regdUsers[i].email ==enteremail && regdUsers[i].password==enterpass){
          alert("Login Success");
          window.location.href = "data.html"
          break;
      }
      else{
        console.log("Login Failed");
      }
  }
}