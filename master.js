
 var questions = [ { "que": "what is 5 multiplied by 6 ?", "ans": 30 },
 { "que": "what is 25 multiplied by 10 ?", "ans": 250 },
 { "que": "what is 50 multiplied by 0 ?", "ans": 340 },
 { "que": "what is the output for cv + cv in js ?", "ans": "cvcv" },
 { "que": "what is 5 multiplied by 6 ?", "ans": 30 },
 { "que": "what is 5 multiplied by 6 ?", "ans": 30 },
 { "que": "what is 5 multiplied by 6 ?", "ans": 30 }
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
  var arr = [1,2,3,4,5,6,7,8,9];
  for (var i = 0; i < 3; i++) {
    str += `<div class="que1">
                <div class="q"> Question : ${questions[i].que} </div>
                <div> Answer : <input type="text" class="t2 a${arr[i]}"/> </div>
                
                </div>`;
  }
  str += `<button class="btn1">
  SUBMIT
  </button>`

  box1.innerHTML = str;


});





var btn1 = document.querySelector(".btn1");

btn1.addEventListener("click", function(e){
 
      var a1 = document.querySelector(".a1").value;
      var a2 = document.querySelector(".a2").value;
      var a3 = document.querySelector(".a3").value;
      let parent = document.querySelector(".parent");
      let box1 = document.querySelector(".box1");
      let que1 = document.querySelector(".que1");
      
     
      for (var i =0; i<3; i++) {
       if(a1 == questions[i].ans){
          
         box1.innerText = "you are correct! congrats";
       } else {
          box1.innerText = "please fill correct details";
       }
      }

  
   
})


