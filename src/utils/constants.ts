import { Social } from '../types';

export const SocialToUrl: Record<Social, string> = {
  twitter: 'https://twitter.com/intent/tweet',
  linkedIn: 'http://www.linkedin.com/shareArticle?mini=true',
  whatsapp: 'https://wa.me',
  pinterest: 'http://pinterest.com/pin/create/button',
};

export const SocialToUrl2 = [
  {
    id: 'twitter',
    baseUrl: 'https://twitter.com/intent/tweet',
  },
  {
    id: 'linkedIn',
    baseUrl: 'http://www.linkedin.com/shareArticle?mini=true',
  },
  {
    id: 'whatsapp',
    baseUrl: 'https://wa.me',
  },
  {
    id: 'pinterest',
    baseUrl: 'http://pinterest.com/pin/create/button',
  },
] as const;

export const shareIds: Record<
  Social,
  {
    text: string;
    link: string | null;
    image: string | null;
  }
> = {
  linkedIn: {
    text: 'title',
    link: 'url',
    image: null,
  },
  twitter: {
    text: 'text',
    link: 'url',
    image: null,
  },
  whatsapp: {
    text: 'text',
    link: null,
    image: null,
  },
  pinterest: {
    text: 'description',
    link: 'url',
    image: 'media',
  },
};
