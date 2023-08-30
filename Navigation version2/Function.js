let button= document.getElementById("logo")
let navigation = document.querySelector(".navigation")
let btncross = document.getElementById("cross")
// add show icon 

let sidebar=document.getElementById("sidebar");


console.log(navigation);
button .onclick = () =>{
    navigation.style.display ="block"
}

btncross .onclick = () =>{
    navigation.style.display ="none"
    sidebar.style.display="flex";
    
}



// new change

function handleMediaChange(mediaQuery) {
    if (mediaQuery.matches) {
        navigation.style.display ="none"
        sidebar.style.display="flex";
    } else {
        navigation.style.display ="flex"
        sidebar.style.display="none";
    }
  }
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  
   handleMediaChange(mediaQuery);
   mediaQuery.addEventListener("change", handleMediaChange);
  
   window.addEventListener("resize", () => {
    handleMediaChange(mediaQuery);
  });
  


//   show navigation

sidebar.addEventListener("click",()=>{
    navigation.style.display ="block"
    sidebar.style.display="none";
})

 
