/* Zein Mera
 * Professor Hishon
 * CISC 3300
 * 26 February 2024
    Homework 5:
    1. Create a variable via a ternary operator that assigns a string based on an expression.
    2. Create an object and loop through its properties, console logging each properties’ value
    3. Create an array of numbers. Using the map function, create a second array of those
    numbers squared.
    4. What is the DOM? What is meant by the DOM tree?
    5. What is a XSS attack? How do they work? How can you guard against them?
*/

//Question 1:
const inJersey = true;
const ternaryOutput = inJersey ? 'Welcome to Jersey City!' : 'You are leaving Jersey City!';
console.log(ternaryOutput);

//Question 2:
const jerseyCity = {
    name: 'Jersey City',
    state: 'New Jersey',
    county: 'Hudson County',
    population: 292449
};

for(const fact in jerseyCity)
{
    console.log(fact + ': ' + jerseyCity[fact]);
}

//Question 3:
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
const modifiedNumbers = numbers.map(num => num*num);
console.log(modifiedNumbers);

/*
 * Question 4:
 *      DOM refers to the Document Object Model, defines a standard for accessinng documents. The DOM defines all HTML elements
 * as objects, the properties of all HTML objects, the methods to access all HTML elements, and events for all HTML elements. 
 * The DOM is constructed as a tree of objects know as a DOM tree. The tree's root is an HTML document, branching into the <html>
 * element, which branches into the <head> and <body> elements, branching into elements within the head and body elements, which 
 * stretch into the element's attributes, elements within <head> and <body> elements then branch into the text for contained within
 * the element
 * 
 * Question 5:
 *      An XSS attack refers to Cross-Site Scripting, where malicious scripts are injected into trusted and benign websites. XSS 
 * attacks use websites as the vehicle for malicious code, usually in the form of a browser side script. A user's browser will
 * execute the script, believing it having been from a trusted website. Once executed, the script has access to any cookies, 
 * session tokens, and sensitive information. XSS scripts can even rewrite content on a website. A user can guard against a XSS
 * attack by turning off HTTP TRACE support on all web servers; developers can prevent these attacks by validating all 
 * variables, by encoding output, and sanitizing elements.
 * 
 */
