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

let [n, m, r] = input[0].split(" ").map(Number);
let graph = [];
for (let i = 0; i <= n; i++) {
  graph.push([]);
}
let visited = new Array(n + 1).fill(false);

for (let i = 1; i <= m; i++) {
  let [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}
let result = new Array(n + 1).fill(0);
let order = 1;

for (let i = 1; i <= n; i++) graph[i].sort((a, b) => a - b);
// BFS 수행
visited[r] = true;
queue = new Queue();
queue.enqueue(r);
while (queue.getLength() != 0) {
  // 큐가 빌 때까지 반복
  let x = queue.dequeue();
  result[x] = order;
  order += 1;
  for (let i = 0; i < graph[x].length; i++) {
    let y = graph[x][i];
    if (!visited[y]) {
      visited[y] = true;
      queue.enqueue(y);
    }
  }
}

for (let i = 1; i <= n; i++) console.log(result[i]);
