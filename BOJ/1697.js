class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i]);
}
visited = []; // 방문 처리 배열
for (let i = 0; i < n; i++) {
  visited.push(new Array(m).fill(-1));
}
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

// BFS 수행
let queue = new Queue();
queue.enqueue([0, 0]);
visited[0][0] = 1;
while (queue.getLength() != 0) {
  let [x, y] = queue.dequeue();
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    // 벗어난 경우 무시
    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if (graph[nx][ny] == "1" && visited[nx][ny] == -1) {
      queue.enqueue([nx, ny]);
      visited[nx][ny] = visited[x][y] + 1;
    }
  }
}

console.log(visited[n - 1][m - 1]);
