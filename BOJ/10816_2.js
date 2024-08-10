let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let M = Number(input[2]);
let queries = input[3].split(" ").map(Number);

let counter = {}; // 사전 자료형(map 혹은 dictionary)

// counter는 등장 횟수를 기록해주는 변수
for (let i = 0; i < N; i++) {
    if (arr[i] in counter) counter[arr[i]] += 1;
    else counter[arr[i]] = 1;
}

let answer = "";
// 하나씩 쿼리를 확인하며
for (let i = 0; i < M; i++) {
    if (queries[i] in counter) answer += counter[queries[i]] + " ";
    else answer += "0 ";
}
console.log(answer);
