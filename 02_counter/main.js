// h1에 있는 슷자 요소를 가져오자
let count = 0;
const counter = document.getElementsByTagName('counter');

const plusButton = document.getElementById('increment');

plusButton.onclick = () => {
    count++;

    counter.textContent = count;
};




// const plusButton = document.getElementsByTagName('increment');
// plusButton.addEventListener('click', () => {
//     count++;
//     counter.textContent = count;
// });


// const counter = document.getElementsByTagNamej('counter');
//         const incrementButton = document.getElementById('increment');

//         let count = 0;

//         incrementButton.addEventListener('click', () => {
//             count++;
//             counter.textContent = count;
//         });


