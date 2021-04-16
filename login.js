let usr = document.getElementById("usr");
let pass = document.getElementById("pass");
let submt = document.getElementById("submt");



submt.addEventListener('click', Redirect,true);

function Redirect(){
    const username = usr.value;
    const password = pass.value;  
   
    if (username === "admin" && password === "12345") {
        // alert("You have successfully logged in.");
       
        window.location = "main.html";
        document.getElementsByTagName ('html') [0] .remove ();
        // var sn = document.getElementById("snackbar");
        // sn.className = "show";
        // setTimeout(function(){ sn.className = sn.className.replace("show", ""); }, 5000);
         } 
    else {
         alert("Wrong user credentials (Hint - admin, 12345)");
        
    }
}