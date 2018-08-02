import { str as loginStr } from './login';
import { str as logoutStr } from './logout';

import './styles/index.css';
import './styles/index.less';
import './styles/index.scss';

const str = `我是入口文件，我加载了login.js和logout.js\n\r<br>${loginStr}\n\r<br>${logoutStr}`;

document.body.innerHTML = str;

console.log(str);
