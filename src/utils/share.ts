import { socialBaseUrl, shareIds, getSocialUrlsWithIds } from "./constants";

export const formatSocialShareUrl = ({
  imageUrl,
  text,
  url,
  description,
}: {
  url?: string;
  text?: string;
  imageUrl?: string;
  description?: string;
}) => {
  // @ts-ignore
  let total: Record<Social, string> = {};

  const socialUrlsWithIds = getSocialUrlsWithIds();

  socialUrlsWithIds.forEach((social) => {
    const baseUrl = socialBaseUrl[social.id];
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

    if (socialIds.description && description) {
      urlObject.searchParams.set(socialIds.description, description);
    }

    total = {
      ...total,
      [social.id]: urlObject.href,
    };
  });

  return total;
};
