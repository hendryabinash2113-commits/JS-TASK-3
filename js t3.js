// functions and parameters
// 1. Welcome function

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();


// 2. Student details

function studentDetails(name, age, cgpa) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("CGPA:", cgpa);
}

studentDetails("Abinash", 25, 8.5);
studentDetails("Naveen", 23, 9);


// 3. Calculate student fee

function calculateFee(fee) {
    return fee;
}

let totalFee = calculateFee(50000);
console.log(totalFee);


// 4. Discount calculation

function discount(percent) {
    let fee = 200000;
    let discountAmount = fee * percent / 100;
    let finalFee = fee - discountAmount;

    console.log("Final Fee:", finalFee);
}

discount(10);


// 5. Default parameter

function studentForm(name, age, disability = "no") {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Disability:", disability);
}

studentForm("Abinash", 25, "yes");
studentForm("Naveen", 23, "no");
studentForm("Priya", 22);


//   function types and scope

// 1. Named function

function displayMessage(message) {
    console.log(message);
}

displayMessage("Hello JavaScript");


// 2. Anonymous function

let student = function(name) {
    console.log(name);
};

student("Abinash");


// 3. Arrow function

let printNumber = (num) => {
    console.log(num);
};

printNumber(100);


// 4. var, let and const scope

function scopeExample() {

    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;

        console.log("Inside block:", a, b, c);
    }

    console.log("Outside block:", a);

    // console.log(b); // ReferenceError
    // console.log(c); // ReferenceError
}

scopeExample();


// 5. Predict the output

console.log(value); // undefined

var value = 10;

//  callback and higher order functions

// 1. Callback function

function first(callback) {
    console.log("First function");
    callback();
}

function second() {
    console.log("Second function");
}

first(second);


// 2. Add with callback

function add(callback, a, b) {
    console.log("Addition:", a + b);
    callback(a, b);
}

function result(a, b) {
    console.log("Callback executed:", a, b);
}

add(result, 10, 20);


// 3. Subtract arrow function as callback

let sub = (num1, num2) => {
    console.log("Subtraction:", num1 - num2);
};

add(sub, 50, 20);


// 4. Multiply with callback

function multiply(callback, a, b) {
    console.log("Multiplication:", a * b);
    callback();
}

function message() {
    console.log("Multiplication completed");
}

multiply(message, 5, 10);


// 5. Divide function as callback

function divide(num1, num2) {
    if (num2 !== 0) {
        console.log("Division:", num1 / num2);
    } else {
        console.log("Cannot divide by zero");
    }
}

function calculate(callback) {
    callback(100, 5);
}

calculate(divide);


// 6. Higher-order function

function student(callback) {
    callback("Abinash");
}

function displayName(name) {
    console.log("Student Name:", name);
}

student(displayName);

//  generator functions  

// 1. Generator function

function* cashback() {
    yield "10% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let offer = cashback();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);


// 2. Call next() three times

function* numbers() {
    yield 10;
    yield 20;
    yield 30;
}

let num = numbers();

console.log(num.next());
console.log(num.next());
console.log(num.next());


// 3. Five discount messages using for-of

function* discounts() {
    yield "5% Discount";
    yield "10% Discount";
    yield "15% Discount";
    yield "20% Discount";
    yield "30% Discount";
}

for (let value of discounts()) {
    console.log(value);
}


// 4. Generator with student names

function* studentNames() {
    yield "Abinash";
    yield "Naveen";
    yield "Priya";
}

for (let name of studentNames()) {
    console.log(name);
}


// 5. Four yield statements and done property

function* myGenerator() {
    yield 10;
    yield 20;
    yield 30;
    yield 40;
}

let gen = myGenerator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

//curring and uncurring

// 1. Normal function

function add(a, b, c) {
    console.log(a + b + c);
}

add(5, 10, 15);


// 2. Curried function

function addCurried(a) {
    return function(b) {
        return function(c) {
            console.log(a + b + c);
        };
    };
}

addCurried(5)(10)(15);


// 3. Call curried function

function calculate(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        };
    };
}

console.log(calculate(5)(10)(15));


// 4. Product price, discount and quantity

function productPrice(price) {
    return function(discount) {
        return function(quantity) {
            let total = price * quantity;
            let discountAmount = total * discount / 100;

            return total - discountAmount;
        };
    };
}

let finalPrice = productPrice(1000)(10)(5);

console.log("Final Price:", finalPrice);


// 5. Normal and curried function comparison

function normalAdd(a, b, c) {
    return a + b + c;
}

function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log("Normal:", normalAdd(5, 10, 15));
console.log("Curried:", curriedAdd(5)(10)(15));


// IIFE,return and mixed practice

// 1. IIFE function

(function(product, discount) {
    console.log(`${product} is available at ${discount}% discount`);
})("Laptop", 20);


// 2. Function with return

function getNumber() {
    return 100;
}

let number = getNumber();

console.log(number);


// 3. Student marks with return

function studentMarks(marks) {
    return marks;
}

let result = studentMarks(90);

console.log("Student Marks:", result);


// 4. Student fee calculator using default parameter and callback

function calculateStudentFee(fee = 50000, callback) {

    let discount = callback(fee);

    let finalFee = fee - discount;

    return finalFee;
}

function calculateDiscount(fee) {
    return fee * 10 / 100;
}

let finalFee = calculateStudentFee(200000, calculateDiscount);

console.log("Final Student Fee:", finalFee);
