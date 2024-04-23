import { factory } from "./factory";

let count = factory(0, 1);

function update_count_and_reset_counter() {
  let start = parseInt(start_at_control.value);
  let end = parseInt(step_control.value);

  if (isNaN(start) || isNaN(end)) {
      error.innerHTML = "Please enter valid number.";
      return;
  }

  const count = factory();
  
  current_count.innerHTML = count();

  error.innerHTML = "";
}

const error = document.getElementById("error");

const start_at_control = document.getElementById(
  "start_at",
) as HTMLInputElement;

const step_control = document.getElementById("step") as HTMLInputElement;

start_at_control?.addEventListener("change", () => {
  update_count_and_reset_counter();
});

step_control?.addEventListener("change", () => {
  update_count_and_reset_counter();
});

const count_button = document.querySelector(
  ".count_button",
) as HTMLButtonElement;

const current_count = document.querySelector(
  ".current_count",
) as HTMLSpanElement;

function update_count() {
  const count = factory(parseInt(current_count.innerHTML),  parseInt(step_control.value));
  current_count.innerHTML = count();
}

count_button.addEventListener("click", update_count);

