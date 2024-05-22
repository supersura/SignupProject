let signupbtn = document.getElementById("signupbtn")
let signinbtn = document.getElementById("signinbtn")
let namefield = document.getElementById("namefield")
let title = document.getElementById("title")

// Adding click button on signup button and signin button

signinbtn.onclick = function(){
    namefield.style.maxHeight="0";
    title.innerHTML = "Sign in"
    signupbtn.classList.add("disable")
    signinbtn.classList.remove("secondbtn")
}

signupbtn.onclick = function(){
    namefield.style.maxHeight="60px";
    title.innerHTML = "Sign up"
    signupbtn.classList.remove("secondbtn")
    signinbtn.classList.add("secondbtn")
}