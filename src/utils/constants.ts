import { Social } from "../types";

export const socialBaseUrl: Record<Social, string> = {
  twitter: "https://twitter.com/intent/tweet",
  linkedIn: "http://www.linkedin.com/shareArticle?mini=true",
  whatsapp: "https://wa.me",
  pinterest: "http://pinterest.com/pin/create/button",
  facebook: "https://www.facebook.com/sharer/sharer.php",
  telegram: "https://t.me/share/url",
  vkontakte: "http://vk.com/share.php",
  odnoklassniki: "https://connect.ok.ru/offer",
  reddit: "https://reddit.com/submit",
  tumblr: "https://www.tumblr.com/widgets/share/tool",
  mailru: "http://connect.mail.ru/share",
};

export const getSocialUrlsWithIds = () => {
  let socialUrlsWithIds: { id: Social; baseUrl: string }[] = [];

  for (let key in socialBaseUrl) {
    const value = socialBaseUrl[key as Social];

    socialUrlsWithIds.push({
      id: key as Social,
      baseUrl: value,
    });
  }

  return socialUrlsWithIds;
};

export const shareIds: Record<
  Social,
  {
    text: string | null;
    link: string | null;
    image: string | null;
    description: string | null;
  }
> = {
  linkedIn: {
    text: "title",
    link: "url",
    image: null,
    description: null,
  },
  twitter: {
    text: "text",
    link: "url",
    image: null,
    description: null,
  },
  whatsapp: {
    text: "text",
    link: null,
    image: null,
    description: null,
  },
  pinterest: {
    text: "description",
    link: "url",
    image: "media",
    description: null,
  },
  facebook: {
    link: "u",
    text: null,
    image: null,
    description: null,
  },
  telegram: {
    text: "text",
    link: "url",
    image: null,
    description: null,
  },
  vkontakte: {
    link: "url",
    text: null,
    image: null,
    description: null,
  },
  odnoklassniki: {
    text: "title",
    link: "url",
    image: null,
    description: null,
  },
  reddit: {
    text: "title",
    link: "url",
    image: null,
    description: null,
  },
  tumblr: {
    text: "title",
    link: "canonicalUrl",
    image: null,
    description: "caption",
  },
  mailru: {
    text: "title",
    link: null,
    image: "imageUrl",
    description: "description",
  },
};
