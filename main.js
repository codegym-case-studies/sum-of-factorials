alert('Sum of factories is' + sum(factoryAll(getNumbers())))

function sum(factoryAll) {
    let sum =0;
    for (let i = 0; i < factoryAll.length; i++) {
        sum += factoryAll[i];
    }
    document.write(sum);
}

function factoryAll(arr) {
    let factorials = [];
    for (let i = 0; i<arr.length;i++){
        let n = factory(arr[i]);
        factorials[i] = n;
    }
    return factorials;
};
