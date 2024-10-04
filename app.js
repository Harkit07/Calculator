let btns = document.querySelectorAll(".button");
let result = document.querySelector(".output");
let clearAll = document.querySelector(".ACbtn");
let del = document.querySelector(".del");
let equal = document.querySelector(".equal");


clearAll.addEventListener("click", function () {
  result.innerText = "";
});

for (btn of btns) {
  btn.addEventListener("click", function (event) {
    text = event.target.textContent;
    result.append(text);
    console.log(text);
    console.log("button clicked");

    // let question = eval(result.textContent);
    // console.log(question);
  });

};

equal.addEventListener("click", function() {
    let ans = eval(result.textContent);
    result.innerText = ans;
    console.log(ans);
});

del.addEventListener("click", function () {
    result.removeChild(result(length));
});