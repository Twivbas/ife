//3的小游戏，练习使用循环和条件语句，实现如下需求：
// 从1到100，以此在console输出各数字，但是，当数字为3的倍数或者含有3的时候，输出“PA”
// 比如：1,2,PA,4,5,PA,……,11,PA,PA,14,PA……

for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 || i % 10 === 3 || Math.floor(i / 10) === 3) {
        console.log('PA');
        continue;
    }
    console.log(i);
}