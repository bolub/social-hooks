import { Social, SocialAsset } from "../types";

const socialAssets: Record<Social, SocialAsset> = {
  twitter: {
    colors: [
      {
        name: "Blue",
        hex: "#000000",
        rgb: "rgb(0, 119, 181)",
      },
    ],
  },
  linkedIn: {
    colors: [
      {
        name: "Black",
        hex: "#0077B5",
        rgb: "rgb(0, 119, 181)",
      },
    ],
  },
  whatsapp: {
    colors: [
      {
        name: "Teal green",
        hex: "#075E54",
        rgb: "rgb(7, 94, 84)",
      },
      {
        name: "Light green",
        hex: "#25D366",
        rgb: "rgb(37, 211, 102)",
      },
    ],
  },
  pinterest: {
    colors: [
      {
        name: "Red",
        hex: "#E60023",
        rgb: "rgb(0, 100, 85, 10)",
      },
    ],
  },
  vkontakte: {
    colors: [
      {
        name: "VK Company Blue",
        hex: "0077FF",
        rgb: "rgb(0, 119, 255)",
      },
    ],
  },
  odnoklassniki: {
    colors: [
      {
        name: "Orange",
        hex: "#EE8208",
        rgb: "rgb(238, 130, 8)",
      },
    ],
  },
  reddit: {
    colors: [
      {
        name: "Orangered",
        hex: "#FF4500",
        rgb: "rgb(255, 69, 0)",
      },
    ],
  },
  tumblr: {
    colors: [
      {
        name: "Dark Blue",
        hex: "#021A35",
        rgb: "rgb(2, 26, 53)",
      },
    ],
  },
  mailru: {
    colors: [
      {
        name: "Blue",
        hex: "#168de2",
        rgb: "rgb(22, 141, 226)",
      },
    ],
  },
  facebook: {
    colors: [
      {
        name: "Blue",
        hex: "#1877F2",
        rgb: "rgb(24, 119, 242)",
      },
    ],
  },
  telegram: {
    colors: [
      {
        name: "Blue",
        hex: "#24A1DE",
        rgb: "rgb(36, 161, 222)",
      },
    ],
  },
};

export const useSocialAssets = () => {
  return socialAssets;
};
