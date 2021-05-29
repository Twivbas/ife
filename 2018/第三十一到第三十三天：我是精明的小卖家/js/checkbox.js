import {regRadio} from './app.js';
import {renderTable} from './table.js';


// 生成一组CheckBox
export function createCBox(wrapper, arr) {
    let cBoxAll = document.createElement('input');
    cBoxAll.type = 'checkbox';
    cBoxAll.checkboxType = 'all';
    let label = document.createElement('label');
    if (wrapper === regRadio) {
        label.innerHTML = '地区';
    } else {
        label.innerHTML = '商品';
    }
    
    wrapper.appendChild(cBoxAll);
    wrapper.appendChild(label);

    for (let v of arr) {
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checkboxType = 'single';
        checkbox.value = v;
        let label = document.createElement('label');
        label.innerHTML = v;
        wrapper.appendChild(checkbox);
        wrapper.appendChild(label);
    }

    wrapper.onclick = function (e) {
        let all = true;
        if (e.target.checkboxType) {
            let attr = e.target.checkboxType;
            if (attr === 'all') {
                for (let v of wrapper.children) {
                    v.checked = true;
                }
            } else {
                e.target.checked = true;
                for (let v of wrapper.children) {
                    if (v.checkboxType === 'single') {
                        if (v.checked !== true) {
                            all = false;
                        }
                    }
                }
                if (all) {
                    wrapper.firstElementChild.checked = true;
                }
            }
            renderTable();
        } 
    }
}