"use strict";
const random = Math.floor(Math.random() * 15) + 1;
const cellNodeList = document.querySelectorAll(".cell");
const it = cellNodeList[random].setAttribute("id", "it");
const grid = document.querySelector(".grid");

grid.addEventListener("click", function sewerClown(event) {
    const red = () => event.target.style.background = "#C44536";
    const redder = () => event.target.style.background = "#772E25";
    const background = () => document.body.style.background = "#283D3B";
    const remove = () => this.removeEventListener("click", sewerClown);
    const holyTrinity = () => redder() && background() && remove();
    
    event.target.id == "it" ? holyTrinity() : red();
});

