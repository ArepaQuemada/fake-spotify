import json from "./mock.json";

export const getHome = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(json);
    }, 1000);
  });
};
