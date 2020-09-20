/* Write a program which will check three variables (are they declared and assigned a value)
and if they are it will log their sum, and if only one of those is not assigned a value it will 
log "Sorry, you are missing at least one value"
*/
let a = 1;
b = 2;
c = 3;
if (a && b && c) {
  console.log(a + b + c);
} else {
  console.log("Sorry, you are missing at least one value");
}

/* Write a program which is very similar to the first just instead of the if-else structure use
if-elseif-else structure
*/

/* Write similar program to the first one, but instead using the if-else statement use switch statement
 */
let x = 2;
y = 3;
z = 4;
switch (x && y && z) {
  case 1:
    x + z;
    break;
  case 2:
    x - z;
    break;
  default:
    x + y - z;
    break;
}
