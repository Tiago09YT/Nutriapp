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
    document.getElementById("w5").style.height="100%";
    document.getElementById("w5").style.cursor="pointer";
}
function pestania2() {
    document.getElementById("img1").style.height="0px";
    document.getElementById("img2").style.height="93vh";
    document.getElementById("img3").style.height="0px";
    document.getElementById("img4").style.height="0px";
    document.getElementById("img5").style.height="0px";
    document.getElementById("w5").style.height="0px";
    document.getElementById("w5").style.cursor="";
}
function pestania4() {
    document.getElementById("img1").style.height="0px";
    document.getElementById("img2").style.height="0px";
    document.getElementById("img3").style.height="93vh";
    document.getElementById("img4").style.height="0px";
    document.getElementById("img5").style.height="0px";
    document.getElementById("w5").style.height="0px";
    document.getElementById("w5").style.cursor="";
}
function pestania3() {
    document.getElementById("img1").style.height="0px";
    document.getElementById("img2").style.height="0px";
    document.getElementById("img3").style.height="0px";
    document.getElementById("img4").style.height="93vh";
    document.getElementById("img5").style.height="0px";
    document.getElementById("w5").style.height="0px";
    document.getElementById("w5").style.cursor="";
}
function pestania5() {
    document.getElementById("img1").style.height="0px";
    document.getElementById("img2").style.height="0px";
    document.getElementById("img3").style.height="0px";
    document.getElementById("img4").style.height="0px";
    document.getElementById("img5").style.height="93vh";
    document.getElementById("w5").style.height="0px";
    document.getElementById("w5").style.cursor="";

}
button1.onclick = pestania1;
button2.onclick = pestania2;
button3.onclick = pestania3;
button4.onclick = pestania4;
button5.onclick = pestania5;
button6.onclick = pestania1;
