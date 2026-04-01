let number = 100;

// h1에 있는 숫자 요소를 가져오자
// const resultH1 = document.getElementsByTagName("h1")[0];
const resultH1 = document.getElementById("result");
// button에 있는 + 요소를 가져오자
// const plusButton = document.getElementsByTagName("button")[0];
// const plusButton = document.getElementsByClassName("plus")[0];

// plusButton.addEventListener("click", () => {
//     number++;
//     resultH1.innerHTML = number;
// });
// plusButton.onclick = () => {
//     number++;
//     resultH1.innerHTML = number;
// };

// function plus() {
function render() {
    resultH1.innerHTML = number;
}

const plus = (value) => {
    number += value;
    render();
}

const reset = () => {
    number = 100;
    render();
}

render();

// const start = () => {
//     setInterval(() => {
//         number++;
//         resultH1.innerHTML = number;
//     }, 1000);
// }

// const stop = () => {
//     clearInterval(interval);
// }

// npm install을 하면 package.json에 적힌 패키지들을 설치함!