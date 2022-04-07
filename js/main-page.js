const rightChevron = document.querySelector(".right-chevron");
const leftChevron = document.querySelector(".left-chevron");
const rightChevronIcon = document.querySelector(".right-chevron i");
const leftChevronIcon = document.querySelector(".left-chevron i");
const mainPage = document.querySelector("main");
const mainTitle = document.querySelector(".main__title");
const videoPage = document.querySelector(".video-page");
const gridPage = document.querySelector(".grid-page");

const RIGHT_APPEAR = "right-appear";
const LEFT_APPEAR = "left-appear";
const RIGHT_DISAPPEAR = "right-disappear";
const LEFT_DISAPPEAR = "left-disappear";
const HIDDEN_PAGE = "hidden-page";
const CHEVRON_BLACK = "chevron--black";
const CHEVRON_WHITE = "chevron--white";

let mainClicked = true;

function rightChevronHandle() {
    if (mainClicked) {
        mainPage.classList.remove(RIGHT_APPEAR);
        mainTitle.classList.remove(RIGHT_APPEAR);
        mainPage.classList.remove(LEFT_APPEAR);
        mainTitle.classList.remove(LEFT_APPEAR);
        mainPage.classList.add(LEFT_DISAPPEAR);
        mainTitle.classList.add(LEFT_DISAPPEAR);
        rightChevron.classList.add(HIDDEN_PAGE);
        gridPage.classList.remove(HIDDEN_PAGE);
        gridPage.classList.remove(RIGHT_DISAPPEAR);
        gridPage.classList.add(LEFT_APPEAR);
        leftChevronIcon.classList.remove(CHEVRON_WHITE);
        leftChevronIcon.classList.add(CHEVRON_BLACK);
        mainClicked = false;
    } else {
        mainPage.classList.remove(RIGHT_DISAPPEAR);
        mainTitle.classList.remove(RIGHT_DISAPPEAR);
        leftChevron.classList.remove(HIDDEN_PAGE);
        videoPage.classList.add(LEFT_DISAPPEAR);
        videoPage.classList.remove(RIGHT_APPEAR);
        mainPage.classList.add(LEFT_APPEAR);
        mainTitle.classList.add(LEFT_APPEAR);
        rightChevronIcon.classList.add(CHEVRON_WHITE);
        rightChevronIcon.classList.remove(CHEVRON_BLACK);
        mainClicked = true;
    }
}

function leftChevronHandle() {
    if (mainClicked) {
        mainPage.classList.remove(RIGHT_APPEAR);
        mainTitle.classList.remove(RIGHT_APPEAR);
        mainPage.classList.remove(LEFT_APPEAR);
        mainTitle.classList.remove(LEFT_APPEAR);
        mainPage.classList.add(RIGHT_DISAPPEAR);
        mainTitle.classList.add(RIGHT_DISAPPEAR);
        leftChevron.classList.add(HIDDEN_PAGE);
        videoPage.classList.remove(HIDDEN_PAGE);
        videoPage.classList.remove(LEFT_DISAPPEAR);
        videoPage.classList.add(RIGHT_APPEAR);
        rightChevronIcon.classList.remove(CHEVRON_WHITE);
        rightChevronIcon.classList.add(CHEVRON_BLACK);
        mainClicked = false;
    } else {
        mainPage.classList.remove(LEFT_DISAPPEAR);
        mainTitle.classList.remove(LEFT_DISAPPEAR);
        rightChevron.classList.remove(HIDDEN_PAGE);
        gridPage.classList.add(RIGHT_DISAPPEAR);
        gridPage.classList.remove(LEFT_APPEAR);
        mainPage.classList.add(RIGHT_APPEAR);
        mainTitle.classList.add(RIGHT_APPEAR);
        leftChevronIcon.classList.add(CHEVRON_WHITE);
        leftChevronIcon.classList.remove(CHEVRON_BLACK);
        mainClicked = true;
    }
}

if (rightChevronIcon) {
    rightChevronIcon.addEventListener("pointerdown", rightChevronHandle);
}

if (leftChevronIcon) {
    leftChevronIcon.addEventListener("pointerdown", leftChevronHandle);
}