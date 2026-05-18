"use strict";

export const exerciseGrades = [0, 0, 0, 0, 0, 0, 0, 0];

export let examGrade = 0;
export let presence = 0;

const MAX_POINTS = 100;

export function pointsExercise(index, points) {
    points = Number(points);

    if (points >= 0 && points <= MAX_POINTS) {
        exerciseGrades[index] = points;
    }
}

export function pointsExam(points) {
    points = Number(points);

    if (points >= 0 && points <= MAX_POINTS) {
        examGrade = points;
    }
}

export function setPresence(value) {
    value = Number(value);

    if (value >= 0 && value <= 100) {
        presence = value;
    }
}

export function checkPresence() {
    return presence >= 80;
}

export function checkPointPositive(points) {
    return points > 50;
}

export function getWorstExerciseIndex() {
    let worstIndex = 0;

    for (let i = 1; i < exerciseGrades.length; i++) {
        if (exerciseGrades[i] < exerciseGrades[worstIndex]) {
            worstIndex = i;
        }
    }

    return worstIndex;
}

export function calcExerciseGrade() {
    let worstIndex = getWorstExerciseIndex();
    let sum = 0;

    for (let i = 0; i < exerciseGrades.length; i++) {
        if (i !== worstIndex) {
            sum = sum + exerciseGrades[i];
        }
    }

    return sum / 7;
}

export function enoughPositiveExercises() {
    let positiveCount = 0;

    for (let i = 0; i < exerciseGrades.length; i++) {
        if (checkPointPositive(exerciseGrades[i])) {
            positiveCount++;
        }
    }

    return positiveCount >= 6;
}

export function calcOverallPercent() {
    let exerciseGrade = calcExerciseGrade();

    return exerciseGrade * 0.6 + examGrade * 0.4;
}

export function calcFinalGrade() {
    let exerciseGrade = calcExerciseGrade();
    let overallPercent = calcOverallPercent();

    if (!checkPointPositive(exerciseGrade)) {
        return "Nicht Genügend";
    }

    if (!checkPointPositive(examGrade)) {
        return "Nicht Genügend";
    }

    if (!enoughPositiveExercises()) {
        return "Nicht Genügend";
    }

    if (!checkPresence()) {
        return "Nicht Genügend";
    }

    if (overallPercent <= 50) {
        return "Nicht Genügend";
    } else if (overallPercent <= 61) {
        return "Genügend";
    } else if (overallPercent <= 74) {
        return "Befriedigend";
    } else if (overallPercent <= 86) {
        return "Gut";
    } else {
        return "Sehr gut";
    }
}