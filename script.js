let num = document.querySelector('input[type="number"]');
let btn = document.querySelector('input[type="button"]');
let printRes = document.getElementById('printBinary');

btn.addEventListener('click', () => {

    let numValue = num.value;
    let flag = 0;

    if (numValue < 0) {
        numValue *= -1;
        flag = 1;
    }

    let bits = Math.floor(Math.log2(numValue)) + 1;
    let binary = new Array(bits);

    console.log(`Value: ${numValue}   Bits: ${bits}`);
    console.log(`Log: ${Math.log2(numValue)}`);

    printBinary.style.display = 'inline-block';
    printRes.innerHTML = '';

    for (let i = bits - 1; i >= 0; i--) {
        binary[i] = Math.floor(numValue % 2);
        numValue /= 2;
    }

    //if num is -ve
    if (flag) twosComp(binary, bits);

    binary.forEach(value => printRes.innerHTML += value);
});

function twosComp(arr, size) {
    let temp = 0, f = 1;
    //moving right to left
    for (let i = size - 1; i >= 0; i--) {

        //when first 1 hit
        if (arr[i] == 1 && temp == 0) {
            temp = 1;
            continue;
        }
        
        //complimenting
        if (temp) {
            arr[i] = (arr[i] == 1) ? 0 : 1;
            console.log(arr[i]);
        }
    }
}