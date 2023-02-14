function vis()
{
    document.getElementById("a").removeAttribute("type")
    document.getElementById("b").setAttribute("src","./eyesmonkey.png")
}
function hid()
{
    document.getElementById("b").setAttribute("src","./hidemonkey.png")
    document.getElementById("a").setAttribute("type","password")
}
function auth()
{
    var password="123"
    var email="thabbu@123"
    var userpass=document.getElementById("a").value
    var useremail=document.getElementById("email").value
    if (useremail==email && userpass==password)
    {
        document.getElementById("bg").style.backgroundImage="linear-gradient(95deg, rgb(255,17,120), rgb(152,33,195)"
        document.getElementById("good").setAttribute("action","digitalclock.html")
        document.getElementById("login").setAttribute("type","submit")
        document.getElementById("result").innerHTML=""
    }
    else if(useremail!=email && userpass==password)
    {
        document.getElementById("email").style.borderColor="red"
        document.getElementById("result").innerHTML="Enter the wrong email"
    }
    else if(useremail==email && userpass!=password)
    {
        document.getElementById("email").style.borderColor="royalblue"
        document.getElementById("cont").style.borderColor="red"
        document.getElementById("result").innerHTML="Enter the wrong password"
        document.getElementById("bg").style.backgroundImage="linear-gradient(95deg,rgb(255,17,120),red)"
    }
    else
    {
        document.getElementById("email").style.borderColor="red"
        document.getElementById("cont").style.borderColor="red"
        document.getElementById("result").innerHTML="Entered the wrong email and password"
    }
}