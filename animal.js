const body = document.body;
const button = document.createElement("button");
button.innerText = "유기동물 살리기";
const h1 = document.createElement("h1");

const loading = document.createElement("div");
loading.innerHTML = `<p>Loading...</p>`;

const onLoading = () => {
  loading.className = "loading on";
};

const onDone = () => {
  loading.className = "loading off";
};
h1.innerText =
  "매년 11만 이상의 유기동물이 발생하고 그 중 80%는 안락사 된다는 사실, 알고 계신가요?";

const base_url =
  "http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic";
const key =
  "MW5AXazYOfZoz46a1oVy%2FFPMg3H%2BA0o010oRwOwTSOVEyVdSSNAQ%2BZEI6PATXgaXh7GX8YR87w93PK9KBB74jw%3D%3D";

const targets = [
  "desertionNo",
  "filename",
  "happenDt",
  "happenPlace",
  "kindCd",
  "age",
  "colorCd",
  "weight",
  "noticeNo",
  "noticeSdt",
  "noticeEdt",
  "popfile",
  "processState",
  "sexCd",
  "neuterYn",
  "specialMark",
  "careNm",
  "careTel",
  "careAddr",
  "orgNm",
  "chargeNm",
  "officetel",
];

let animals = [];
const fetchAnimals = async (page) => {
  onLoading();
  //! ? parameter / 주소를 변경 ? param 추가 추가할 값 = 값
  //! & parameter를 추가

  const url = `${base_url}?serviceKey=${key}&numOfRows=50&pageNo=${page ?? 1}`; // ?? 값이 없을 때의 값을 ?? 뒤에 넣어줌

  const res = await fetch(url);

  const data = await res.text();

  const xmlParser = new DOMParser();
  const xml = xmlParser.parseFromString(data, "text/xml");
  const items = xml.getElementsByTagName("item");

  let values = [];

  for (let item of items) {
    let value = {};

    targets.forEach((target) => {
      value[target] = item.getElementsByTagName(target)[0].textContent;
    });

    values.push(value);
  }

  animals = values;
  onDone;
};

const ul = document.createElement("ul");
const renderAnimals = () => {
  ul.innerHTML = null;

  animals.forEach((animal) => {
    const imgWrap = document.createElement("div");
    const img = document.createElement("img");
    img.src = animal.popfile;

    imgWrap.append(img);

    const textWrap = document.createElement("div");
    const p1 = document.createElement("p");
    p1.innerText = `${animal.kindCd}${animal.age}${animal.sexCd},${animal.weight}`;

    const p2 = document.createElement("p");
    p2.innerText = `${animal.processState}, ${animal.officetel}`;

    textWrap.append(p1, p2);

    const li = document.createElement("li");

    li.addEventListener("click", () => console.log(animal));

    li.append(imgWrap, textWrap);

    ul.append(li);
  });
};

fetchAnimals().then(renderAnimals);
button.addEventListener("click", () => {});

const pages = document.createElement("ul");
pages.style.display = "flex";
pages.style.columnGap = "10px";

let buttons = Array.from({ length: 5 }, () => document.createElement("button"));

buttons.forEach((btn, index) => {
  btn.innerText = index + 1;
  btn.addEventListener("click", () => {
    fetchAnimals(index + 1).then(renderAnimals);
  });

  pages.append(btn);
});

body.append(loading, h1, button, ul, pages);
