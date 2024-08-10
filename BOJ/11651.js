let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

/*
5
3 4
1 1
1 -1
2 2
3 3
*/
let n = Number(input[0]); // 5
let arr = [];
for (let i = 1; i <= n; i++) {
    // "3 4" => ["3", "4"] => [3, 4]
    let current = input[i].split(" ").map(Number);
    arr.push(current);
}

// a가 [3, 4]고 b가 [1, 1]
arr.sort(function (a, b) {
    if (a[1] != b[1]) {
        // 먼저 y를 비교해서 다르다면
        return a[1] - b[1]; // y가 작은 게 앞으로
    } else {
        // y가 동일하다면
        return a[0] - b[0]; // x가 작은 게 앞으로
    }
});

for (let i = 0; i < n; i++) {
    console.log(arr[i][0] + " " + arr[i][1]);
}
