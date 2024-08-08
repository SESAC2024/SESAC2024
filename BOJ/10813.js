// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// ["5 4", "1 2", "3 4", "1 4", "2 2"]
//    0       1      2      3     4

let [n, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(i);
}
// console.log(arr);

for (let i = 1; i <= m; i++) {
    let [a, b] = input[i].split(" ").map(Number);
    [arr[a - 1], arr[b - 1]] = [arr[b - 1], arr[a - 1]];
    /*
    let temp = arr[a - 1];
    arr[a - 1] = arr[b - 1];
    arr[b - 1] = temp;
    */
}

let answer = "";
for (let i = 0; i < n; i++) {
    answer += arr[i] + " ";
}
console.log(answer);
