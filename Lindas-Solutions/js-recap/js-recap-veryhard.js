// Batch 

function batch(array, batchSize) {
    // const perGroup = Math.ceil(arr.length / batchSize);
    // const result = new Array(batchSize)
    // .fill('')
    // .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
    // console.log(result, " Batch"); 

    const [...arr] = array;
    const res = [];
    while (arr.length) {
        res.push(arr.splice(0, batchSize));
    }
    return console.log(res, " Batch");
}

batch(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], 2);

// Letter Combo

function combo(str) {
    let results = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            for (let k = i; k < str.length; k++) {
                results.push(str[i] + ' ' + str[j] + ' ' + str[k]);
                results.push(str[j] + ' ' + str[k] + ' ' + str[i]);
                results.push(str[k] + ' ' + str[i] + ' ' + str[j]);
            }
        }
    }
    const newRes = results.filter((item, index) => results.indexOf(item) === index);
    const sortRes = newRes.sort();
    console.log(sortRes, " Combo");
}

combo("ABC");