let btns = document.querySelectorAll(".button");
let result = document.querySelector(".output");
let clearAll = document.querySelector(".ACbtn");
let del = document.querySelector(".del");
let equal = document.querySelector(".equal");
let p = document.querySelector(".output p");
let con = document.querySelector(".conventer");
let cal = document.querySelector(".cal");
let mode = document.querySelector(".mode");
let sun = document.querySelector(".sun");
let moon = document.querySelector(".moon");
let screen = document.querySelector(".screen");




con.addEventListener("click", function () {
  con.classList.toggle("back");
  cal.classList.toggle("back");

});

cal.addEventListener("click", function () {
  cal.classList.toggle("back");
  con.classList.toggle("back");
});

mode.addEventListener("click", function () {
  sun.classList.toggle("hide");
  moon.classList.toggle("hide");
  screen.classList.toggle("black");
  clearAll.classList.toggle("special");
  del.classList.toggle("special");

});



clearAll.addEventListener("click", function () {
  result.innerText = "";
});

for (btn of btns) {
  btn.addEventListener("click", function (event) {
    text = event.target.textContent;
    let para = document.createElement("p");
    para.innerText = text;
    result.insertAdjacentElement("beforeend", para);
    console.log(text);
  });
}

del.addEventListener("click", function () {
  let arr = result.childNodes;
  arr = arr[arr.length-1];
  result.removeChild(arr);
});

equal.addEventListener("click", function () {
  let ans = eval(result.textContent);
  result.innerText = ans;
  console.log(ans);
});
