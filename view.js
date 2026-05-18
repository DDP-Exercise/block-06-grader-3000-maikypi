"use strict";

export function createInput(labelText, min, max, value) {
    let div = document.createElement("div");

    let label = document.createElement("label");
    label.textContent = labelText + ": ";

    let input = document.createElement("input");
    input.type = "number";
    input.min = min;
    input.max = max;
    input.value = value;

    div.appendChild(label);
    div.appendChild(input);

    return input;
}

export function showResult(text) {
    let resultDiv = document.querySelector("#result");
    resultDiv.textContent = text;
}