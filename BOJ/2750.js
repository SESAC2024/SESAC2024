// 선택 정렬 함수
function selectionSort(arr) {
    // i는 가장 앞으로 보낼 위치
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i; // 가장 작은 원소의 인덱스
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        // 스와프(swap)
        /* 
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        */
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
}

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
}

selectionSort(arr);

for (let i = 0; i < n; i++) {
    console.log(arr[i]);
}
