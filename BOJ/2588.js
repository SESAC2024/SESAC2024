// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 472
// 385

// fs.readFileSync("input.txt").toString(): "472\n385"
// fs.readFileSync("input.txt").toString().split("\n"): ["472", "385"]

// input.map(Number): [472, 385]
let [x, y] = input.map(Number);

// Number() 함수는 문자열 같은 걸 수로 바꿔줌. Number("472") => 472

let first = y % 10;
console.log(first * x);
let second = parseInt(y / 10) % 10;
console.log(second * x);
let third = parseInt(y / 100);
console.log(third * x);
console.log(x * y);
