# RGB Challenge

## Introduction

> This project practice HTML5, CSS and Jquery in a game where you learn the rgb colors.

## Code Samples

> 
## HTML
``<div class="question-container">
       <div class="question">
            rgb(0, 0, 0)
        </div>
        <div class="options">
            <div class="option"></div>
            <div class="option"></div>
            <div class="option"></div>
        </div>
    </div>``
## CSS
``.question {
    font-size: 28px;
}
question-container {
    position: absolute;
    top: 40%;
    width: 100%;
}
``
>
## JQuery
``function game() {
        correct = Math.floor(Math.random() * 2);
    $('.option').each(function (index) {
            var color = generateColor();
            // change css for the selected div
            $(this).css('background-color', color);
        ``

## Installation

> Clone this repository and render index.html file in your browser.

> For play, click on the circle that correspond with the code rgb, you win one point for every correct answer, and back to zero in your score if you fail.

> Play and Learn RGB colors code :)