const body = document.querySelector("body");

const btn = document.querySelector(".card-component .btn");

const img = document.querySelector(".card-component img");

const url =
  "https://cdn.pixabay.com/photo/2020/04/07/05/57/croatia-5012151_640.jpg";

img.src = url;

btn.onclick = () => {
  const a = document.createElement("a");
  a.href = url;

  if (confirm("해당 이미지를 다운로드 하시겠습니까?")) {
    a.click();
  } else {
    alert("흥 칫 뿡");
  }
};

const viewBtn = document.createElement("button");
let isCard = false;
viewBtn.innerText = "전체이미지";

viewBtn.onclick = () => {
  viewBtn.innerText = !isCard ? "카드" : "전체이미지";

  const card = document.querySelector(".card-component");
  card.className = !isCard ? "card-component fv" : "card-component";

  isCard = !isCard;
};

body.append(viewBtn);
