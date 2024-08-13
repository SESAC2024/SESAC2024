let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let [add, sub, mul, div] = input[2].split(" ").map(Number);

let minValue = 1e9 + 1;
let maxValue = -1e9 - 1;

function dfs(depth, sum) {
    if (depth == n) {
        minValue = Math.min(minValue, sum);
        maxValue = Math.max(maxValue, sum);
        return;
    }
    if (add > 0) {
        add--;
        dfs(depth + 1, sum + arr[depth]);
        add++;
    }
    if (sub > 0) {
        sub--;
        dfs(depth + 1, sum - arr[depth]);
        sub++;
    }
    if (mul > 0) {
        mul--;
        dfs(depth + 1, sum * arr[depth]);
        mul++;
    }
    if (div > 0) {
        div--;
        dfs(depth + 1, parseInt(sum / arr[depth]));
        div++;
    }
}

dfs(1, arr[0]);
console.log(maxValue + "\n" + minValue);
