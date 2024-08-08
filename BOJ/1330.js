// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

// 1 2
// fs.readFileSync("input.txt").toString(): "1 2"
// fs.readFileSync("input.txt").toString().split(" "): ["1", "2"]

// input: ["1", "2"]

let [a, b] = input.map(Number);

if (a > b) {
    console.log(">");
}
else if (a < b) {
    console.log("<");
}
else {
    console.log("==");
}

