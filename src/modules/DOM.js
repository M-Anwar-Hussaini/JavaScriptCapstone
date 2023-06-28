import Countries from './rest_countries.js';
import Involvement from './involvement.js';
import PopUp from './popUp.js';

class DOM {
  constructor() {
    this.countries = new Countries();
    this.container = document.querySelector('.wrapper');
    this.involvement = new Involvement();
    this.popUp = new PopUp();
  }

  createCardEl = async (country) => {
    const countryInfo = await this.countries.getCountryShortInfo(country);
    const { name, flagURl } = countryInfo;
    let likes = await this.involvement.getLikeAmount(name);

    // The element structure
    const _ = document;
    const article = _.createElement('article');
    article.className = 'wrapper__card';

    const img = _.createElement('img');
    img.className = 'wrapper__card__img';
    img.src = flagURl;
    img.alt = name;

    const cardDetails = _.createElement('div');
    cardDetails.className = 'wrapper__card__details';

    const h3 = _.createElement('h3');
    h3.className = 'wrapper__card__details__title';
    h3.innerText = name;

    const likeDiv = _.createElement('div');
    likeDiv.className = 'wrapper__card__details__likes';

    const btnLike = _.createElement('button');
    btnLike.className = 'wrapper__card__details__likes-btn';
    btnLike.innerHTML = '<i class="bi bi-heart-fill"></i>';

    const likeAmount = _.createElement('p');
    likeAmount.innerText = `${likes} like(s)`;

    const btnComments = _.createElement('button');
    btnComments.innerText = 'Comment';
    btnComments.className = 'wrapper__card__comments-btn card__btn';

    likeDiv.appendChild(btnLike);
    likeDiv.appendChild(likeAmount);

    cardDetails.appendChild(h3);
    cardDetails.appendChild(likeDiv);

    article.appendChild(img);
    article.appendChild(cardDetails);
    article.appendChild(btnComments);

    // ActionListeners
    btnLike.addEventListener('click', async () => {
      likes += 1;
      likeAmount.innerText = `${likes} like(s)`;
      await this.involvement.addLike(name);
    });

    btnComments.addEventListener('click', () => {
      this.popUp.createPopUp(name);
    });

    return article;
  };

  displayAllCountries = async () => {
    this.container.innerHTML = '';
    const countries = this.countries.getSelectedCountries();
    countries.forEach(async (country) => {
      const el = await this.createCardEl(country);
      this.container.appendChild(el);
    });
  };
}

export default DOM;
