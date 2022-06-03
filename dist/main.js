"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./circle");
function distance(circleOne, circleTwo, d) {
    let distance = Math.pow(circleOne._radius - circleTwo._radius, 2) + Math.pow(d, 2);
    return Math.sqrt(distance);
}
let circle1 = new circle_1.Circle(9);
let circle2 = new circle_1.Circle(5);
console.log(distance(circle1, circle2, 24));
