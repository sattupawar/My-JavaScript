let year = 2024
let month ="february";

month = month.toLowerCase();

switch (month) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${month} has 31 Days.`);
    break;

  case "february":
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log(`${month} has 29 days.`);
    } else {
      console.log(`${month} has 28 days.`);
    }
    break;

  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`${month} has 30 Days.`);
    break;

  default:
    console.log("Invalid month. Please try again.");
}
