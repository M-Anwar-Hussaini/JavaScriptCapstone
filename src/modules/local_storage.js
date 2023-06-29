import Countries from './rest_countries.js';

class Storage {
  constructor() {
    this.name = 'countries';
    this.info = JSON.parse(localStorage.getItem(this.name)) || [];
    this.countries = new Countries();
    this.setup();
  }

  setup = () => {
    if (!this.info.length) {
      this.countries.getSelectedCountries().forEach((country) => {
        const obj = { country, liked: false };
        this.info.push(obj);
      });
      this.saveToLocalStorage();
    }
  };

  saveToLocalStorage = () => {
    localStorage.setItem(this.name, JSON.stringify(this.info));
  };

  likeCountry = (country) => {
    for (let i = 0; i < 24; i += 1) {
      if (this.info[i].country === country) {
        this.info[i].liked = true;
        break;
      }
    }
    this.saveToLocalStorage();
  };

  isLiked = (country) => {
    const a = this.info.find((el) => el.country === country);
    return a ? a.liked : false;
  };
}

export default Storage;
