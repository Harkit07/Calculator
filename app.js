let btns = document.querySelectorAll(".button");
let result = document.querySelector(".output");
let clearAll = document.querySelector(".ACbtn");
let del = document.querySelector(".del");
let equal = document.querySelector(".equal");
let p = document.querySelector(".output p");

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
