let km = document.querySelector(".text_km b")
let km_plus = document.querySelector(".text1 b")
let five = 5

let btn_plus_speed = document.querySelector("#plus_speed")
let btn_minus_speed = document.querySelector("#minus_speed")

btn_plus_speed.onclick = () => {




    let currentValue = parseInt(km_plus.innerHTML);
    km_plus.innerHTML = currentValue + 5;

    let km_minus = parseInt(km.innerHTML);
    km.innerHTML = km_minus - 10;



}

btn_minus_speed.onclick = () => {



    let currentValue = parseInt(km_plus.innerHTML);
    km_plus.innerHTML = currentValue - 5;

    let km_minus = parseInt(km.innerHTML);
    km.innerHTML = km_minus + 10;


}


let temperage = document.querySelector(".text2 b")

let btn_plus_temperage = document.querySelector("#plus_temperage")
let btn_minus_temperage = document.querySelector("#minus_temperage")


btn_plus_temperage.onclick = () => {

    let currentValue = parseInt(temperage.innerHTML);
    temperage.innerHTML = currentValue + 1;

    if (temperage.innerHTML < 21) {
        document.querySelector("#cont").textContent = " Печка";
    } else {

        document.querySelector("#cont").textContent = "Кондиционер";

    }

}


btn_minus_temperage.onclick = () => {


    let currentValue = parseInt(temperage.innerHTML);
    temperage.innerHTML = currentValue - 1;



    if (temperage.innerHTML < 19) {
        document.querySelector("#cont").textContent = " Печка";
    } else {

        document.querySelector("#cont").textContent = "Кондиционер";

    }


}


let condition = document.querySelector("#condition")


condition.onclick = () => {
    let km_minus = parseInt(km.innerHTML);
    if (km_minus > 730) {

        km.innerHTML = km_minus - 20;

    } else {
        km.innerHTML = km_minus + 20;
    }





}



let myButton = document.querySelector("#btn");

myButton.onclick = () => {



    setTimeout(() => {

        window.location.href = "./index2.html";
    }, 200)


}

let img_tesla = document.querySelectorAll(".wheels img")
let imagess = {
    one: "./wheel2.png",
    two: "./wheel1.png"
}


let h5 = document.querySelector(".text3 h5")
let btn_disk_plus = document.querySelector("#plus_disk")
let btn_disk_minus = document.querySelector("#minus_disk")

img_tesla.forEach(wheel => {

btn_disk_plus.onclick = () => {
    let currentValue = parseInt(h5.innerHTML);


    if (currentValue < 21) {
        h5.innerHTML = currentValue + 2;


    }

    wheel.src = imagess.one



}

btn_disk_minus.onclick = () => {
    let currentValue = parseInt(h5.innerHTML);

    if (currentValue > 19) {
        h5.innerHTML = currentValue - 2;
    }
    wheel.src = imagess.two

}















let img_wheel = document.querySelector(".wheels img")
let wheels = {
    one: "./wheel2.png",
    two: "./wheel1.png"
}


btn_disk_plus.onclick = () => {
    let currentValue = parseInt(h5.innerHTML);


    if (currentValue < 21) {
        h5.innerHTML = currentValue + 2;


    }

    img_wheel.src = wheels.one



}
btn_disk_minus.onclick = () => {
    let currentValue = parseInt(h5.innerHTML);

    if (currentValue > 19) {
        h5.innerHTML = currentValue - 2;
    }
    img_wheel.src = wheels.two

}




})









console.log(km, km_plus, btn_plus_speed, btn_minus_speed);