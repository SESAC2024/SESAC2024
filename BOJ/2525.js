// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// fs.readFileSync("input.txt").toString(): "14 30\n20"
// fs.readFileSync("input.txt").toString().split("\n"): ["14 30", "20"]

// input[0].split(" "): ["14", "30"]
let [hour, minute] = input[0].split(" ").map(Number);
let c = Number(input[1]);

minute += c;
hour += parseInt(minute / 60);
minute = minute % 60;

if (hour >= 24) {
    hour = hour % 24;
}

console.log(hour, minute);
