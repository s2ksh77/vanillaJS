export const routeTo = (url) => {
  history.pushState('', '', url);
};
