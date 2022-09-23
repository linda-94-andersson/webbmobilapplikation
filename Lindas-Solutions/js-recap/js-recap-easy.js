// Age

const object = { name: "LA", age: 29 }

function logAge(o) {
    if (o.age) return console.log(o.age, " Age");
    return console.log("No age data");
}

logAge(object);

// Ages

const person1 = { name: "Ryan", age: 41 };
const person2 = { name: "Carl", age: 19 };
const person3 = { name: "Stevie" };
const personArray = [person1, person2, person3];

function getAges(p) {
    const ages = p.filter(p => p.age).map(p => p.age);
    if (ages) return console.log(ages, " Ages");
    return console.log("No ages data");
}

getAges(personArray);

// Between

function isBetween(x, f, t) {
    if (x < f) {
        return;
    } else if (x > t) {
        return;
    } else {
        console.log(x, " Between");
    }
}

isBetween(4, 1, 10);

// Concatenate lists

function concatenate(a, b) {
    const concat = a.concat(b);
    console.log(concat, " Concatenate");
}

concatenate([1, 2, 3], [4, 5, 6]);

// Contains

function contains(a, b) {
    const c = a.includes(b);
    console.log(c, " Contains");
}

contains([1, 2, 3], 3);
contains(["parakeet", "raven", "barn owl"], "raven");
contains(["nuggets", "fries", "cola"], "Vitamin C");

// First

function first(f) {
    console.log(f[0], " First");
}

function last(l) {
    console.log(l.at(-1), " Last");
}

first([6, 4, 7])
last([6, 4, 7])

// Max Odd array

function oddArray(o) {
    const odd = o.filter((element, index) => {
        return index % 2 === 0;
    });
    console.log(odd, " Max Odd array");
}

oddArray([2, 3, 4, 5, 6, 7, 8]);
oddArray(["Easy", "Peasy", "Lemon", "Squeezy"]);

// Round

function round(r) {
    const rounded = Math.round(r);
    console.log(rounded, " Round");
}

round(1.5);
round(1.1);
round(1.7);

// Sum

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return console.log(sum, " Sum");
}

sum([6, 8]);
sum([2, 3, 4, 5]);

// Triangel

function triangel() {
    for (let i = 0; i < 7; i++) {
        switch (i % 7) {
            case 0: console.log("#"); break;
            case 1: console.log("##"); break;
            case 2: console.log("###"); break;
            case 3: console.log("####"); break;
            case 4: console.log("#####"); break;
            case 5: console.log("######"); break;
            case 6: console.log("#######"); break;
        }
    }
}

triangel();

// Word count

function wordCount(w){
    const word = w.match(/(\w+)/g).length; 
    console.log(word, " Word count"); 
}

wordCount("Hello World!");
wordCount("Good day, good sir!");  