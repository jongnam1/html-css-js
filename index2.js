const json = document.querySelector("#json");

json.addEventListener("click", async () => {
  const res = await fetch("http://127.0.0.1:5500/animals.json");

  console.log(res);

  const data = await res.json();

  console.log(data);
});

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

const animal = document.querySelector("#animals");

animal.addEventListener("click", async () => {
  console.log("fetch Animal");

  const url = `${base_url}?serviceKey=${key}`;

  const res = await fetch(url);

  const data = await res.text();

  const xmlParser = new DOMParser();
  const xml = xmlParser.parseFromString(data, "text/xml");

  const items = xml.getElementsByTagName("item");

  //Todo : nested loop

  let values = [];

  for (let item of items) {
    let value = {};

    targets.forEach((target) => {
      value[target] = item.getElementsByTagName(target)[0].textContent;
    });
    console.log(value);
    values.push(value);
  }

  console.log(values);
});

const fn2 = (from, to) => {
  console.log({ from, to });
};

fn2("dexter, 'eva");
