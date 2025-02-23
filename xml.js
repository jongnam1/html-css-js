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
  const url = `${base_url}?serviceKey=${key}&numOfRows=20&pageNo=${
    page ? page : 1
  }`;

  const res = await fetch(url);

  const xml = await res.text(); //text/xml

  const parser = new DOMParser();

  const docs = parser.parseFromString(xml, "text/xml");

  const data = docs.getElementsByTagName("item");

  let items = [];

  for (let item of data) {
    let data = {};

    targets.forEach(
      (target) =>
        (data[target] = item.getElementsByTagName(target)[0].textContent)
    );

    items.push(data);
  }
  animals = items;
  onDone();
};

const ul = document.createElement("ul");
const renderAnimals = () => {
  ul.innerHTML = null;
  animals.forEach((animal) => {
    const li = document.createElement("li");
    li.addEventListener("click", () => {
      console.log(animal);
    });
    const wrap = document.createElement("div");
    const title = document.createElement("p");
    const dates = document.createElement("p");

    title.innerText = `${animal.kindCd} ${animal.age} ${animal.sexCd}`;
    dates.innerText = `발견 장소 및 시기: ${animal.happenPlace}, ${animal.happenDt}`;
    wrap.append(title, dates);

    const imgWrap = document.createElement("div");
    const img = document.createElement("img");
    img.src = animal.popfile;
    imgWrap.append(img);
    li.append(imgWrap, wrap);
    ul.append(li);
  });
};

fetchAnimals().then(renderAnimals);

button.addEventListener("click", () => {
  console.log(animals);
  renderAnimals();
});

const pages = document.createElement("ul");
pages.style.display = "flex";
pages.style.columnGap = "10px";

let buttons = Array.from({ length: 5 }, () => document.createElement("button"));

buttons.forEach((btn, index) => {
  btn.style.width = "40px";
  btn.style.height = "40px";
  btn.innerText = index + 1;
  btn.addEventListener("click", async () => {
    console.log("fetching new page");
    await fetchAnimals(index + 1);
    console.log("rendering...");
    renderAnimals();
    console.log("rendered");
  });
  pages.append(btn);
});

body.append(loading, h1, button, ul, pages);
