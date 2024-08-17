let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

n = Number(input[0]); // 노드의 개수(N)
m = Number(input[1]); // 간선의 개수(M)

// 노드의 번호는 1번부터 N번이므로, 인덱스 0은 사용하지 않음
let graph = [];
for (let i = 0; i <= n; i++) {
  graph.push([]);
}
let visited = new Array(n + 1).fill(false);
let answer = 0;

for (let i = 2; i <= m + 1; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

function dfs(x) {
  visited[x] = true;
  answer += 1;
  for (let i = 0; i < graph[x].length; i++) {
    let y = graph[x][i];
    if (!visited[y]) dfs(y);
  }
}

dfs(1);
console.log(answer - 1);
