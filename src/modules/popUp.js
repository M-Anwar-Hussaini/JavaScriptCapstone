import Countries from './rest_countries.js';

class PopUp {
  constructor() {
    this.countries = new Countries();
    this.popupContainer = document.querySelector('main');
    this.closeBtn = document.querySelector('.pop-up__close-btn');
    this.commentsBtn = document.querySelector('.pop-up__comments-btn');
  }

    createPopUp = async (country) => {
      const countryInfo = this.countries.getCountryShortInfo(country);
      const popUp = document.createElement('div');
      popUp.classList.add('pop-up--active');
      popUp.innerHTML = `
    <div class="pop-up__container">
        <img class="pop-up__container__img" src="${(await countryInfo).flagURl}" alt="${country.name}" />
        <div class="pop-up__container__close-btn">
            <i class="bi bi-x-circle"></i>
        </div>
        <div class="pop-up__container__content">
            <h3 class="pop-up__container__content__title">${(await countryInfo).name}</h3>
            <ul class="pop-up__container__content__details">
                <li><span class="bold-text">Continent: </span><span class="span__br"><br></span>${(await countryInfo).continent}</li>
                <li><span class="bold-text">Capital: </span><span class="span__br"><br></span>${(await countryInfo).capital}</li>
                <li><span class="bold-text">Area: </span><span class="span__br"><br></span>${(await countryInfo).area} km2</li>
             <li><span class="bold-text">Population: </span><span class="span__br"><br></span>${(await countryInfo).population}</li>
            </ul>
        </div>

        <div class="pop-up__container__log">
            <h3 class="pop-up__container__log__title">Comments</h3>
            <ul class="pop-up__container__log__entries">
                <li><span class="bold-text">24/06/2023 Alex:</span> I love that salad!</li>
                <li><span class="bold-text">25/06/2023 Tania:</span> This dish is very delicious!</li>
                <li><span class="bold-text">24/06/2023 Alex:</span> I love that salad!</li>
                <li><span class="bold-text">24/06/2023 Alex:</span> I love that salad!</li>
            </ul>
        </div>

        <div class="pop-up__container__form">
            <h3 class="pop-up__container__form__title">Add a comment</h3>
            <form action="">
                <input type="text" placeholder="Name" />
                <textarea name="" id="" cols="30" rows="10" placeholder="Your insights"></textarea>
                <button class="pop-up__btn">Submit</button>
            </form>
        </div>
    </div>
  `;
      const closeBtn = popUp.querySelector('.pop-up__container__close-btn');

      closeBtn.addEventListener('click', () => {
        popUp.classList.add('hidden');
      });

      this.popupContainer.appendChild(popUp);
    };

    displayPopUp = async () => {
      const countries = this.countries.getSelectedCountries();
      const commentsBtns = document.querySelectorAll('.wrapper__card__comments-btn');
      commentsBtns.forEach((commentsBtn, index) => {
        commentsBtn.addEventListener('click', () => {
          this.createPopUp(countries[index]);
        });
      });
    }
}

export default PopUp;
