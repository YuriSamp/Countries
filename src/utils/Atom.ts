import { atom } from 'recoil';
import { ICountry } from './ICountry';

export const countryAtom = atom<ICountry[]>({
  key: 'country',
  default: [],
});

export const DarkModeAtom = atom({
  key: 'DarkMode',
  default: false,
});
