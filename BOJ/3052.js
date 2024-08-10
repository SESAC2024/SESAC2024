// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

arr = [];
// 원소가 10개 들어올 때, 각각 42로 나눈 나머지를 집합(set)에 삽입
for (let i = 0; i < 10; i++) {
    arr.push(input[i] % 42);
}

// 집합의 원소 개수를 출력
let mySet = new Set(arr);
console.log(mySet.size);
