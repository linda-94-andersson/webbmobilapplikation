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

// Compact

function compact(a) {
    const comp = a.filter(Boolean);
    console.log(comp, " compact");
}

compact([0, 7, "", false, true, "good day"]);

// Fizzbuzz

function fizzbuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + " FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log(i + " Fizz");
        }
        else if (i % 5 === 0) {
            console.log(i + " Buzz");
        }
        else {
            console.log(i);
        }
    }
}

// fizzbuzz(); 

// Hamming distance

function hamming(a, b) {
    let distance = 0;
    if (a.length === b.length) {
        for (let i = 0; i < a.length; i++) {
            if (a[i].toLowerCase() != b[i].toLowerCase()) {
                distance++
            }
        }
        return console.log(distance, " Hamming");
    };
    return 0;
}

hamming("ZZZ", "ZZX");
hamming("Måsen", "Moset");

// Head

function head(arr, n) {
    const h = arr.slice(0, n);
    console.log(h, " Head");
}

function tail(arr, n) {
    const t = arr.slice(n);
    console.log(t, " Tail");
}

head([6, 7, 8, 10, 11, 5], 4);
tail([6, 7, 8, 10, 11, 5], 3);

// Initial

function initial(arr) {
    const ini = arr.slice(0, -1);
    console.log(ini, " Initial");
}

initial([6, 7, 8, 9]);

// Intersect

function intersect(a, b) {
    const int = a.filter(value => b.includes(value));
    console.log(int, " Intersect");
}

intersect([2, 3, 4, 5, 6], [2, 6, 1, 8]);

// Leap year

function leap(y) {
    if ((0 == y % 4) && (0 != y % 100) || (0 == y % 400)) {
        return console.log(true, " Leap");
    }
    return console.log(false, " Leap");
}

leap(2012);
leap(2015);

// Letter-case

function toCamelCase(s) {
    const camel = s.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());

    console.log(camel, " toCamelCas");
}

toCamelCase("Good day");

function toSnakeCase(s) {
    const snake = s.replace(/\W+/g, " ")
        .split(/ |\B(?=[A-Z])/)
        .map(word => word.toLowerCase())
        .join('_');

    console.log(snake, " toSnakeCase");
}

toSnakeCase("Danger noodle");

function fromSnakeToCamel(s) {
    const snakeCambel = s.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());

    console.log(snakeCambel, " fromSnakeToCamel");
}

fromSnakeToCamel("danger_noodle");

function fromCamelToSnake(s) {
    const camleSnake = s.replace(/[A-Z]/g, (c) => { return '_' + c.toLowerCase() });

    console.log(camleSnake, " fromCamelToSnake");
}

fromCamelToSnake("goodDay");

// Longest Word

function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    str.forEach(function (str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return console.log(word, " Longest word");
}

longestWord("Greetings mr bond");

// Minium

function min(a, b) {
    if (a < b) {
        console.log(a, " Min");
    } else {
        console.log(b, " Min");
    }
}

function minimum(arr) {
    const min = arr.reduce((a, b) => Math.min(a, b));
    console.log(min, " Minimum");
}

function max(a, b) {
    if (a > b) {
        console.log(a, " Max");
    } else {
        console.log(b, " Max");
    }
}

function maximum(arr) {
    const max = arr.reduce((a, b) => Math.max(a, b));
    console.log(max, " Maximum");
}

min(2, 3);
minimum([6, 4, 3, 8]);
max(2, 3);
maximum([6, 4, 3, 8]);

// Palindrome

function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return console.log(reverseStr === lowRegStr, " Palindrome");
}

palindrome("Greetings");
palindrome("ALLA");

// Powers

function powers(arr, n) {
    const power = arr.map(function (x) {
        return Math.pow(x, n);
    });
    console.log(power, " Powers");
}

powers([2, 3, 4], 2);
powers([1, 2, 3], 3);

// Range

function range(a, b) {
    const ran = [...Array(b - a + 1).keys()].map(i => i + a);
    console.log(ran, " Range");
}

range(5, 10);

function sum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return console.log(sum, " Sum");
}

sum([1, 2, 3]);

function rangeSum(a, b) {
    const arr = [...Array(b - a + 1).keys()].map(i => i + a);
    console.log(arr, " this is arr");
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return console.log(sum, " RangeSum");
}

rangeSum(5, 10);

// Remove numbers

function removeNumbers(arr) {
    let numbersOnly = (val) => {
        if (typeof (val) !== 'number') {
            return val;
        }
    }

    let numbers = arr.filter(numbersOnly);
    console.log(numbers, " testing ");
}

removeNumbers(["pineapple", "10", 7, 100, "strawberry"]);

// Replace

function replace(str, key, rstr) {
    const word = str.trim().split(key).join(rstr);
    console.log(word, " Replace");
}

replace("Banana", "a", "ö");

// Reverse string 

function reverseString(str) {
    const bk = str.split("").reverse().join("");
    console.log(bk, " Reverse string");
}

reverseString("Ryan");