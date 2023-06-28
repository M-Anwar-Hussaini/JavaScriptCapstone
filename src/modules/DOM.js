import Countries from './rest_countries.js';

class DOM {
  constructor() {
    this.countries = new Countries();
    this.container = document.querySelector('.wrapper');
  }

  createHtmlContent = async (country) => {
    const countryInfo = this.countries.getCountryShortInfo(country);
    const html = `
    <article class="wrapper__card">
      <img class="wrapper__card__img" src="${
        (await countryInfo).flagURl
      }" alt="${(await countryInfo).name}" />
      <div class="wrapper__card__details">
        <h3 class="wrapper__card__details__title">${
          (await countryInfo).name
        }</h3>
        <div class="wrapper__card__details__likes">
          <button class="wrapper__card__details__likes-btn"><i class="bi bi-heart-fill"></i></button>
          <p></p>
        </div>
      </div>
      <button class="wrapper__card__comments-btn card__btn">Comments</button>
    </article>
    `;
    return html;
  };

  displayAllCountries = async () => {
    this.container.innerHTML = '';
    const countries = this.countries.getSelectedCountries();
    const promises = countries.map((country) => this.createHtmlContent(country));
    const htmlContents = await Promise.all(promises);
    htmlContents.forEach((html) => {
      this.container.insertAdjacentHTML('beforeend', html);
    });
  };
}

export default DOM;
