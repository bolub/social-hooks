export type Social = 'twitter' | 'linkedIn' | 'whatsapp' | 'pinterest';

export type SocialAssetColor = {
  name: string;
  hex: string;
  rgb: string;
};

export type SocialAsset = {
  colors: SocialAssetColor[];
};
