// EX: 1
console.log("Ex: 1");

let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

// Data Test 1

console.log("Test Data 1");

mass = markMass;
height = markHeight;
let markBmi = mass/(height * height);

mass = johnMass;
height = johnHeight;
let johnBmi = mass/(height * height);

console.log("Mark BMI = ", markBmi.toFixed(2));
console.log("John BMI = ", johnBmi.toFixed(2));

let markHigherBMI = markBmi > johnBmi;

console.log(markHigherBMI);

// Data Test 2

markMass = 95;
markHeight = 1.88;

johnMass = 85;
johnHeight = 1.76;

console.log("Test Data 2");

mass = markMass;
height = markHeight;
markBmi = mass/(height * height);

mass = johnMass;
height = johnHeight;
johnBmi = mass/(height * height);

console.log("Mark BMI = ", markBmi.toFixed(2));
console.log("John BMI = ", johnBmi.toFixed(2));

markHigherBMI = markBmi > johnBmi;

console.log(markHigherBMI);


// EX: 2

console.log("Ex: 2");

if (markBmi > johnBmi) {
    console.log("Mark's BMI is bigger than John's BMI");
} else {
    console.log("John's BMI is bigger than Mark's BMI");
}

if (markBmi > johnBmi) {
    console.log("Mark's BMI (", markBmi.toFixed(2), ") is bigger than John's BMI (", johnBmi.toFixed(2), ")");
} else {
    console.log("John's BMI (", johnBmi.toFixed(2), ") is bigger than Mark's BMI (", markBmi.toFixed(2), ")");
}


// EX: 3

console.log("Ex: 3");
console.log("3.1");

let dolphins = [96,108, 89];
let koalas = [88, 91, 110];

let dolphinsSum = 0;
let koalasSum = 0;

for (let i = 0; i < dolphins.length; i++) {
    dolphinsSum += dolphins[i];
}

for (let i = 0; i < koalas.length; i++) {
    koalasSum += koalas[i];
}

let dolphinsAverage1 = (dolphinsSum / dolphins.length).toFixed(2);
let koalasAverage1 = (koalasSum / koalas.length).toFixed(2);

console.log("Test Data 1");
console.log("Dolphins average: ", dolphinsAverage1);
console.log("Koalas average: ", koalasAverage1);

dolphins = [97, 112, 101];
koalas = [109, 95, 123];

dolphinsSum = 0;
koalasSum = 0;

for (let i = 0; i < dolphins.length; i++) {
    dolphinsSum += dolphins[i];
}

for (let i = 0; i < koalas.length; i++) {
    koalasSum += koalas[i];
}

let dolphinsAverage2 = (dolphinsSum / dolphins.length).toFixed(2);
let koalasAverage2 = (koalasSum / koalas.length).toFixed(2);

console.log("Test Data 2");
console.log("Dolphins average: ", dolphinsAverage2);
console.log("Koalas average: ", koalasAverage2);

dolphins = [97, 112, 101];
koalas = [109, 95, 106];

dolphinsSum = 0;
koalasSum = 0;

for (let i = 0; i < dolphins.length; i++) {
    dolphinsSum += dolphins[i];
}

for (let i = 0; i < koalas.length; i++) {
    koalasSum += koalas[i];
}

let dolphinsAverage3 = (dolphinsSum / dolphins.length).toFixed(2);
let koalasAverage3 = (koalasSum / koalas.length).toFixed(2);

console.log("Test Data 3");
console.log("Dolphins average: ", dolphinsAverage3);
console.log("Koalas average: ", koalasAverage3);


console.log("3.2");

console.log("Test Data 1");
if (dolphinsAverage1 > koalasAverage1) {
    console.log("Dolphins won the competition");
} else if (dolphinsAverage1 < koalasAverage1) {
    console.log("Koalas won the competition");
} else {
    console.log("There was a draw");
}

console.log("Test Data 2");
if (dolphinsAverage2 > koalasAverage2) {
    console.log("Dolphins won the competition");
} else if (dolphinsAverage2 < koalasAverage2) {
    console.log("Koalas won the competition");
} else {
    console.log("There was a draw");
}

console.log("Test Data 3");
if (dolphinsAverage3 > koalasAverage3) {
    console.log("Dolphins won the competition");
} else if (dolphinsAverage3 < koalasAverage3) {
    console.log("Koalas won the competition");
} else {
    console.log("There was a draw");
}


console.log("3.3");

console.log("Test Data 1");
if (dolphinsAverage1 > koalasAverage1 && dolphinsAverage1 >= 100) {
    console.log("Dolphins won the competition");
} else if (dolphinsAverage1 < koalasAverage1 && koalasAverage1 >= 100) {
    console.log("Koalas won the competition");
} else {
    console.log("There was a draw");
}

console.log("Test Data 2");
if (dolphinsAverage2 > koalasAverage2 && dolphinsAverage2 >= 100) {
    console.log("Dolphins won the competition");
} else if (dolphinsAverage2 < koalasAverage2 && koalasAverage2 >= 100) {
    console.log("Koalas won the competition");
} else {
    console.log("There was a draw");
}

console.log("Test Data 3");
if (dolphinsAverage3 > koalasAverage3 && dolphinsAverage3 >= 100) {
    console.log("Dolphins won the competition");
} else if (dolphinsAverage3 < koalasAverage3 && koalasAverage3 >= 100) {
    console.log("Koalas won the competition");
} else {
    console.log("There was a draw");
}


console.log("3.4")

console.log("Test Data 1");
if (dolphinsAverage1 > koalasAverage1 && dolphinsAverage1 >= 100) {
    console.log("Dolphins won the competition");
} else if (dolphinsAverage1 < koalasAverage1 && koalasAverage1 >= 100) {
    console.log("Koalas won the competition");
} else if (dolphinsAverage1 >= 100) {
    console.log("There was a draw");
} else {
    console.log("No team won");
}

console.log("Test Data 2");
if (dolphinsAverage2 > koalasAverage2 && dolphinsAverage2 >= 100) {
    console.log("Dolphins won the competition");
} else if (dolphinsAverage2 < koalasAverage2 && koalasAverage2 >= 100) {
    console.log("Koalas won the competition");
} else if (dolphinsAverage2 >= 100) {
    console.log("There was a draw");
} else {
    console.log("No team won");
}

console.log("Test Data 3");
if (dolphinsAverage3 > koalasAverage3 && dolphinsAverage3 >= 100) {
    console.log("Dolphins won the competition");
} else if (dolphinsAverage3 < koalasAverage3 && koalasAverage3 >= 100) {
    console.log("Koalas won the competition");
} else if (dolphinsAverage3 >= 100) {
    console.log("There was a draw");
} else {
    console.log("No team won");
}


console.log("Ex: 4");

let bill = [275, 40, 430];
let tip = [];

for (let i = 0; i < bill.length; i++) {
    tip[i] = bill[i] >= 50 && bill[i] <= 300 ? 15 : 20;
}

for (let i = 0; i < bill.length; i++) {
    console.log("The bill was ", bill[i], " and the tip was ", tip[i], " so the value is: ", (bill[i] * (tip[i] / 100)).toFixed(2));
}