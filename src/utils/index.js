export const parseAddress = (address = "") => {
  return `${address.slice(0, 4)}...${address.slice(39)}`;
};

export const padNumber = (num, length) => {
  return String(num).padStart(length, "0");
};

export const shuffle = (array) => array.sort(() => Math.random() - 0.5);
