export type Social =
  | "twitter"
  | "linkedIn"
  | "whatsapp"
  | "pinterest"
  | "facebook"
  | "telegram"
  | "linkedIn"
  | "vkontakte"
  | "odnoklassniki"
  | "reddit"
  | "tumblr"
  | "mailru";

export type SocialAssetColor = {
  name: string;
  hex: string;
  rgb: string;
};

export type SocialAsset = {
  colors: SocialAssetColor[];
};
