// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// input: ["5", "1 1", "12 34", "5 500", "40 60", "1000 1000"]

let testCases = Number(input[0]);
let answer = "";

for (let i = 1; i < testCases + 1; i++) {
    let [a, b] = input[i].split(" ").map(Number);
    answer += String(a + b + "\n");
}

console.log(answer);
