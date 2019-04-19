var number;
var isCheck = true;
var array = [];
function getNumbers () {
    while (isCheck) {
        array.push(input());
        checkStopInput();
    }
    return array;
}

function input() {
    number = parseInt(prompt("Nhap so"));
    return number;
}

function checkStopInput() {
    isCheck = prompt("Co nhap tiep khong? Y or N");
    if (isCheck === "Y") {
        isCheck = true;
    } else if (isCheck === "N") {
        isCheck = false;
    } else {
        alert("Ban phai nhap Y hoac N.");
        checkStopInput();
    }
}

getNumbers();
console.log(array);

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

function factory(number) {
    let factoryNum = 1;
    if (number === 0 || number === 1) {
        return factoryNum;
    }
    for (let i = 2; i <= number; i++) {
        factoryNum *= i;
    }
    return factoryNum;
}

alert('Sum of factories is' + sum(factoryAll(getNumbers())));
