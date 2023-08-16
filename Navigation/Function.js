let button= document.getElementById("logo")
let navigation = document.querySelector(".navigation")
let btncross = document.getElementById("cross")
console.log(navigation);
button .onclick = () =>{
    navigation.style.display ="block"
}

btncross .onclick = () =>{
    navigation.style.display ="none"
}