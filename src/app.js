/* eslint-disable */
import "bootstrap";
import "./style.css";

const randomItem = array => {
  return array[Math.floor(Math.random() * array.length)];
};

const generate = (a, b, c, d) => {
  return (
    randomItem(a) +
    " " +
    randomItem(b) +
    " " +
    randomItem(c) +
    " " +
    randomItem(d)
  );
};

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let excuse = generate(who, action, what, when);
  function changeText() {
    var element = document.getElementById("excuse");
    element.innerHTML = excuse;
  }
  changeText();
};
