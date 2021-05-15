"use strict";
const random = Math.floor(Math.random() * 15) + 1;
const cellNodeList = document.querySelectorAll(".cell");
const it = cellNodeList[random].setAttribute("id", "it");
const grid = document.querySelector(".grid");

grid.addEventListener("click", function sewerClown(event) {
    const green = () => event.target.style.background = "green";
    const red = () => event.target.style.background = "red";
    const black = () => document.body.style.background = "black";
    const remove = () => this.removeEventListener("click", sewerClown);
    const holyTrinity = () => red() && black() && remove();
    
    event.target.id == "it" ? holyTrinity() : green();
});

