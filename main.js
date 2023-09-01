let button1 = document.querySelector(".w1");
let button2 = document.querySelector(".w2");
let button3 = document.querySelector(".w3");
let button4 = document.querySelector(".w4");
let button5 = document.querySelector(".w5");
let button6 = document.querySelector(".back");

function pestania1() {
    document.getElementById("img1").style.height="93vh";
    document.getElementById("img2").style.height="0px";
    document.getElementById("img3").style.height="0px";
    document.getElementById("img4").style.height="0px";
    document.getElementById("img5").style.height="0px";
    document.getElementById("w5").style.marginLeft="0%";
    document.getElementById("w5").style.cursor="pointer";
    document.getElementById("back1").style.marginLeft="200%";
    document.getElementById("back").style.cursor="default";
}
function pestania2() {
    document.getElementById("img1").style.height="0px";
    document.getElementById("img2").style.height="93vh";
    document.getElementById("img3").style.height="0px";
    document.getElementById("img4").style.height="0px";
    document.getElementById("img5").style.height="0px";
    document.getElementById("w5").style.marginLeft="200%";
    document.getElementById("w5").style.cursor="default";
    document.getElementById("back1").style.marginLeft="200%";
    document.getElementById("back").style.cursor="default";
}
function pestania4() {
    document.getElementById("img1").style.height="0px";
    document.getElementById("img2").style.height="0px";
    document.getElementById("img3").style.height="93vh";
    document.getElementById("img4").style.height="0px";
    document.getElementById("img5").style.height="0px";
    document.getElementById("w5").style.marginLeft="200%";
    document.getElementById("w5").style.cursor="default";
    document.getElementById("back1").style.marginLeft="200%";
    document.getElementById("back").style.cursor="default";
}
function pestania3() {
    document.getElementById("img1").style.height="0px";
    document.getElementById("img2").style.height="0px";
    document.getElementById("img3").style.height="0px";
    document.getElementById("img4").style.height="93vh";
    document.getElementById("img5").style.height="0px";
    document.getElementById("w5").style.cursor="default";
    document.getElementById("w5").style.marginLeft="200%";
    document.getElementById("back1").style.marginLeft="200%";
    document.getElementById("back").style.cursor="default";
}
function pestania5() {
    document.getElementById("img1").style.height="0px";
    document.getElementById("img2").style.height="0px";
    document.getElementById("img3").style.height="0px";
    document.getElementById("img4").style.height="0px";
    document.getElementById("img5").style.height="93vh";
    document.getElementById("w5").style.marginLeft="200%";
    document.getElementById("w5").style.cursor="default";
    document.getElementById("back1").style.marginLeft="0%";
    document.getElementById("back").style.height="100%";
    document.getElementById("back").style.cursor="pointer";

}
button1.onclick = pestania1;
button2.onclick = pestania2;
button3.onclick = pestania3;
button4.onclick = pestania4;
button5.onclick = pestania5;
button6.onclick = pestania1;
