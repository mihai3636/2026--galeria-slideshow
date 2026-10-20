import { loadData } from "./data.js";

const html = /*html*/ `
    <div class="container">
      <div class="gallery flow-content">
      </div>
    </div>
`;

const onLoad = () => {
  console.log("Home Module onLoad called");
  console.log("Hiding footer");

  document.querySelector("footer").hidden = true;

  console.log("Going to load data");
  prepareData();
};

const cleanup = () => {
  console.log("Home module cleanup called");
};

async function prepareData() {
  const data = await loadData();

  console.log(data);
  const galleryEl = document.querySelector(".gallery");

  data.forEach((element) => {
    let card = createCard(element);
    galleryEl.innerHTML += card;
  });
}

function createCard(item) {
  return /*html*/ `
        <article class="card">
          <a href="#article/${item.name}">
            <img
              class="card__img"
              src="${item.images.thumbnail}"
              alt="Starry night tableau"
            />
          </a>

          <div class="card__info flow-content">
            <h2 class="card__title tp-2-m">${item.name}</h2>
            <p class="card__author tp-5">${item.artist.name}</p>
          </div>
        </article>
  `;
}

export default { html, onLoad, cleanup };
