class Countries {
  constructor() {
    this.selectedCountries = [
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
  }

  getCountryFullData = async (country) => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const [data] = await res.json();
    return data;
  };

  getCountryShortInfo = async (country) => {
    const data = await this.getCountryFullData(country);
    return {
      country,
      name: data.name.common,
      flagURl: data.flags.png,
      population: data.population,
      continent: data.region,
      capital: data.capital[0] || 'Unknown',
      area: data.area,
    };
  };

  getSelectedCountries = () => this.selectedCountries;
}

export default Countries;
