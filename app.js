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
  console.log("click");
  let array = result.children;
  let arr = array[array.length-1];
  console.log(event);
  // console.dir(num);
  // result.remove(num);
  arr.innerHTML = "";
  console.dir(result.children);
  // result.removeChild()
  // if(arr.nodeName = "P") {
  //   let item = arr
  //   result.remove(arr.outerHTML);
  // }
  console.dir(arr);
  // console.dir(result.childNodes.length);
  // console.dir(result.lastChild.data);
});

equal.addEventListener("click", function () {
  let ans = eval(result.textContent);
  result.innerText = ans;
  console.log(ans);
});
