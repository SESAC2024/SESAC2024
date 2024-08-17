let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

// 정점의 수(N), 간선의 수(M), 시작 정점(R)
let [n, m, r] = input[0].split(" ").map(Number);
let graph = [];
// 인덱스 1부터 인덱스 N까지 리스트를 넣어줄 필요
for (let i = 0; i <= n; i++) {
  graph.push([]);
}
let visited = new Array(n + 1).fill(false);
let answer = new Array(n + 1).fill(0);
let order = 1;

for (let i = 1; i <= m; i++) {
  let [u, v] = input[i].split(" ").map(Number); // 정점 u와 정점 v가 서로 연결되어 있다.
  graph[u].push(v);
  graph[v].push(u);
}

// DFS 함수 작성
function dfs(x) {
  visited[x] = true;
  answer[x] = order;
  order += 1;
  for (let i = 0; i < graph[x].length; i++) {
    let y = graph[x][i];
    if (!visited[y]) dfs(y);
  }
}

for (let i = 1; i <= n; i++) graph[i].sort((a, b) => a - b); 
// 2번 노드에 연결된 노드가 [4, 3, 1]일 때, [1, 3, 4] 순서로 방문
dfs(r);
for (let i = 1; i <= n; i++) console.log(answer[i]);
