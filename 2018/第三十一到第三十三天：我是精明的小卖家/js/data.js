import {regRadio, proRadio} from './app.js';
import {sourceData} from './ife31data.js';

// 获取数据
export function getData() {
    let data = [];
    let regArr = [];
    let proArr = [];
    for (let v of [...regRadio.children]) {
        if (v.type === 'checkbox' && v.checked === true) {
            regArr.push(v.value);
        }
    }
    for (let v of [...proRadio.children]) {
        if (v.type === 'checkbox' && v.checked === true) {
            proArr.push(v.value);
        }
    }

    for (let v of sourceData.values()) {
        if ((regArr.indexOf(v.region) !== -1 && proArr.indexOf(v.product) !== -1) || (regArr.indexOf(v.region) !== -1 && proArr.length === 0) || (regArr.length === 0 && proArr.indexOf(v.product) !== -1)) {
            data.push(v);
        }
    }
    return data;
}