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