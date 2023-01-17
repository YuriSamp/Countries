export interface ICountry {
  name: {
    common: string;
    official: string;
    nativeName: { official: string; common: string };
  };
  alpha2Code: string;
  alpha3Code: string;
  borders: string[];
  capital: string[];
  currencies: { name: string; symbol: string };
  flags: { png: string; svg: string };
  languages: {};
  population: number;
  continents: string[];
  subregion: string;
  timezones: string[];
}
