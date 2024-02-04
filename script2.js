let images = {
    white: "./whitesalon.jpg" ,
    black: "./blacksalon.png" ,
    begie: "./beigesalon.jpg" 
}

let black = document.querySelector("#black")

let white = document.querySelector("#white")

let beige = document.querySelector("#beige")


let img = document.querySelector(".boxx img")

black.onclick = () => {
    img.src = images.black
}

white.onclick = () => {
    img.src = images.white
}

beige.onclick = () => {
    img.src = images.begie
}





let myButton = document.querySelector("#btn");

myButton.onclick = () => {

    setTimeout(() => {

  window.location.href = "./index.html"; 
    } , 200)


  
}








