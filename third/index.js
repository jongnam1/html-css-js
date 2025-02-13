const login = document.querySelector("#login");

const modal = document.querySelector("div.login-modal");

login.onclick = () => {
  alert("로그인 모달 나와라");

  modal.style.display = "block";
};

const closeBtn = document.querySelector(".login-modal > button");

closeBtn.onclick = () => {
  modal.style.display = "none";
};
