var cartData = JSON.parse(localStorage.getItem("cart"))||[];
    console.log(cartData);
    var total = cartData.reduce(function(sum,ele,ind,arr){
        return sum+Number(ele.price);
    },0)
    console.log(total);
    var  length = cartData.length;
    console.log(length);
    document.querySelector("p").innerText = "You have "+" "+length+" " +"Items"+"  "+"Total Price Rs "+" "+total;

    cartData.map(function(ele,ind){
     var box = document.createElement("div");
     var image = document.createElement("img");
     image.style.height = "250px";
     image.style.width = "300px";
     image.style.marginLeft = "20px";
     image.style.borderRadius = "15px";
     image.src  = ele.imgUrl; 

     var name = document.createElement("p");
     name.style.marginLeft = "20px";
     name.innerText = ele.name;
     var  disp = document.createElement("div");

     var price = document.createElement("h3");
     price.style.marginLeft = "20px";
     price.innerText = ele.price;
     var btn = document.createElement("button");
     btn.style.width = "100px";
     btn.style.fontSize = "20px"
     btn.style.height = "35px";
     btn.style.marginTop = "10px";
     btn.style.cursor = "pointer";
     btn.innerText = "Remove";
     btn.addEventListener("click", function(){
         removeItem(ele,ind);
     })
     disp.append(price,btn);
     disp.style.display = "flex";
     disp.style.gap = "160px"

     box.append(image,name,disp);
     document.querySelector("#container").append(box);

     });
    function removeItem(ele,ind){
        console.log(ele,ind);
        cartData.splice(ind,1);
        localStorage.setItem("cart",JSON.stringify(cartData));
        window.location.reload();
    }