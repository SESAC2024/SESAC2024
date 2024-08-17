let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
let arr = []; // 전체 맵의 정보를 입력받기
for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}
let visited = []; // N X N 크기의 맵에 대해서 각 위치에 대한 방문 여부
for (let i = 0; i < n; i++) {
  visited.push(new Array(n).fill(false));
}

// 북, 동, 남, 서
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
let count = 0;
let total = 0;

function dfs(x, y) {
  visited[x][y] = true; // (x, y)의 위치를 방문 처리
  count += 1;
  for (let i = 0; i < 4; i++) {
    // 인접한 4가지 방향을 확인하며
    let nx = x + dx[i]; // 다음 위치
    let ny = y + dy[i];
    // 위치를 벗어났다면 해당 방향은 보지 않도록 무시
    if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
    if (!visited[nx][ny] && arr[nx][ny] === "1") {
      dfs(nx, ny);
    }
  }
}

let result = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j] && arr[i][j] === "1") {
      // 새로운 단지(묶음, 연결 요소)가 있다면
      count = 0; // 현재 단지에 있는 집의 개수
      dfs(i, j); // 해당 단지(묶음, 연결 오소)에 대해서 전부 방문처리
      total += 1; // 전체 단지의 개수
      result.push(count);
    }
  }
}

console.log(total);
result.sort((a, b) => a - b);
for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
