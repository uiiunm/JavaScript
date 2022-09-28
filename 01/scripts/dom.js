/*
// function 키워드로 함수 생성
function show() {
  console.log("show");
}
*/

// 화살표 함수형식으로 생성(함수 내의 명령이 한 줄이면 {} 중괄호 생략 가능)
//                         ++return문 아니면 return도 생략가능
//const show = () => console.log("show 화살표함수");

// 화살표 함수형식으로 생성(함수는 const로 만들기)
//function -> const
//const show = () => {
// console.log("show 화살표함수");

//const msgId = document.querySelector("#msg");
//msgId.innerHTML = "<h2>페이스북</h2>";
//console.log(msgId.innerHTML);

//msgId.innerText = "<h2>페이스북</h2>";
//console.log(msgId.innerText);

//msgId.textContent = "<h2>페이스북</h2>";
//console.log(msgId.textContent);

// 태그 만들기
// msgTag = '<div class="divMsg" id="divId1">1</div><div class="divMsg" id="divId2">2</div><div class="divMsg" id="divId3">3</div>'

/*msg 영역에 div 3개 만들기*/
//for (let i = 1 ; i <= 3 ; i++) {
//  console.log(i)
//}

//   msgId.innerHTML = msgTag;
// }

/* DOM 요소가 생성된 후에 실행 */
// document.addEventListener("DOMContentLoaded", () => {

// });

// function 키워드로 함수 만들기
// function show() {
//  console.log("안녕하세요.")
//}

// es6+ 부터 함수는 화살표 함수로 만들기
const show = () => {
  // 폼 숨기기
  // const formSection = document.querySelector("#formSection");
  // formSection.style.display = "none";

  //1. 태그 만들기
  // let tag = "";
  // for (let i = 1; i <= 3; i++) {
  //tag = tag + '<div class="divMsg">' + i + '</div>';
  //템플릿문자열
  //tag = tag + `<div class="divMsg"> ${i} </div>`
  // }
  // console.log(tag);

  //2. DOM에서 태그를 넣을 요소 선택
  // const msgDiv = document.querySelector('#msg')

  //3. 선택된 요소의 HTML 변경
  //msgDiv.innerHTML = tag

  //3-1. 스타일 변경
  // msgDiv.style.backgroundColor = "red";
  // console.log(msgDiv.getComputedStyle());

  //4. 동적으로 생성된 HTML요소도  스타일 변경 가능
  // let msgImg = document.querySelector("msgImg")
  // msgImg.style.maxWidth = "100px";
  // msgImg.style.maxHeight = "100px";

  //DOM 생성되면
  document.addEventListener("DOMContentLoaded", () => {

    let ran = Math.floor(Math.random() * 6) + 1;

    ran = `<div class="dice"><img src="image/${i}.png" id="msgImgId">${i}</div>`
    console.log(ran);

    const msgDiv = document.querySelector('#dice');

    msgDiv.innerHTML = ran

    msgDiv.style.backgroundColor = "red";

  })
}


// let dice = "";
// for (let i = 1; i <= 6; i++) {
//   dice = dice + `<div class="divMsg"><img src="image/${i}.png" id="msgImgId${i}"></img></div>`
// }
// console.log(dice);
// const msgDiv = document.querySelector('#msg')
// msgDiv.innerHTML = dice

//}

// let i = Math.floor(Math.random() * 6) + 1;
// tag = `<div class="dice"><img src="image/${i}.png" id="msgImgId">${i}</div>`
// console.log(tag);

// let ran = "";
// const i = Math.floor(Math.random() * 6) + 1;
// ran = `<div class="dice"><img src="image/${i}.png" id="msgImgId">${i}</div>`
// console.log(ran);

// const msgDiv = document.querySelector('#dice');

// msgDiv.innerHTML = ran

// msgDiv.style.backgroundColor = "red";
