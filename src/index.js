import styles from './index.css';

import { add } from './util.js';

const h2 = document.createElement('h2');
h2.classList.add(styles['text-center']);
h2.innerHTML = add('1', '2');

document.body.appendChild(h2);

const img = document.createElement('img');
img.src = 'what-is-webpack.png';

setTimeout(() => {
  import(
    /* webpackChunkName: "my-chunk-name" */
    './1.js'
  ).then(module => {
    console.log(module);
  });
}, 5000);


if (module.hot) {
  module.hot.accept('./util.js', () => {
    h2.innerHTML = add('1', '2');
  });
}
