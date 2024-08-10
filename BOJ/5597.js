// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let mySet = new Set();

// 과제를 제출한 28명의 학생을 집합 자료형(set)에 삽입
for (let i = 0; i < 28; i++) {
    mySet.add(Number(input[i]));
}

// 1번부터 30번까지 학생을 확인하며
for (let i = 1; i <= 30; i++) {
    // 특정한 학생이 과제를 제출하지 않았다면, 출력
    if (!mySet.has(i)) {
        console.log(i);
    }
}
