
#### 1) What is the difference between var, let, and const?
        let is used if the value of variable can change or if we want to change it later. Accessible outside the block. Redeclaration is allowed.
        const makes the variable fixed, the value cannot be changed after assigning. 
        var is not used in modern java script anymore. 
#### 2) What is the difference between map(), forEach(), and filter()? 
        forEach(): Purpose: Loops through an array and executes a function for each element.
        Use case: When you just want to do something with each item (logging, pushing into another array, etc.).
        Does not return an array.
        map(): Runs a function and runs every value in array through the function and places them in an array and returns that array.
        filter(): filters certain values from an array and returns them in an array.
#### 3) What are arrow functions in ES6?
        Arrow function is a different way of writing funtions in a short way.
        //regularfuntion
        funtion nameOfFunction(){
                console.log("hello")    
        }
        // arrow funtion in ES6
        const nameOfFunction = () =>{console.log("hello")}
#### 4) How does destructuring assignment work in ES6?
        const numbers = [10, 20, 30];

        // Traditional way
        const a = numbers[0];
        const b = numbers[1];

        // ES6 destructuring
        const [x, y, z] = numbers;

        Places the values accordingly.

#### 5) Explain template literals in ES6. How are they different from string concatenation?
        
        //With template literals

        const message = `This is line one
        This is line two
        This is line three`;

        

        //With concatenation

        const message = "This is line one\n" +
                        "This is line two\n" +
                         "This is line three";

        `` allows us to print the text as it is and avoid error due to multiple usage of "" and ''
        variable printing is also easy this way using ${variable}













