
var timer = null;

//遊戲開始
$("#start").on("click", function () {
  clearInterval(timer);
  timer = null; // 將狀態轉為空
  index = 15;
  document.getElementById("counts").innerHTML = index + " sec";
  document.getElementById("score-vl").setAttribute("value", '0');
  document.getElementById("score").innerHTML = 0;
  $(".cow").each(function () {
    this.style.display = "none";
    this.setAttribute("value", "0");
  });
  $(".rat").each(function () {
    this.style.display = "none";
    this.setAttribute("value", "0");
  });

  // console.log(document.getElementById("score"));
  if (timer == null) {
    // 如果timer為空 則開啟定時器
    timer = setInterval(begin, 1000);
  }
});

//倒數計時function
function begin() {
  // console.log("index"+index);
  // document.getElementById("submit").setAttribute("disabled", true);
  if (index <= 0) { //重置狀態
    clearInterval(timer);
    timer = null; // 將狀態轉為空
    index = 15;
    document.getElementById("counts").innerHTML = index + " sec";
    document.body.style.backgroundColor = 'white';
    $(".cow").each(function () {
      this.style.display = "none";
      this.setAttribute("value", "0");
    });
    $(".rat").each(function () {
      this.style.display = "none";
      this.setAttribute("value", "0");
    });
    var score = document.getElementById("score-vl").value;
    console.log("score:"+score); 
    if (score < 0){
      document.getElementById("QQ").style.display = "block";
      function QQfn(){
        document.getElementById("QQ").style.display = "none";
      }
      setInterval(QQfn, 2000);
    }
    if (score >= 8){
      document.getElementById("OK").style.display = "block";
      function OKfn(){
        document.getElementById("OK").style.display = "none";
      }
      setInterval(OKfn, 2000);
    }
    if (score < 8 & score >=0) {
      document.getElementById("mask").style.display = "block";
      function maskfn(){
        document.getElementById("mask").style.display = "none";
      }
      setInterval(maskfn, 2000);
    }
    // var rank_tab = document.getElementById("rank");
    // rank_tab.innerHTML += '<tr><td>input</td><td>'+score+'</td></tr>';
    // $("#submit").attr("disabled", false);
    
    console.log("bye");
    

  } else {
    index--;
    document.getElementById("counts").innerHTML = index + " sec";
    // console.log("eeee");
    setTimeout(play, 0);
    
  }
}

//產生min到max之間的亂數
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//cow,rat random
holes = document.getElementsByClassName("hole").length;
cow = document.getElementsByClassName("cow");
rat = document.getElementsByClassName("rat");
console.log("holes:" + holes);

function play() {
    document.body.style.backgroundColor = 'white';
  $(".cow").each(function () {
    this.style.display = "none";
    this.setAttribute("value", "0");
  });
  $(".rat").each(function () {
    this.style.display = "none";
    this.setAttribute("value", "0");
  });

  //hole個數
  m = getRandom(0, holes-1);
  //   console.log("m" + m);
  cow[m].style.display = "block";

  //hole個數
  n = getRandom(0, holes-1);
  //   console.log("n" + n);
  if (n == m) {
    rat[n].style.display = "none";
  } else {
    rat[n].style.display = "block";
  }
};
// for (i = 0; i < 10; i++) {
//   setTimeout(play, 1000 * i);
// }

$(".rat").on("click touch", function () {
  var score = document.getElementById("score-vl").value;
  console.log(score);
  if (this.getAttribute("value") === "0") {
    score++;
    document.getElementById("score").innerHTML = score;
    document.getElementById("score-vl").setAttribute("value", score);
    document.body.style.backgroundColor = '#BDFFCF';
  }
  this.setAttribute("value", "1");
  this.style.display = "none";
  console.log("=============================");
});

$(".cow").on("click touch", function () {
  var score = document.getElementById("score-vl").value;
  console.log(score);
  if (this.getAttribute("value") === "0") {
    score--;
    document.getElementById("score").innerHTML = score;
    document.getElementById("score-vl").setAttribute("value", score);
    document.body.style.backgroundColor = '#FFB5B5';
  }
  this.setAttribute("value", "1");
});

