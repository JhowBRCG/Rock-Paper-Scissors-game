type Sizes = {
  mobileM: string;
  mobileL: string;
  tablet: string;
  laptop: string;
};

const sizes: Sizes = {
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
};

export const devices = {
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
};
