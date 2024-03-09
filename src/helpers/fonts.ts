import localFont from "next/font/local";

export const firacode = localFont({
  src: [
    {
      path: "../../public/fonts/firacode-light-webfont.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/firacode-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/firacode-medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/firacode-bold-webfont.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/firamono-regular-webfont.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export const firamono = localFont({
  src: [
    {
      path: "../../public/fonts/firamono-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});
