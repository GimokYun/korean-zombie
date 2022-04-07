const startPage = document.querySelector(".start-page");
const clickElement = document.querySelector(".click");

const newStartPage = document.createElement("div");
newStartPage.classList.add("new-start");

const messageFirst = document.createElement("span");
const messageSecond = document.createElement("span");
const messageThird = document.createElement("span");

const HIDDEN = "hidden";
const APPEAR = "appear";

const RED = "#ef4740";
const BLUE = "#31ccd6";

let win = "WIN";
let zombie = `"ZOMBIE"`;
let typeInterval = 0;
let index = 0;

win = win.split("");
zombie = zombie.split("");

messageFirst.classList.add("new-font");
messageFirst.style.color = BLUE;
messageSecond.classList.add("new-font");
messageSecond.style.color = RED;
messageThird.classList.add("new-font");
messageThird.style.color = BLUE;

newStartPage.appendChild(messageFirst);
newStartPage.appendChild(messageSecond);
newStartPage.appendChild(messageThird);

function handleStartClick() {
    startPage.classList.add(HIDDEN);
    document.body.appendChild(newStartPage);
    setTimeout(handleTyping, 1000);
}

function handleTyping() {
    typeInterval = setInterval(typing, 200);
}

function typing() {
    if (index < win.length) {
        messageFirst.append(win[index]);
        index++;
    } else if ((index >= win.length) && (index < (win.length + zombie.length))) {
        messageSecond.append(zombie[index - win.length]);
        index++;
    } else if ((index >= (win.length + zombie.length)) && (index < (win.length * 2 + zombie.length))) {
        newStartPage.appendChild(clickElement);
        messageThird.append(win[index - win.length - zombie.length]);
        index++;
    } else {
        clearInterval(typeInterval);
    }
}

function handleNewStartClick() {
    newStartPage.classList.add(HIDDEN);
}


if (startPage) {
    startPage.addEventListener("pointerdown", handleStartClick);
}

if (newStartPage) {
    newStartPage.addEventListener("pointerdown", handleNewStartClick);
}
