const form = document.getElementById("form");
const emailInput = document.querySelector(".email");
const resultText = document.querySelector(".text");
const pattern = /^([a-z\d\.\-]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

// use the match method  (match)
emailInput.addEventListener("input", () => {
  const emailValue = emailInput.value;

  if (emailValue.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    resultText.textContent = "Your email is in the right format";
    resultText.style.color = "#00ff00";
  } else {
    form.classList.add("invalid");
    form.classList.remove("valid");
    resultText.textContent = "Your email is not in the correct format";
    resultText.style.color = "#ff0000";
  }

  if (emailValue === "") {
    form.classList.remove("invalid");
    form.classList.remove("valid");
    resultText.textContent = "";
  }
});
