import { Social, SocialAsset } from '../types';

const socialAssets: Record<Social, SocialAsset> = {
  twitter: {
    colors: [
      {
        name: 'Blue',
        hex: '#000000',
        rgb: 'rgb(0, 119, 181)',
      },
    ],
  },
  linkedIn: {
    colors: [
      {
        name: 'Black',
        hex: '#0077B5',
        rgb: 'rgb(0, 119, 181)',
      },
    ],
  },
  whatsapp: {
    colors: [
      {
        name: 'Teal green',
        hex: '#075E54',
        rgb: 'rgb(7, 94, 84)',
      },
      {
        name: 'Light green',
        hex: '#25D366',
        rgb: 'rgb(37, 211, 102)',
      },
    ],
  },
  pinterest: {
    colors: [
      {
        name: 'Red',
        hex: '#E60023',
        rgb: 'rgb(0, 100, 85, 10)',
      },
    ],
  },
};

export const useSocialAssets = () => {
  return socialAssets;
};
