"use strict";

import {
    pointsExercise,
    pointsExam,
    setPresence,
    calcFinalGrade,
    calcOverallPercent,
    calcExerciseGrade,
    getWorstExerciseIndex,
    getNegativeReasons
} from "./model.js";

import {
    createInput,
    showResult
} from "./view.js";


/* get the exercises from container */
let exercisesDiv = document.querySelector("#exercises");

/* 8 Übungsfelder erstellen */
for (let i = 0; i < 8; i++) {

    let input = createInput("Übung " + (i + 1), 0, 100, 0);

    /* put it into HTML */
    exercisesDiv.appendChild(input.parentElement);

    /* Event Listener */
    input.addEventListener("change", function () {

        pointsExercise(i, input.value);

        updateResult();
    });
}


/* Exam  */
let examDiv = document.querySelector("#exam");

let examInput = createInput("Klausur", 0, 100, 0);

examDiv.appendChild(examInput.parentElement);

examInput.addEventListener("change", function () {

    pointsExam(examInput.value);

    updateResult();
});


/* presence */
let presenceDiv = document.querySelector("#presence");

let presenceInput = createInput("Anwesenheit", 0, 100, 0);

presenceDiv.appendChild(presenceInput.parentElement);

presenceInput.addEventListener("change", function () {

    setPresence(presenceInput.value);

    updateResult();
});


/* Update the results */
function updateResult() {

    let grade = calcFinalGrade();
    let percent = calcOverallPercent();
    let exercisePercent = calcExerciseGrade();
    let worstIndex = getWorstExerciseIndex();
    let reasons = getNegativeReasons();

    let text =
        "Übungsnote: " + exercisePercent.toFixed(2) + "%\n" +
        "Gesamtprozent: " + percent.toFixed(2) + "%\n" +
        "Streichergebnis: Übung " + (worstIndex + 1) + "\n" +
        "Gesamtnote: " + grade;

    if (reasons.length > 0) {

        text = text + "\n\nWarum negativ?\n";

        for (let i = 0; i < reasons.length; i++) {
            text = text + reasons[i] + "\n";
        }
    }

    showResult(text);


    let allInputs = document.querySelectorAll("#exercises input");

    for (let i = 0; i < allInputs.length; i++) {

        allInputs[i].style.backgroundColor = "";

        if (i === worstIndex) {
            allInputs[i].style.backgroundColor = "gray";
        }
    }
}