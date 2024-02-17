import { SocialToUrl, SocialToUrl2, shareIds } from './constants';

export const formatSocialShareUrl = ({
  imageUrl,
  text,
  url,
}: {
  url?: string;
  text?: string;
  imageUrl?: string;
}) => {
  // @ts-ignore
  let total: Record<Social, string> = {};

  SocialToUrl2.forEach((social) => {
    const baseUrl = SocialToUrl[social.id];
    const socialIds = shareIds[social.id];

    const urlObject = new URL(baseUrl);

    if (socialIds.text && text) {
      urlObject.searchParams.set(socialIds.text, text);
    }

    if (socialIds.link && url) {
      urlObject.searchParams.set(socialIds.link, url);
    }

    if (socialIds.image && imageUrl) {
      urlObject.searchParams.set(socialIds.image, imageUrl);
    }

    total = {
      ...total,
      [social.id]: urlObject.href,
    };
  });

  return total;
};
