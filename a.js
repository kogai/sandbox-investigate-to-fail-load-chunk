export const a = x => {
  import(/* webpackChunkName: "b" */ "./b").then(({ b }) => {
    return b(x) + b(x);
  });
};
