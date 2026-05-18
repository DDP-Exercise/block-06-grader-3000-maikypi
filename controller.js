"use strict";

import {
    pointsExercise,
    pointsExam,
    setPresence,
    calcFinalGrade
} from "./model.js";

import {
    createInput,
    showResult
} from "./view.js";


/* Übungen Container holen */
let exercisesDiv = document.querySelector("#exercises");

/* 8 Übungsfelder erstellen */
for (let i = 0; i < 8; i++) {

    let input = createInput("Übung " + (i + 1), 0, 100, 0);

    /* ins HTML einfügen */
    exercisesDiv.appendChild(input.parentElement);

    /* Event Listener */
    input.addEventListener("change", function () {

        pointsExercise(i, input.value);

        updateResult();
    });
}


/* Klausurfeld */
let examDiv = document.querySelector("#exam");

let examInput = createInput("Klausur", 0, 100, 0);

examDiv.appendChild(examInput.parentElement);

examInput.addEventListener("change", function () {

    pointsExam(examInput.value);

    updateResult();
});


/* Anwesenheit */
let presenceDiv = document.querySelector("#presence");

let presenceInput = createInput("Anwesenheit", 0, 100, 0);

presenceDiv.appendChild(presenceInput.parentElement);

presenceInput.addEventListener("change", function () {

    setPresence(presenceInput.value);

    updateResult();
});


/* Ergebnis aktualisieren */
function updateResult() {

    let grade = calcFinalGrade();

    showResult("Gesamtnote: " + grade);
}