/* for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
} */

let table = document.getElementById('nine');
// let row = document.createElement('tr');
// let block = document.createElement('td');
// let text = document.createTextNode('ij');
// block.appendChild(text);
// row.appendChild(block);
// table.appendChild(row);

for (let i = 1; i < 10; i++) {
    let row = document.createElement('tr');
    for (let j = 1; j < 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
        let block = document.createElement('td');
        let text = document.createTextNode(`${i} * ${j} = ${i * j}`);
        block.appendChild(text);
        row.appendChild(block);
    }
    table.appendChild(row);
}