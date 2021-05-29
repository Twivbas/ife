import {tableWrp, regRadio, proRadio} from './app.js';
import {getData} from './data.js';

// 渲染新的表格
export function renderTable() {
    while (tableWrp.children.length > 0) {
        tableWrp.removeChild(tableWrp.lastChild);
    }
    let table = document.createElement('table');

    // 多选的表格渲染
    // 获取2个checkbox选择的数量
    let regCount = 0, proCount = 0;
    for (let v of [...regRadio.children]) {
        if (v.checked === true) {
            regCount += 1;
        }
    }
    for (let v of [...proRadio.children]) {
        if (v.checked === true) {
            proCount += 1;
        }
    }

    // 输出表头
    let tHead = ['商品', '地区', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    if (regCount === 1 && proCount > 1) {
        tHead = ['地区', '商品', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    }
    let tr = createTr(tHead);
    table.appendChild(tr);
    let row = 1;
    // 遍历数据
    let data = getData();
    for (let v of data.values()) {
        let dataArr = [v.product, v.region, ...v.sale];
        if (regCount === 1 && proCount > 1) {
            dataArr = [v.region, v.product, ...v.sale];
        }
        tr = createTr(dataArr);
        // 单元格合并
        if (regCount >= 1 && proCount >= 1) {
            if (table.lastElementChild.children.length === 14) {
                // 找上一行第一个
                if (tr.firstElementChild.innerHTML === table.lastElementChild.firstElementChild.innerHTML) {
                    row += 1;
                    table.lastElementChild.firstElementChild.rowSpan = '' + row;
                    tr.removeChild(tr.firstElementChild);
                }
            } else {
                // 找上上一行第一个
                if (tr.firstElementChild.innerHTML === table.children[table.children.length - 2].firstElementChild.innerHTML) {
                    row += 1;
                    table.children[table.children.length - 2].firstElementChild.rowSpan = '' + row;
                    tr.removeChild(tr.firstElementChild);
                } else {
                    row = 1;
                }
            }
        } 
        table.appendChild(tr);
    }
    tableWrp.appendChild(table);
    table.border = 1;
}

// 生成一个tr,并填充数据
function createTr(dataArr) {
    let tr = document.createElement('tr');
    for (let i = 0; i < 14; i++) {
        let td = document.createElement('td');
        td.innerHTML = dataArr[i];
        tr.appendChild(td);
    }
    return tr;
}