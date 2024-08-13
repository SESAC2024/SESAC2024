let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]); // 데이터 개수 N
let counter = new Array(10001).fill(0); // 0부터 10000까지의 값에 대해서 등장 횟수
// 값이 0이라는 말은 처음 상황에서는 모든 수가 등장 횟수가 0이라는 의미

for (let i = 1; i <= n; i++) {
    // 각 데이터는 한 줄에 하나씩
    let data = Number(input[i]);
    counter[data] += 1; // data라는 수가 1회 등장했다는 걸 알려줌
}

// 0부터 10000까지의 인덱스를 하나씩 확인하며
let answer = "";
for (let i = 0; i < 10001; i++) {
    if (counter[i] >= 1) {
        // 1번 이상 등장한 수라면
        for (let j = 0; j < counter[i]; j++) {
            // 그 등장 횟수만큼 출력
            answer += i + "\n";
        }
    }
}
console.log(answer);
