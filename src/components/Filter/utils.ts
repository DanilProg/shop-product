export const createUrl = (arrayFilter: string[], params: string) => {
  let url = "";
  arrayFilter.forEach((item) => {
    url += `&${params}=${item}`;
  });
  return url;
};
