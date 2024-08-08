// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let [hour, minute] = input.map(Number);

minute -= 45;

// 45분 빼서, 1시간 빼줘야 하는 경우
if (minute < 0) {
    hour -= 1;
    minute += 60;
    // 시(hour)도 0보다 작아진 경우
    if (hour < 0) {
        hour = 23;
    }
}

console.log(hour, minute);
