function storedata()
{
    var un=document.getElementById("username").value
    localStorage.setItem("username",un)
    var ps=document.getElementById("pass").value
    localStorage.setItem("password",ps)
    var col=document.getElementById("col").value
    localStorage.setItem("color",col)
}
function outputdata()
{
    var un=localStorage.getItem("username")
    document.getElementById("username").innerHTML=un
    var pass=localStorage.getItem("password")
    document.getElementById("password").innerHTML=pass
    var col=localStorage.getItem("color")
    document.getElementById("username").style.color=col
    document.getElementById("password").style.color=col
}