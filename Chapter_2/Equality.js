/*

JavaScript is a scripting language, and variables are not assigned a type during
declaration. Instead, types are interpreted as the code runs.
Hence, === is used to check equality more strictly than ==. === checks for both the
type and the value, while == checks only for the value.
1 "5" == 5 // returns true
2 "5" === 5 // returns false
"5" == 5 returns true because "5" is coerced to a number before the comparison.
On the other hand, "5" === 5 returns false because the type of "5" is a string, while 5 is
a number

*/

/*

Most strongly typed languages such as Java use isEquals() to checck whether two objects are the same.
You may be tempted to simply use the == operator to check whether two 
objects are the same in JavaScript.
However, this will not evaluate to true.
1  var o1 = {};
2  var o2 = {};
3
4  o1 == o2 // returns false
5  o1 === o2 // returns false

Although these objects are equivalent (same properties and values), they are not 
equal. Namely, the variables have different addresses in memory

 1  function isEquivalent(a, b) {
 2      // arrays of property names
 3      var aProps = Object.getOwnPropertyNames(a);
 4      var bProps = Object.getOwnPropertyNames(b);
 5
 6      // If their property lengths are different, they're different objects
 7      if (aProps.length != bProps.length) {
 8          return false;
 9      }
10
11      for (var  i = 0; i < aProps.length; i++) {
12          var propName = aProps[i];
13
14          // If the values of the property are different, not equal
15          if (a[propName] !== b[propName]) {
16              return false;
17          }
18      }
19
20     // If everything matched, correct
21     return  true;
22  }
23  isEquivalent({'hi':12},{'hi':12}); // returns true



Note : Search for 'Lodash' and 'Underscore' Js Libraries

1  var function1 = function(){console.log(2)};
2  var function2 = function(){console.log(2)};
3  console.log(function1 == function2); // prints 'false'


*/