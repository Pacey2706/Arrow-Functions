/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a,b){
    //codeblock
    return a + b;
}
sum = addTwoNumbers(3,5);
console.log(sum)

// Arrow Function With Parameters
const addTwoNumbers2 = (a,b) => {
    //codeblock
    return a + b;
}
sum2 = addTwoNumbers2(6,5);
console.log(sum2)

// Single Line Arrow Function With Parameters
const addTwoNumbers3 = (a,b) => a + b;
sum3 = addTwoNumbers3(6,7)
console.log(sum3)
// Implicit Returns
const saySomething = message => console.log(message);
saySomething('hello there!!');

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
        this is a multiline string!!
    <p>`
);
console.log(returnMultipleLines());
