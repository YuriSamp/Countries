import axios from 'axios';
import { ICountry } from './ICountry';

export async function Request(
  name: string,
  filter: string
): Promise<ICountry[]> {
  try {
    const response = await axios.get<ICountry[]>(
      'https://restcountries.com/v3.1/all'
    );

    const country = response.data.filter((country) => {
      if (name === '' && filter === 'All') {
        return country;
      } else if (name !== 'name' && filter === 'All') {
        return country.name.common.toLowerCase().includes(name.toLowerCase());
      } else {
        return (
          country.name.common.toLowerCase().includes(name.toLowerCase()) &&
          country.continents.includes(filter)
        );
      }
    });

    return country;
  } catch (error) {
    throw Error('deu merda patrao');
  }
}
