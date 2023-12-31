import Countries from './rest_countries.js';
import Involvement from './involvement.js';

class PopUp {
  constructor() {
    this.countries = new Countries();
    this.popupContainer = document.querySelector('main');
  }

  countComments = async (country) => {
    const comments = await new Involvement().getComment(country);
    return comments.length;
  };

  createPopUp = async (country) => {
    const countryInfo = this.countries.getCountryShortInfo(country);
    const popUp = document.createElement('div');
    popUp.classList.add('pop-up--active');

    const popUpContent = document.createElement('div');
    popUpContent.classList.add('pop-up__container');

    const popUpImg = document.createElement('img');
    popUpImg.classList.add('pop-up__container__img');
    popUpImg.setAttribute('src', (await countryInfo).flagURl);
    popUpImg.setAttribute('alt', (await countryInfo).name);
    popUpContent.appendChild(popUpImg);

    const popUpCloseBtn = document.createElement('div');
    popUpCloseBtn.classList.add('pop-up__container__close-btn');
    popUpCloseBtn.innerHTML = '<i class="bi bi-x-circle"></i>';
    popUpContent.appendChild(popUpCloseBtn);

    const popUpContentContainer = document.createElement('div');
    popUpContentContainer.classList.add('pop-up__container__content');

    const popUpContentTitle = document.createElement('h3');
    popUpContentTitle.classList.add('pop-up__container__content__title');
    popUpContentTitle.textContent = (await countryInfo).name;
    popUpContentContainer.appendChild(popUpContentTitle);

    const popUpContentDetails = document.createElement('ul');
    popUpContentDetails.classList.add('pop-up__container__content__details');

    const details = [
      { label: 'Continent', value: (await countryInfo).continent },
      { label: 'Capital', value: (await countryInfo).capital },
      { label: 'Area', value: `${(await countryInfo).area} km2` },
      { label: 'Population', value: (await countryInfo).population },
    ];

    details.forEach((detail) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<span class="bold-text">${detail.label}: </span><span class="span__br"><br></span>${detail.value}`;
      popUpContentDetails.appendChild(listItem);
    });

    popUpContentContainer.appendChild(popUpContentDetails);
    popUpContent.appendChild(popUpContentContainer);

    const popUpContainerLog = document.createElement('div');
    popUpContainerLog.classList.add('pop-up__container__log');

    const popUpContainerLogTitle = document.createElement('h3');
    popUpContainerLogTitle.classList.add('pop-up__container__log__title');
    const commentsCount = await this.countComments(country);
    popUpContainerLogTitle.textContent = `Comments (${commentsCount})`;
    popUpContainerLog.appendChild(popUpContainerLogTitle);

    const popUpContainerLogEntries = document.createElement('ul');
    popUpContainerLogEntries.classList.add('pop-up__container__log__entries');

    const popUpContainerComments = document.createElement('ul');
    popUpContainerComments.classList.add('pop-up__container__log__entries');

    const logEntries = await new Involvement().getComment(country);

    if (logEntries) {
      logEntries.forEach((entry) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span class="bold-text">${entry.creation_date} ${entry.username}:</span> ${entry.comment}`;
        popUpContainerComments.appendChild(listItem);
      });
    }

    popUpContainerLogEntries.appendChild(popUpContainerComments);
    popUpContainerLog.appendChild(popUpContainerLogEntries);
    popUpContent.appendChild(popUpContainerLog);

    const popUpContainerForm = document.createElement('div');
    popUpContainerForm.classList.add('pop-up__container__form');

    const popUpContainerFormTitle = document.createElement('h3');
    popUpContainerFormTitle.classList.add('pop-up__container__form__title');
    popUpContainerFormTitle.textContent = 'Add a comment';
    popUpContainerForm.appendChild(popUpContainerFormTitle);

    const popUpContainerFormElement = document.createElement('form');
    popUpContainerFormElement.setAttribute('action', '');

    const popUpContainerFormNameInput = document.createElement('input');
    popUpContainerFormNameInput.setAttribute('type', 'text');
    popUpContainerFormNameInput.setAttribute('placeholder', 'Name');
    popUpContainerFormElement.appendChild(popUpContainerFormNameInput);

    const popUpContainerFormTextArea = document.createElement('textarea');
    popUpContainerFormTextArea.setAttribute('name', '');
    popUpContainerFormTextArea.setAttribute('id', '');
    popUpContainerFormTextArea.setAttribute('cols', '30');
    popUpContainerFormTextArea.setAttribute('rows', '10');
    popUpContainerFormTextArea.setAttribute('placeholder', 'Your insights');
    popUpContainerFormElement.appendChild(popUpContainerFormTextArea);

    const popUpContainerFormBtn = document.createElement('button');
    popUpContainerFormBtn.classList.add('pop-up__btn');
    popUpContainerFormBtn.textContent = 'Submit';

    popUpContainerFormElement.appendChild(popUpContainerFormBtn);
    popUpContainerForm.appendChild(popUpContainerFormElement);
    popUpContent.appendChild(popUpContainerForm);
    popUp.appendChild(popUpContent);
    this.popupContainer.appendChild(popUp);

    const closeBtn = popUp.querySelector('.pop-up__container__close-btn');

    closeBtn.addEventListener('click', () => {
      popUp.classList.add('hidden');
    });

    popUpContainerFormBtn.addEventListener('click', async (event) => {
      event.preventDefault();

      const username = popUpContainerFormNameInput.value;
      const comment = popUpContainerFormTextArea.value;
      if (username && comment) {
        const currentDate = new Date().toLocaleDateString('en-US');

        const involvement = new Involvement();
        await involvement.addComment(country, currentDate, username, comment);

        popUpContainerFormNameInput.value = '';
        popUpContainerFormTextArea.value = '';

        const listItem = document.createElement('li');
        listItem.innerHTML = `<span class="bold-text">${currentDate} ${username}:</span> ${comment}`;
        popUpContainerComments.appendChild(listItem);

        const commentsCount = await this.countComments(country);
        popUpContainerLogTitle.textContent = `Comments (${commentsCount})`;

        const commentsBtns = document.querySelectorAll(
          '.wrapper__card__comments-btn',
        );
        commentsBtns.forEach((commentsBtn, index) => {
          commentsBtn.addEventListener('click', () => {
            this.createPopUp(this.countries[index]);
          });
        });
      }
    });

    this.popupContainer.appendChild(popUp);
  };

  displayPopUp = async () => {
    const countries = this.countries.getSelectedCountries();
    const commentsBtns = document.querySelectorAll(
      '.wrapper__card__comments-btn',
    );
    commentsBtns.forEach((commentsBtn, index) => {
      commentsBtn.addEventListener('click', () => {
        this.createPopUp(countries[index]);
      });
    });
  };

  static getComments = (country) => {
    const selectedCountries = [
      'turkey',
      'russia',
      'canada',
      'iran',
      'egypt',
      'colombia',
      'afghanistan',
      'japan',
      'china',
      'india',
      'iraq',
      'nigeria',
      'france',
      'italy',
      'spain',
      'thailand',
      'australia',
      'brazil',
      'argentina',
      'pakistan',
      'mexico',
      'venezuela',
      'UK',
      'germany',
    ];
    for (let i = 0; i < 24; i += 1) {
      if (selectedCountries[i] === country) {
        return i + 1;
      }
    }
    return 0;
  };
}

export default PopUp;
