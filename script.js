let totalPrice = 18.0;

function selectOption(units, price, element) {
  const isExpanded = element.classList.contains("expanded");

  document.querySelectorAll(".option").forEach((option) => {
    if (option !== element) {
      option.classList.remove("expanded", "selected");
      option.style.borderColor = "#ddd";
      option.style.backgroundColor = "";
      const label = option.querySelector(".unit-label");
      if (label) label.style.color = "";
      const radioButton = option.querySelector("input[type='radio']");
      if (radioButton) radioButton.checked = false;
    }
  });

  if (!isExpanded) {
    element.classList.add("expanded", "selected");
    element.style.borderColor = "#ff66b2";
    element.style.backgroundColor = "rgba(255, 204, 234, 0.1)";

    const radioButton = element.querySelector("input[type='radio']");
    if (radioButton) {
      radioButton.checked = true;
    }

    const label = element.querySelector(".unit-label");
    if (label) label.style.color = "#ff6b82";

    totalPrice = price;
  }

  document.querySelector(".total").innerText = `Total : $${totalPrice.toFixed(
    2
  )} USD`;
}

document.querySelectorAll(".option select").forEach((dropdown) => {
  dropdown.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});
