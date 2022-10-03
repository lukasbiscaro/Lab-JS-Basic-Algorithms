// Iteration 1: Names and Input

const hacker1 = 'Felipe'
console.log(`The drivers name is ${hacker1}`)

const hacker2 = 'Jenniffer'
console.log(`The navigators name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, is has ${hacker1.length}`)
} else if (hacker1.length < hacker2.length) {
    console.log(`The navegators has the longest name, it has ${hacker2.length}`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

/* 3.1  */

let newDriverName = '';

for (let i = 0; i < hacker1.length; i++) {
    newDriverName += hacker1[i].toUpperCase() + ' ';
}

console.log(newDriverName)

// -------------------------------

/* 3.2 */

let newNavigatorsName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    newNavigatorsName += hacker2[i];
}

console.log(newNavigatorsName);

// -------------------------------

/* 3.3 */

if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.")
  } else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.")
  } else {
    console.log("What?! You both have the same name?")
  } 

