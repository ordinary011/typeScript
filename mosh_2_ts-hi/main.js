"use strict";
// class Point {
exports.__esModule = true;
// 	constructor(private x?: number, private y?: number) {}
// 	draw() {
// 		console.log(`x: ${this.x}, y: ${this.y}`);
//     }
//     getX(){
//         return this.x;
//     }
//     setX(val){
//         if(val < 0) throw new Error('val < 0')
//         this.x = val;
//     }
// }
// let obj = new Point(5, 6);
// obj.draw();
// console.log(obj.getX())
// console.log('_____________')
// obj.setX(10);
// console.log(obj.getX());
// class Point {
// 	constructor(private _x?: number, private _y?: number) {}
// 	draw() {
// 		console.log(`x: ${this._x}, y: ${this._y}`);
//     }
//     get x(){
//         return this._x;
//     }
//     set x(val){
//         if(val < 0) throw new Error('val < 0')
//         this._x = val;
//     }
// }
// let obj = new Point(5, 6);
// obj.draw();
// console.log(obj.x);
// obj.x = 22;
// obj.draw();
var point_1 = require("./point");
var obj = new point_1.Point(5, 6);
obj.draw();
