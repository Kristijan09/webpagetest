/**
 * 1. Write JS script that will log the following object:
 *  let ob = {
 *     models: ['Ford', ‘Skoda'],
 *     colors: ['Red', 'Grey'],
 *  };
 * from the array given.
 */

// let cars = [
//   {
//     model: "Ford",
//     color: "Red",
//   },
//   {
//     model: "Skoda",
//     color: "Grey",
//   },
//   {
//     model: "Ford",
//     color: "Grey",
//   },
// ];

// let ob = Object.create({ models: [], colors: [] });

// for (let car of cars) {
//   if (ob.models.indexOf(car.model) == -1) {
//     ob.models.push(car.model);
//   }
// }
// console.log(ob);
/**
 * 2. Write JS program that will log the following array:
 * let a = ['Apple', 'Bannana', 'Pear', 'Orange']
 * from the object given.
 */

// let fruits = {
//   subtropical: {
//     area: "Far from the Equator",
//     list: ["Apple", "Pear"],
//   },
//   tropical: {
//     area: "Near the Equator",
//     list: ["Banana", "Orange"],
//   },
// };

/**
 * 3. Write JS program that will switch positions of the keys and values
 * inside a certain object and log the new object.
 *
 * ex. {a: 1, b: 2, c: 3} returns {1: "a", 2: "b", 3: "c"}
 */

/**
 * 4. Write JS program that will first flatten the given array, and then
 * it will remove the duplicates inside the new array,
 * and in the end it will sort the array.
 */

// let numbers = [
//   [7, 2, 4],
//   [4, 3],
//   [5, 1, 6],
//   [9, 3, 7, 2, 4],
// ];
// let newarr = [];

// numbers.flat().forEach((el) => {
//   if (newarr.indexOf(el) == -1) {
//     newarr.push(el);
//   }
// });

// newarr.sort();

// console.log(numbers.flat());

/**
 * 5. Write JS program that will find the longest word from a given string.
 *
 * ex. "I am student in the CodeAcademy school." returns "CodeAcademy"
 */

/**
 * 6. Write JS program that will compare two arrays and will return array
 * that hold only the items found in both of the arrays.
 *
 * ex. ["apple", "watermelon", "lemon", "pear"], ["pear", "orange", "grape", "lemon"] returns ["pear", "lemon"]
 */

let a = ["apple", "watermelon", "lemon", "pear"];
let b = ["pear", "orange", "grape", "lemon"];

let c = a.filter((el) => {
  return b.indexOf(el) != -1;
});

console.log(c);

/**
 * 7. Write JS program that will render a button inside a HTML document
 * and when clicked it will change the background-color of the
 * top-level tag rendered in that document(ex. the body tag).
 */

/**
 * 8. Write JS program that will generate a random quote from the given
 * list of quotes, and it will display into the browsera, and alongside
 * it will also list the name of the man behind.
 */

/**
 * 9. Write JS program that will find words into a string and
 * will capitalize them if they are not, and leave them as
 * they are if they are capitalized.
 *
 * use hint : method toUpperString()
 *
 * ex. "Head, shoulders, nees and Toes" returns "Head, Shoulders, Nees And Toes"
 */

/**
 * 10. Write JS program that will filter out only the words from an array
 * that have the given letter (as a second argument) in them, and
 * if there is no such word it will return "Sorry, no word found";
 *
 * ex. filter(["Wood", "Iron", "Towel", "Bridge"], "w") returns ["Wood", "Towel"]
 */

/**
 *
 */
