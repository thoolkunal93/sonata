"use strict";

import { factory } from "./factory";

/**
 * Setting dom values into variables
 */
const error = document.getElementById("error");

const start_at_control = document.getElementById("start_at");

const step_control = document.getElementById("step");

const count_button = document.querySelector(".count_button");

const current_count = document.querySelector(".current_count");

/**
 * Adding event lisners
 */
start_at_control.addEventListener("change", () => {
  update_count_and_reset_counter();
});

step_control.addEventListener("change", () => {
  update_count_and_reset_counter();
});

count_button.addEventListener("click", update_count);

/**
 * Funtion for reseting counters when start or step is changed
 */
function update_count_and_reset_counter() {
  let start = parseInt(start_at_control.value);
  let end   = parseInt(step_control.value);

  if (isNaN(start) || isNaN(end)) {
      error.innerHTML = "Please enter valid number.";
      return;
  }

  current_count.innerHTML = factory(start, end)();

  error.innerHTML = "";
}


/**
 * update_count for button click
 */
function update_count() {
  current_count.innerHTML = factory(
    parseInt(current_count.innerHTML),
    parseInt(step_control.value)
  )();
}

//Calling for page load
update_count_and_reset_counter();