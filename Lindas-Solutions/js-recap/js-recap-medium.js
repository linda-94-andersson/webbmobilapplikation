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