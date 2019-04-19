alert('Sum of factories is' + sum(factoryAll(getNumbers())));
function factoryAll(arr) {
    let factorials = [];
    for (let i = 0; i<arr.length;i++){
        let n = factory(arr[i]);
        factorials[i] = n;
    }
    return factorials;
};
