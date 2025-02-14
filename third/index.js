const form = document.querySelector("body>form");

form.style.border = "1px solid";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#q");
  console.log(name.value);

  const password = document.querySelector("#w");
  console.log(password.value);

  const birth = document.querySelector("#e");
  console.log(birth.value);
});
