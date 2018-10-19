import "./a/big.1.pdf";
import "./a/big.2.pdf";
import "./a/big.3.pdf";
import "./a/big.4.pdf";
import "./a/big.5.pdf";
import "./a/big.6.pdf";
import "./a/big.7.pdf";
import "./a/big.8.pdf";
import "./a/big.9.pdf";

import "./b/big.1.pdf";
import "./b/big.2.pdf";
import "./b/big.3.pdf";
import "./b/big.4.pdf";
import "./b/big.5.pdf";
import "./b/big.6.pdf";
import "./b/big.7.pdf";
import "./b/big.8.pdf";
import "./b/big.9.pdf";

import "./c/big.1.pdf";
import "./c/big.2.pdf";
import "./c/big.3.pdf";
import "./c/big.4.pdf";
import "./c/big.5.pdf";
import "./c/big.6.pdf";
import "./c/big.7.pdf";
import "./c/big.8.pdf";
import "./c/big.9.pdf";

import "./d/big.1.pdf";
import "./d/big.2.pdf";
import "./d/big.3.pdf";
import "./d/big.4.pdf";
import "./d/big.5.pdf";
import "./d/big.6.pdf";
import "./d/big.7.pdf";
import "./d/big.8.pdf";
import "./d/big.9.pdf";

import "./f/big.1.pdf";
import "./f/big.2.pdf";
import "./f/big.3.pdf";
import "./f/big.4.pdf";
import "./f/big.5.pdf";
import "./f/big.6.pdf";
import "./f/big.7.pdf";
import "./f/big.8.pdf";
import "./f/big.9.pdf";

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
