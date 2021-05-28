var questions = [
  { que: "what is 5 multiplied by 6 ?", ans: "30" },
  { que: "what is 25 multiplied by 10 ?", ans: "250" },
  { que: "what is 50 multiplied by 0 ?", ans: "0" },
  { que: "what is the output for cv + cv in js ?", ans: "cvcv" },
  { que: "what is 5 multiplied by 6 ?", ans: 30 },
  { que: "what is 5 multiplied by 6 ?", ans: 30 },
  { que: "what is 5 multiplied by 6 ?", ans: 30 },
];

var btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  let box = document.querySelector(".box");
  let parent = document.querySelector(".parent");
  parent.removeChild(box);

  let box1 = document.querySelector(".box1");
  box1.style.display = "flex";
  parent.append(box1);
  let str = "";
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (var i = 0; i < 3; i++) {
    str += `<div class="que1">
                  <div class="q"> Question : ${questions[i].que} </div>
                  <div> Answer : <input type="text" class="t2 a${arr[i]}"/> </div>
                  
                  </div>`;
  }
  str += `<button class="btn1">
    SUBMIT
    </button>`;

  box1.innerHTML += str;

  // ========= btn1 ===========
  var btn1 = document.querySelector(".btn1");

  btn1.addEventListener("click", function (e) {
    var a1 = document.querySelector(".a1").value;
    var a2 = document.querySelector(".a2").value;
    var a3 = document.querySelector(".a3").value;

    let modalbg = document.createElement("div");
    let body = document.querySelector("body");
    body.append(modalbg);
    modalbg.setAttribute("class", "modal-bg");
    //  modalbg.classList.add("display1");

    let modal = document.createElement("div");
    modalbg.append(modal);
    modal.setAttribute("class", "modal");

    let close = document.createElement("span");
    close.append("X");
    close.setAttribute("class", "close");
    modal.append(close);
    if (
      a1 === questions[0].ans &&
      a2 === questions[1].ans &&
      a3 === questions[2].ans
    ) {
      //   modalbg.classList.remove("display1");
      modal.append("Congrats!! all answers are correct");
    } else {
      // modalbg.classList.remove("display1");
      modal.append("OOPS!! Make sure all your answers are correct");
      close.style.left = "319px";
    }

    close.addEventListener("click", () => {
    
      body.removeChild(modalbg);
    });
  });
});
