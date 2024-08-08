// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let n = Number(input[0]);

for (let i = 1; i <= 9; i++) {
    // console.log(n, "*", i, "=", n * i);
    console.log(`${n} * ${i} = ${n * i}`);
}
