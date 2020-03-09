// enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3};

// =================================================

// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c')
// let alternativeWay = (message as string).endsWith('c')

// =================================================

// interface Point {
// 	_x: number;
// 	_y: number;
// }

// let drawPoint = (point: Point) => {};

// drawPoint({
// 	_x: 1,
// 	_y: 2
// });

// =================================================

// class Point {
// 	constructor(private _x?: number, private _y?: number) {}
// 	draw() {
// 		console.log(`_x: ${this._x} _y: ${this._y}`);
// 	}

// 	get x() {
// 		return this._x;
// 	}

// 	set x(val) {
// 		if (val < 0) throw new Error('the value can not be less than 0');
// 		this._x = val;
// 	}
// }

// let obj = new Point(1, 2);
// let x2 = obj.x;
// obj.x = 10;
// obj.draw();

// =================================================

import {Point} from './point';

let obj = new Point(1, 2);

obj.draw();
