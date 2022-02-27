export const uniqueSuffix = () =>
  Date.now() + "-" + Math.round(Math.random() * 1e9);

export const getKey = key => {
  return key + uniqueSuffix();
};
