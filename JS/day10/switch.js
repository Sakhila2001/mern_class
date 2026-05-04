//Switch
//syntax
// switch (expression) {
//   case value1:
//     // code to be executed if expression matches value1
//     break;
//   case value2:
//     // code to be executed if expression matches value2
//     break;
//   default:
//     // code to be executed if expression doesn't match any of the cases
// }

let mark = 90;
switch (mark) {
  case 90:
    console.log("You got an A");
    break;
  case 80:
    console.log("You got a B");
    break;
  case 70:
    console.log("You got a C");
    break;
  default:
    console.log("You got an F");
}
