let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);

// 0부터 N까지의 값에 대하여 방문 여부
let visited = new Array(n + 1).fill(false);
let arr = []; // 1부터 N까지의 원소가 배열에 담김
for (let i = 1; i <= n; i++) {
    arr.push(i);
}
let selected = []; // 실제로 선택된 원소

// depth: 선택한(selected) 원소의 개수이자 재귀 함수 깊이
function dfs(depth, start) {
    if (depth == m) {
        // 실질적으로 M개 선택 된 상태
        let line = "";
        for (let i = 0; i < m; i++) {
            line += selected[i] + " ";
        }
        console.log(line);
    }
    for (let i = start; i < n; i++) {
        if (!visited[i]) {
            // 백트래킹 1) 방문 처리
            visited[i] = true;
            selected.push(arr[i]);
            // 백트래킹 2) 재귀 함수 호출
            dfs(depth + 1, i + 1);
            // 백트래킹 3) 방문 처리 해제
            visited[i] = false;
            selected.pop();
        }
    }
}
dfs(0, 0);
