"use strict";

// Variables
var playing = true;
var interval;

// Functions
function startTimer() {
    return setInterval(function() {
        var counter = document.getElementById("counter");
        var count = parseInt(counter.innerText);
        counter.innerText = count + 1;
    }, 1000);
}

function decreaseCounter() {
    var counter = document.getElementById("counter");
    var count = parseInt(counter.innerText);
    counter.innerText = count - 1;
}

function increaseCounter() {
    var counter = document.getElementById("counter");
    var count = parseInt(counter.innerText);
    counter.innerText = count + 1;
}

function likeNumber() {
    var counter = document.getElementById("counter");
    var count = parseInt(counter.innerText);
    var likesList = document.querySelector(".likes");
    var existingLike = document.querySelector('[data-num="' + count + '"]');

    if (existingLike) {
        var likeCount = parseInt(existingLike.querySelector("span").innerText);
        existingLike.innerHTML = count + " has been liked <span>" + (likeCount + 1) + "</span> times";
    } else {
        var newLike = document.createElement("li");
        newLike.setAttribute("data-num", count);
        newLike.innerHTML = count + " has been liked <span>1</span> time";
        likesList.appendChild(newLike);
    }
}

function togglePause() {
    playing = !playing;
    var pauseButton = document.getElementById("pause");
    var buttons = document.querySelectorAll("button:not(#pause)");

    if (playing) {
        interval = startTimer();
        pauseButton.innerText = "pause";
    } else {
        clearInterval(interval);
        pauseButton.innerText = "resume";
    }

    buttons.forEach(function(button) {
        button.disabled = !playing;
    });
}

function addComment(event) {
    event.preventDefault();
    var commentInput = document.getElementById("comment-input");
    var comment = commentInput.value;
    commentInput.value = "";

    var commentsList = document.querySelector(".comments");
    var newComment = document.createElement("p");
    newComment.innerText = comment;
    commentsList.appendChild(newComment);
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function() {
    interval = startTimer();

    var minusButton = document.getElementById("minus");
    var plusButton = document.getElementById("plus");
    var heartButton = document.getElementById("heart");
    var pauseButton = document.getElementById("pause");
    var commentForm = document.getElementById("comment-form");

    minusButton.addEventListener("click", decreaseCounter);
    plusButton.addEventListener("click", increaseCounter);
    heartButton.addEventListener("click", likeNumber);
    pauseButton.addEventListener("click", togglePause);
    commentForm.addEventListener("submit", addComment);
});
