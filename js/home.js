const html = /*html*/ `
    <div class="container">
      <div class="gallery flow-content">
        <article class="card">
          <a href="#article">
            <img
              class="card__img"
              src="./assets/starry-night/thumbnail.jpg"
              alt="Starry night tableau"
            />
          </a>

          <div class="card__info flow-content">
            <h2 class="card__title tp-2-m">Starry Night</h2>
            <p class="card__author tp-5">Vincent Van Gogh</p>
          </div>
        </article>
        <article class="card">
          <a href="#article">
            <img
              class="card__img"
              src="./assets/girl-with-pearl-earring/thumbnail.jpg"
              alt="Girl with a Pearl Earring"
            />
          </a>
          <div class="card__info flow-content">
            <h2 class="card__title tp-2-m">Girl with a Pearl Earring</h2>
            <p class="card__author tp-5">Johannes Vermeer</p>
          </div>
        </article>
        <article class="card">
          <a href="#article">
            <img
              class="card__img"
              src="./assets/guernica/thumbnail.jpg"
              alt="Guernica"
            />
          </a>
          <div class="card__info flow-content">
            <h2 class="card__title tp-2-m">Guernica</h2>
            <p class="card__author tp-5">Pablo Picasso</p>
          </div>
        </article>
        <article class="card">
          <a href="#article">
            <img
              class="card__img"
              src="./assets/penitent-magdalene/thumbnail.jpg"
              alt="Penitent Magdalene"
            />
          </a>
          <div class="card__info flow-content">
            <h2 class="card__title tp-2-m">Penitent Magdalene</h2>
            <p class="card__author tp-5">Artemisia Gentileschi</p>
          </div>
        </article>
        <article class="card">
          <a href="#article">
            <img
              class="card__img"
              src="./assets/the-storm-on-the-sea-of-galilee/thumbnail.jpg"
              alt="The Storm on the Sea of Galilee"
            />
          </a>
          <div class="card__info flow-content">
            <h2 class="card__title tp-2-m">The Storm on the Sea of Galilee</h2>
            <p class="card__author tp-5">Rembrandt</p>
          </div>
        </article>
        <article class="card">
          <a href="#article">
            <img
              class="card__img"
              src="./assets/the-great-wave-off-kanagawa/thumbnail.jpg"
              alt="The Great Wave off Kanagawa Hokusai"
            />
          </a>
          <div class="card__info flow-content">
            <h2 class="card__title tp-2-m">The Great Wave off Kanagawa</h2>
            <p class="card__author tp-5">Hokusai</p>
          </div>
        </article>
        <article class="card">
          <a href="#article">
            <img
              class="card__img"
              src="./assets/van-gogh-self-portrait/thumbnail.jpg"
              alt="Van Gogh Self-portrait"
            />
          </a>
          <div class="card__info flow-content">
            <h2 class="card__title tp-2-m">Van Gogh Self-portrait</h2>
            <p class="card__author tp-5">Vincent Van Gogh</p>
          </div>
        </article>
        <article class="card">
          <a href="#article">
            <img
              class="card__img"
              src="./assets/the-sleeping-gypsy/thumbnail.jpg"
              alt="The Sleeping Gypsy"
            />
          </a>
          <div class="card__info flow-content">
            <h2 class="card__title tp-2-m">The Sleeping Gypsy</h2>
            <p class="card__author tp-5">Henri Rousseau</p>
          </div>
        </article>
        <article class="card">
          <a href="#article">
            <img
              class="card__img"
              src="./assets/lady-with-an-ermine/thumbnail.jpg"
              alt="Lady with an Ermine"
            />
          </a>
          <div class="card__info flow-content">
            <h2 class="card__title tp-2-m">Lady with an Ermine</h2>
            <p class="card__author tp-5">Leonardo da Vinci</p>
          </div>
        </article>
        <article class="card">
          <a href="#article">
            <img
              class="card__img"
              src="./assets/the-night-cafe/thumbnail.jpg"
              alt="The Night Café"
            />
          </a>
          <div class="card__info flow-content">
            <h2 class="card__title tp-2-m">The Night Café</h2>
            <p class="card__author tp-5">Vincent Van Gogh</p>
          </div>
        </article>
        <article class="card">
          <a href="#article">
            <img
              class="card__img"
              src="./assets/the-basket-of-apples/thumbnail.jpg"
              alt="The Basket of Apples"
            />
          </a>
          <div class="card__info flow-content">
            <h2 class="card__title tp-2-m">The Basket of Apples</h2>
            <p class="card__author tp-5">Paul Cézanne</p>
          </div>
        </article>
        <article class="card">
          <a href="#article">
            <img
              class="card__img"
              src="./assets/the-boy-in-the-red-vest/thumbnail.jpg"
              alt="The Boy in the Red Vest"
            />
          </a>
          <div class="card__info flow-content">
            <h2 class="card__title tp-2-m">The Boy in the Red Vest</h2>
            <p class="card__author tp-5">Paul Cézanne</p>
          </div>
        </article>
        <article class="card">
          <a href="#article">
            <img
              class="card__img"
              src="./assets/arnolfini-portrait/thumbnail.jpg"
              alt="Arnolfini Portrait"
            />
          </a>
          <div class="card__info flow-content">
            <h2 class="card__title tp-2-m">Arnolfini Portrait</h2>
            <p class="card__author tp-5">Jan van Eyck</p>
          </div>
        </article>
        <article class="card">
          <a href="#article">
            <img
              class="card__img"
              src="./assets/mona-lisa/thumbnail.jpg"
              alt="Mona Lisa"
            />
          </a>
          <div class="card__info flow-content">
            <h2 class="card__title tp-2-m">Mona Lisa</h2>
            <p class="card__author tp-5">Leonardo da Vinci</p>
          </div>
        </article>
        <article class="card">
          <a href="#article">
            <img
              class="card__img"
              src="./assets/the-swing/thumbnail.jpg"
              alt="The Swing"
            />
          </a>
          <div class="card__info flow-content">
            <h2 class="card__title tp-2-m">The Swing</h2>
            <p class="card__author tp-5">Jean-Honoré Fragonard</p>
          </div>
        </article>
      </div>
    </div>
`;

const onLoad = () => {
  console.log("Home Module onLoad called");
  console.log("Hiding footer");

  document.querySelector("footer").hidden = true;
};

const cleanup = () => {
  console.log("Home module cleanup called");
};

export default { html, onLoad, cleanup };
