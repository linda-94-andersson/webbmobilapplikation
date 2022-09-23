// Alternate List

function alternate(a, b) {
    let i = 0;
    let j = 0;
    let k = 0;

    let n1 = a.length;
    let n2 = b.length

    let c = new Array(n1 + n2);

    while (i < n1 && j < n2) {
        c[k++] = a[i++];
        c[k++] = b[j++];
    }

    while (i < n1) {
        c[k++] = a[i++];
    }

    while (j < n2) {
        c[k++] = b[j++];
    }

    console.log(c, " alternate");
}

alternate(["x", "y", "z"], [9, 8, 7]);

// Calculator

function calculator(c) {
    const operator = c[2];
    const str1 = c[0];
    const str2 = c[4];
    const num1 = parseInt(str1);
    const num2 = parseInt(str2);

    let result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else {
        result = num1 / num2;
    }

    console.log(result, " calculator");
}

calculator("2 + 2");
calculator("2 - 2");
calculator("2 * 2");
calculator("2 / 2"); 