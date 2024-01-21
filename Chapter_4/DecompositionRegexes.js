
// String Decomposition

// STRING SPLIT

var test1 =  'Ramen, noodle, soup, vegetables';
console.log("Example 1.1",test1.split(",")); // Returns an array ['chicken,'noodle','soup','broth']

// Passing empty string will create an array of all seperated characters
console.log("Example 1.2",'Vegetables'.split('')); // Prints [ 'V', 'e', 'g', 'e','t', 'a', 'b', 'l','e', 's']
    


// STRING REPLACE

console.log('Wizard of Oz'.replace('Wizard','Lizard')); // Prints 'Lizard of Oz'


// REGEX - REGULAR EXPRESSIONS

// Regular expressions(regexes) are a set of characters that define a search pattern.

// i      Perform case-insensitive matching
// g       Perform a global match (find all matches rather than stopping after first match)
// m      Perform multiline matching


/*
    RegExp has the following two functions:
    • search(): Tests for matches in a string. This returns the index of the match.
    • match(): Tests for matches. This returns all the matches
*/

/*
    The Javascript String object also has the following two regex-related functions that accept the RegExp object as an argument
        exec(): Tests for matches in a string. This returns the first match.
        test(): Tests for matches in a string. This returns true or false.
*/

// BASIC REGEX

// Basic Regex Rules

// ^: Indicates the start of a string/line
// \d: Finds any digit
// [abc]: Finds any character between the brackets
// [^abc]: Finds any character not between the brackets
// [0-9]: Finds any digit between the brackets
// [^0-9]: Finds any digit not between the brackets
// (x|y): Finds any of the alternatives specified

var str = "JavaScript DataStructures";
var n = str.search(/DataStructures/);
console.log(n); // Prints '11'

// COMMONLY USED REGEXES


