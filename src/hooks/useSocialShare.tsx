import { Social } from "../types";
import { formatSocialShareUrl } from "../utils/share";

/**
 * Props for the Social component.
 * @template T - Type of social media platform.
 */
type SocialProps<T extends Social> = {
  /**
   * The URL to be shared.
   * This property is optional and supported by every social media platform except whatsapp.
   * @type {string | undefined}
   */
  url?: T extends "whatsapp" ? never : string;
  /**
   * The text content to be shared.
   * This property is optional, and supported by every social media platform except whatsapp.
   * @type {string | undefined}
   */
  text?: T extends "whatsapp" ? string : never;
  /**
   * The description content to be shared.
   *    * This property is optional, and only supported by Tumblr and Mailru..
   * @type {string | undefined}
   */
  description?: T extends "tumblr" | "mailru" ? string : never;
  /**
   * The URL of the image to be shared.
   * This property is optional, and only supported by Pinterest.
   * @type {string | undefined}
   */
  imageUrl?: T extends "whatsapp" | "linkedIn" | "twitter" ? never : string;
  /**
   * The type of social media platform.
   * @type {T}
   */
};

type UseSocialShareProps<T extends Social> = SocialProps<T>;

export const useSocialShare = <T extends Social>({
  url,
  imageUrl,
  text,
  description,
}: UseSocialShareProps<T>) => {
  return formatSocialShareUrl({
    url,
    imageUrl,
    text,
    description,
  });
};
