/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/js/app.js
const tbody = document.getElementsByTagName("tbody");
const board = document.getElementById("board");
const img = document.createElement("img");
const hit = document.querySelector(".yes-score");
const miss = document.querySelector(".no-score");
img.classList.add("goblin");
let previosNum;
const allowedIndexes = [];
for (let i = 0; i < 16; i += 1) allowedIndexes.push(i);
const randomNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
setInterval(() => {
  const num = randomNum(0, allowedIndexes.length - 1);
  const index = allowedIndexes.findIndex(item => item === allowedIndexes[num]);
  const boxes = document.querySelectorAll(".box");
  boxes[index].append(img);
  previosNum = allowedIndexes[num];
  allowedIndexes.splice(index, 1);
  if (previosNum) allowedIndexes.push(previosNum);
}, 700);
board.addEventListener("click", function (e) {
  if (e.target === img) {
    hit.innerText = Number(hit.innerText) + 1;
  } else if (e.target.classList.contains("box")) {
    miss.innerText = Number(miss.innerText) + 1;
  }
});
const response = [{
  id: 26,
  title: "Побег из Шоушенка",
  imdb: 9.3,
  year: 1994
}, {
  id: 25,
  title: "Крёстный отец",
  imdb: 9.2,
  year: 1972
}, {
  id: 27,
  title: "Крёстный отец 2",
  imdb: 9.0,
  year: 1974
}, {
  id: 1047,
  title: "Тёмный рыцарь",
  imdb: 9.0,
  year: 2008
}, {
  id: 223,
  title: "Криминальное чтиво",
  imdb: 8.9,
  year: 1994
}];
for (let i = 0; i < response.length; i += 1) {
  const tr = document.createElement("tr");
  tr.dataset["id"] = response[i].id;
  tr.dataset["title"] = response[i].title;
  tr.dataset["imdb"] = response[i].imdb.toFixed(2);
  tr.dataset["year"] = response[i].year;
  const tdId = document.createElement("td");
  tdId.innerText = `#${tr.dataset["id"]}`;
  const tdTitile = document.createElement("td");
  tdTitile.innerText = `${tr.dataset["title"]}`;
  const tdImdb = document.createElement("td");
  tdImdb.innerText = `imdb: ${tr.dataset["imdb"]}`;
  const tdYear = document.createElement("td");
  tdYear.innerText = `(${tr.dataset["year"]})`;
  tr.append(tdId, tdTitile, tdYear, tdImdb);
  const tbody = document.getElementsByTagName("tbody");
  tbody[0].append(tr);
}
const tableId = document.getElementById("id");
tableId.addEventListener("click", function (e) {
  if (e.target.innerText === `id↓`) {
    e.target.innerText = `id↑`;
    tableTitle.innerText = "title";
    tableYear.innerText = "year";
    tableImdb.innerText = "imdb";
    const adllTr = Array.from(document.getElementsByTagName("tr"));
    adllTr.sort((a, b) => {
      if (Number(a.dataset.id) > Number(b.dataset.id)) return -1;
      if (Number(a.dataset.id) < Number(b.dataset.id)) return 1;
      return 0;
    });
    const newTbody = document.createElement("tbody");
    newTbody.append(adllTr[1], adllTr[2], adllTr[3], adllTr[4], adllTr[5]);
    const table = document.querySelector(".table");
    table.replaceChild(newTbody, tbody[0]);
  } else {
    e.target.innerText = `id↓`;
    tableTitle.innerText = "title";
    tableYear.innerText = "year";
    tableImdb.innerText = "imdb";
    const adllTr = Array.from(document.getElementsByTagName("tr"));
    adllTr.sort((a, b) => {
      if (Number(a.dataset.id) > Number(b.dataset.id)) return 1;
      if (Number(a.dataset.id) < Number(b.dataset.id)) return -1;
      return 0;
    });
    const newTbody = document.createElement("tbody");
    newTbody.append(adllTr[1], adllTr[2], adllTr[3], adllTr[4], adllTr[5]);
    const table = document.querySelector(".table");
    table.replaceChild(newTbody, tbody[0]);
  }
});
const tableTitle = document.getElementById("title");
tableTitle.addEventListener("click", function (e) {
  if (e.target.innerText === `title↓`) {
    e.target.innerText = `title↑`;
    tableId.innerText = "id";
    tableYear.innerText = "year";
    tableImdb.innerText = "imdb";
    const adllTr = Array.from(document.getElementsByTagName("tr"));
    adllTr.sort((a, b) => {
      if (a.dataset.title > b.dataset.title) return -1;
      if (a.dataset.title < b.dataset.title) return 1;
      return 0;
    });
    const newTbody = document.createElement("tbody");
    newTbody.append(adllTr[1], adllTr[2], adllTr[3], adllTr[4], adllTr[5]);
    const table = document.querySelector(".table");
    table.replaceChild(newTbody, tbody[0]);
  } else {
    e.target.innerText = `title↓`;
    tableId.innerText = "id";
    tableYear.innerText = "year";
    tableImdb.innerText = "imdb";
    const adllTr = Array.from(document.getElementsByTagName("tr"));
    adllTr.sort((a, b) => {
      if (a.dataset.title > b.dataset.title) return 1;
      if (a.dataset.title < b.dataset.title) return -1;
      return 0;
    });
    const newTbody = document.createElement("tbody");
    newTbody.append(adllTr[1], adllTr[2], adllTr[3], adllTr[4], adllTr[5]);
    const table = document.querySelector(".table");
    table.replaceChild(newTbody, tbody[0]);
  }
});
const tableYear = document.getElementById("year");
tableYear.addEventListener("click", function (e) {
  if (e.target.innerText === `year↓`) {
    e.target.innerText = `year↑`;
    tableId.innerText = "id";
    tableTitle.innerText = "title";
    tableImdb.innerText = "imdb";
    const adllTr = Array.from(document.getElementsByTagName("tr"));
    adllTr.sort((a, b) => {
      if (Number(a.dataset.year) > Number(b.dataset.year)) return -1;
      if (Number(a.dataset.year) < Number(b.dataset.year)) return 1;
      return 0;
    });
    const newTbody = document.createElement("tbody");
    newTbody.append(adllTr[1], adllTr[2], adllTr[3], adllTr[4], adllTr[5]);
    const table = document.querySelector(".table");
    table.replaceChild(newTbody, tbody[0]);
  } else {
    e.target.innerText = `year↓`;
    tableId.innerText = "id";
    tableTitle.innerText = "title";
    tableImdb.innerText = "imdb";
    const adllTr = Array.from(document.getElementsByTagName("tr"));
    adllTr.sort((a, b) => {
      if (Number(a.dataset.year) > Number(b.dataset.year)) return 1;
      if (Number(a.dataset.year) < Number(b.dataset.year)) return -1;
      return 0;
    });
    const newTbody = document.createElement("tbody");
    newTbody.append(adllTr[1], adllTr[2], adllTr[3], adllTr[4], adllTr[5]);
    const table = document.querySelector(".table");
    table.replaceChild(newTbody, tbody[0]);
  }
});
const tableImdb = document.getElementById("imdb");
tableImdb.addEventListener("click", function (e) {
  if (e.target.innerText === `imdb↓`) {
    e.target.innerText = `imdb↑`;
    tableId.innerText = "id";
    tableTitle.innerText = "title";
    tableYear.innerText = "year";
    const adllTr = Array.from(document.getElementsByTagName("tr"));
    adllTr.sort((a, b) => {
      if (parseFloat(a.dataset.imdb) > parseFloat(b.dataset.imdb)) return -1;
      if (parseFloat(a.dataset.imdb) < parseFloat(b.dataset.imdb)) return 1;
      return 0;
    });
    const newTbody = document.createElement("tbody");
    newTbody.append(adllTr[1], adllTr[2], adllTr[3], adllTr[4], adllTr[5]);
    const table = document.querySelector(".table");
    table.replaceChild(newTbody, tbody[0]);
  } else {
    e.target.innerText = `imdb↓`;
    tableId.innerText = "id";
    tableTitle.innerText = "title";
    tableYear.innerText = "year";
    const adllTr = Array.from(document.getElementsByTagName("tr"));
    adllTr.sort((a, b) => {
      if (parseFloat(a.dataset.imdb) > parseFloat(b.dataset.imdb)) return 1;
      if (parseFloat(a.dataset.imdb) < parseFloat(b.dataset.imdb)) return -1;
      return 0;
    });
    const newTbody = document.createElement("tbody");
    newTbody.append(adllTr[1], adllTr[2], adllTr[3], adllTr[4], adllTr[5]);
    const table = document.querySelector(".table");
    table.replaceChild(newTbody, tbody[0]);
  }
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;