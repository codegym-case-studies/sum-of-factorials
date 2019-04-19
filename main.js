alert('Sum of factories is' + sum(factoryAll(getNumbers())))
function sum(factoryAll) {
    let sum =0;
    for (let i = 0; i < factoryAll.length; i++) {
        sum += factoryAll[i];
    }
    document.write(sum);
}