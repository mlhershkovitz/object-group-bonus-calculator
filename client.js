class Employee{
  constructor( name, employeeNumber, annualSalary, reviewRating ){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

const atticus = new Employee( 'Atticus', '2405', '47000', 3 ); // this creates a new object
const jem = new Employee( 'Jem', '62347', '63500', 4 );
const scout =  new Employee( 'Scout', '6243', '74750', 5 );
const robert =  new Employee( 'Robert', '26835', '66000', 1 );
const mayella =  new Employee( 'Mayella', '89068', '35000', 2 );

const employees = [ atticus, jem, scout, robert, mayella ]; // this is an array of objects

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

for (let person of employees) {
  console.log(eachEmployee(person));    
} 


class EmployeeBonus{
  constructor(employeeName, bonusPercentage, totalCompensation, totalBonus){
    this.employeeName = employeeName;
    this.bonusPercentage = bonusPercentage;
    this.totalCompensation = totalCompensation;
    this.totalBonus = totalBonus;
  }
}

function eachEmployee(person){
  if (person.reviewRating <= 2) {
    person.bp = 0;    
  } 
  else if (person.reviewRating === 3) {
    person.bp = 0.04;
  }
  else if (person.reviewRating === 4) {
    person.bp = 0.06;
  }
  else if (person.reviewRating === 5) {
    person.bp = 0.1;
  } 

  if (person.employeeNumber.length == 4) {
    person.bp += 0.05
  }
  
}

