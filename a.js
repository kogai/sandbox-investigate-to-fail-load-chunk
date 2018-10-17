const root = document.querySelector("#root");
navigator.serviceWorker.register("/sw.js");

const a = x => {
  return import(/* webpackChunkName: "my-b" */ "./b").then(({ square }) => {
    return `square(${x}) = ${square(x)}`;
  });
};

a(3).then(x => {
  const node = document.createTextNode(x);
  root.appendChild(node);
});
