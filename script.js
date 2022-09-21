const button = document.querySelector(".share_btn")
const buttonOff = document.querySelector(".phone_img")


button.addEventListener("click", () => {
    
    if (button.classList.contains("active")) {
        button.classList.remove("active")
    }
    else{
        button.classList.add("active")
    }
      
        
    

})



