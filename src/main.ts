/** 入口文件 */

import * as $ from 'jquery';

$(() => {
  $(document.body).html(`'Hello! Webpack!'`);
  console.log(`entry is main.ts`);
});
