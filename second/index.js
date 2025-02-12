document.write("Ready to go");

// const 막내 = document.querySelector("body > div > div > div:last-child");
// querySelector = css규칙 그대로 적용됨

// 막내.style.color = "tomato";

const id = document.querySelector("#find_id");
const pw = document.querySelector("#find_pw");
const sign = document.querySelector("#sign_up");

id.onclick = () => {
  alert("아이디를 찾으시겠습니까?");
  id.style.color = "blue";
  pw.style.color = "black";
  sign.style.color = "black";
};
pw.onclick = () => {
  alert("비밀번호를 찾으시겠습니까?");
  id.style.color = "black";
  pw.style.color = "blue";
  sign.style.color = "black";
};
sign.onclick = () => {
  alert("회원가입 하시겠습니까?");
  id.style.color = "black";
  pw.style.color = "black";
  sign.style.color = "blue";
};
