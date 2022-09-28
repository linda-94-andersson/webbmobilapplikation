// Bracket validation 

function bracketValidation(str) {
    const leftBraces = [];

    function Brace(c) {
        switch (c) {
            case ')': case '}': case ']':
                return 'R';
            case '(': case '{': case '[':
                return 'L';
            default:
                return '';
        }
    }

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        switch (Brace(char)) {
            case 'L':
                leftBraces.push(char);
                break;
            case 'R':
                if (!Match(leftBraces.pop() + char)) {
                    return false;
                }
                break;
        }
    }

    return leftBraces.length === 0;

    function Match(brackets) {
        switch (brackets) {
            case '()': case '{}': case '[]':
                return console.log(true, "Bracket validation");
            default:
                return console.log(false, "Bracket validation");
        }
    }
}

bracketValidation("([{}])");
bracketValidation("[[(}])");

// Caesar cipher

function caesarCipher(str, amount) {
    if (amount < 0)
        return caesarCipher(str, amount + 26);

    let res = '';

    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        if (c.match(/[a-z]/i)) {
            const code = str.charCodeAt(i);
            if ((code >= 65) && (code <= 90))
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            else if ((code >= 97) && (code <= 122))
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
        }
        res += c;
    }
    return console.log(res, " Caesar cipher");
}

caesarCipher("Linda", 10);

// Flatten 

function flatten(value) {
    const result = value.flat(Infinity);
    console.log(result, " Flatten");
}

flatten([[1], [2]]);
flatten([2, 3, [4, [5, 6], [7]]]);
flatten([1, 2, 3]);

// Omit
// Dose not work 100% as it should
function omit(arr, key) {
    const newArr = arr.map(({ age, ...rest }) => {
        return rest;
    });

    return console.log(newArr, " Omit");
}

omit([
    {
        name: "Ryan",
        age: 41,
    },
    {
        name: "Bryan",
        age: 73
    }
], "age");

// Pangram

function pangram(string) {
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let i = 0; i < alphabet.length; i++) {
        if (strArr.indexOf(alphabet[i]) < 0) {
            return console.log(false, " Pangram");
        }
    }
    return console.log(true, " Pangram");
}

pangram("abc");
pangram("The quick brown fox jumps over the lazy dog");
pangram("abcdefghijklmnopqrstuvwxyz");

// Pluck 

function pluck(arr, key) {
    const result = arr.map(o => o[key]);
    console.log(result, " Pluck");
}

const students = [{ name: "Ryan", age: 41 }, { name: "Bryan", age: 32 }, { name: "Fryan", age: 55 }];
pluck(students, "age");

// Roman numerals

function roman(num) {
    let lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }, roman = '', i;
    for (i in lookup) {
        while (num >= lookup[i]) {
            roman += i;
            num -= lookup[i];
        }
    }
    return console.log(roman, " Roman");
}

roman(5);
roman(123); 