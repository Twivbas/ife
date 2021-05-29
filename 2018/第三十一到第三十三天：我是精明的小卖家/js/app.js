//初始化的工作
import {createCBox} from './checkbox.js';

export let tableWrp = document.getElementById('table-wrapper');
export let regRadio = document.getElementById('region-radio-wrapper');
export let proRadio = document.getElementById('product-radio-wrapper');
let c1 = ['华东', '华南', '华北'];
let c2 = ['手机', '笔记本', '智能音箱'];


createCBox(regRadio, c1);
createCBox(proRadio, c2);