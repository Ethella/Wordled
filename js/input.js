// 全局变量
// alert("Welcome to play!\n欢迎进入游戏！");
// alert("This is a game about words.\n这个游戏是关于单词的。");
// alert("Here is some hints for you to play.\n接下来会有一些小贴士。");
// alert(
//   "1, Any guess must be filled with five characters.\n1，每一次猜测都必须输入5个字母。"
// );
// alert(
//   "2, When you submit your ansewr, we will check if the word is correct or not.\n2，每当你提交一次答案，我们都会对其做出判断。"
// );
// alert(
//   "3, if the word is correct, we will tell you that you win.\n3，如果你输入的单词是正确的，我们会告诉你。"
// );
// alert(
//   "4, If the word you submit is incorrect, we will use background color to hint you.\n4，如果你提交了错误的答案，我们会通过背景颜色来提示您。"
// );
// alert(
//   "5, If you see the background is filled with grey, it means that the letter isn't in the correct word\n5，如果你看到了灰色背景，说明字母不在正确单词里面。"
// );
// alert(
//   "6, If you see the background is filled with yellow, it means that the letter is in the correct word, but in the wrong place.\n如果你看到了黄色背景，说明正确单词中有这个字母但不在同一个位置。"
// );
// alert(
//   "7, If you see the background is filled with green, it means that the letter is in the correct word, and in the correct place.\n如果你看到了绿色背景，说明正确单词中有这个字母而且在同一个位置。"
// );
// alert(
//   "That's all for the hints, you can play now.\n以上就是所有提示，可以开始玩了！（提示，之后的内容将全会是英文。）"
// );
const beginner = [
  "ABOUT",
  "ABOVE",
  "AFTER",
  "AGAIN",
  "ALONE",
  "APPLE",
  "BEACH",
  "BEGIN",
  "BLACK",
  "BRING",
  "BROWN",
  "BUNNY",
  "CAMEL",
  "CANDY",
  "CARRY",
  "CHILD",
  "CLEAN",
  "CLOSE",
  "COUNT",
  "DADDY",
  "DREAM",
  "DRESS",
  "DRIVE",
  "EIGHT",
  "EVERY",
  "FIGHT",
  "FLOOR",
  "FOUND",
  "GHOST",
  "GOOSE",
  "GREAT",
  "GREEN",
  "HAPPY",
  "HEARD",
  "HEART",
  "HIPPO",
  "HORSE",
  "HOUSE",
  "INDIA",
  "JUICE",
  "KOALA",
  "LARGE",
  "LIGHT",
  "LUCKY",
  "MOMMY",
  "MONEY",
  "MOOSE",
  "MOUSE",
  "MUMMY",
  "MUSIC",
  "NEVER",
  "NURSE",
  "PANDA",
  "PAPER",
  "PARTY",
  "PIZZA",
  "PLANE",
  "PLANT",
  "PLATE",
  "PRICE",
  "PUPPY",
  "QUACK",
  "QUEEN",
  "QUIET",
  "RIGHT",
  "RIVER",
  "ROBIN",
  "ROBOT",
  "ROUND",
  "SEVEN",
  "SHEEP",
  "SKUNK",
  "SLEEP",
  "SMALL",
  "SPOON",
  "STAMP",
  "STAND",
  "STICK",
  "STORE",
  "STORY",
  "STRAY",
  "SUNNY",
  "SWEET",
  "TABLE",
  "THERE",
  "THING",
  "THREE",
  "TIGER",
  "TODAY",
  "TRAIN",
  "TRUCK",
  "TUMMY",
  "UNDER",
  "WATER",
  "WHITE",
  "WITCH",
  "WOMAN",
  "WOMEN",
  "WRITE",
  "ZEBRA"
];
// import { beginner } from "./wordList";
var currentRowNum = 1;
var correctAnswer = beginner[Math.floor(Math.random() * beginner.length)];
console.log(correctAnswer);
// 键盘输入到蓝色框里面 Keyboard-button
function clickLetterButton(letter) {
  var x = document.getElementById("row" + currentRowNum);
  for (var i = 0; i < x.children.length; i++) {
    if (x.children[i].innerHTML === "") {
      x.children[i].innerHTML = letter;
      return;
    }
    if (x === 6) {
      return;
    }
  }
}

function clickBackButton() {
  // console.log("A letter is deleted.");
  // 循环，找最后一个有字的x.children，检查它下一个是不是有字，如果没字，删掉当前。如果有字，则往下
  var x = document.getElementById("row" + currentRowNum);
  for (var i = x.children.length - 1; i >= 0; i--) {
    //找到第一个带字的cell
    if (x.children[i].innerHTML !== "") {
      x.children[i].innerHTML = "";
      return;
    }
  }
}

// Go button onclick // QUEEN
function showDocumentResult() {
  // 检查当前行数的单词
  // Todo 优化go按钮
  // if (currentRowNum === 6) {
  //   return;
  // }
  var currentRow = document.getElementById("row" + currentRowNum);
  var word = "";
  var i;
  for (i = 0; i < currentRow.children.length; i++) {
    word += currentRow.children[i].innerHTML;
  }

  //检查 1
  //字母数量是不是5
  if (word.length !== 5) {
    alert("You must enter five characters.");
    // 不是 不足5个字母
    // Todo #1 bug 停留在本行
    return;
  }

  //是 到2
  // For 循环判断是不是列表内单词
  for (i = 0; i < beginner.length; i++) {
    // 如果匹配到正确选项，则游戏胜利
    if (word === correctAnswer) {
      for (let j = 0; j < currentRow.children.length; j++) {
        currentRow.children[j].style.backgroundColor = "rgb(0, 255, 21)";
      }
      alert("You get it, congratulations!"); //
      return;
    }

    // 如果匹配列表内单词，但结果不匹配。则检查字母结果
    if (word === beginner[i]) {
      alert("Worng word");
      // yellow: rgb(255, 208, 0)
      // green: rgb(0, 255, 21)
      // grey: grey
      var wordNum = 0;

      // 检查要素：字母一样，位置一样
      // 绿色：字母和位置一样
      // 黄色：字母一样位置不一样
      // 灰色：字母不存在
      for (wordNum = 0; wordNum < 5; wordNum++) {
        if (word[wordNum] === correctAnswer[wordNum]) {
          console.log(currentRow.children);
          console.log(wordNum);
          currentRow.children[wordNum].style.backgroundColor =
            "rgb(0, 255, 21)";
        } else if (correctAnswer.includes(word[wordNum])) {
          currentRow.children[wordNum].style.backgroundColor =
            "rgb(255, 208, 0)";
        } else {
          currentRow.children[wordNum].style.backgroundColor = "grey";
        }
      }
      console.log("a" + currentRowNum);
      currentRowNum += 1;
      console.log("b" + currentRowNum);
      // return;
    }
  }
  //如果不匹配列表内任何单词，则要求修改
  alert("Sorry, word not in list. Please re-submit answer.");
  if (currentRowNum === 6) {
    alert("The correct word is: " + correctAnswer);
    return;
  }

  return;

  //另起一行
}
