const html = /*html*/ `
      <div class="container">
        <div class="heading">
          <!-- Here we will put the h1 title, author picc and large img -->
          <div class="heading__hero">
            <picture>
              <source
                media="(min-width: 43.75rem)"
                srcset="./assets/starry-night/hero-large.jpg"
              />
              <img
                src="./assets/starry-night/hero-small.jpg"
                alt="Starry night"
              />
            </picture>
            <button class="expand heading__btn">
              <img
                class="expand__icon"
                src="./assets/shared/icon-view-image.svg"
                alt="View image icon"
              />
              <span class="expand__text tp-7">VIEW IMAGE </span>
            </button>
          </div>

          <div class="heading__subhero">
            <div class="heading__text flow-content">
              <h1 class="heading__title tp-2-m sm:tp-2">Starry Night</h1>
              <p class="heading__author tp-4">Vincent Van Gogh</p>
            </div>

            <img
              class="heading__img-author"
              src="./assets//starry-night/artist.jpg"
              alt="Vincent Van Gogh"
            />
          </div>
        </div>
        <div class="info">
          <span id="textYear" class="info__year tp-1-m sm:tp-1">1889</span>
          <div class="info__wrapper flow-content">
            <p id="textInfo" class="info__text tp-3-m">
              Although The Starry Night was painted during the day in Van Gogh's
              ground-floor studio, it would be inaccurate to state that the
              picture was painted from memory. The view has been identified as
              the one from his bedroom window, facing east, a view which Van
              Gogh painted variations of no fewer than twenty-one times,
              including The Starry Night. "Through the iron-barred window," he
              wrote to his brother, Theo, around 23 May 1889, "I can see an
              enclosed square of wheat ... above which, in the morning, I watch
              the sun rise in all its glory."
            </p>
            <a href="#" class="info__source tp-5-m uppercase">Go to source</a>
          </div>
        </div>
      </div>
`;

const onLoad = () => {
  console.log("Article loaded");
  console.log("Showing the footer");

  document.querySelector("footer").hidden = false;
};

const cleanup = () => {
  console.log("Article cleanup");
};

export default { html, onLoad, cleanup };
