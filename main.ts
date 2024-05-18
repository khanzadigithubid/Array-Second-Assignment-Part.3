//Part 3: Array with Types and Indexing - Employee Salaries

//Challenge:
//You are managing employee salaries for a company. Implement logic to calculate salaries and handle bonuses.

//1. Define a type alias named Employee with the following properties:
//• name (string): The name of the employee.
//• hoursWorked (number): The number of hours the employee worked.
//• hourlyRate (number): The hourly rate of the employee.
//• salary (number): The base salary of the employee.

type Employee = {
    name: string;
    hoursWorked: number;
    hourlyRate: number;
    salary: number;
  }

//2. Define an array named employees containing employee objects. Each employee object should include a name, hoursWorked, hourlyRate, and salary.

let employees: Employee[] = [
    {
      name: "Ali",
      hoursWorked: 20,
      hourlyRate: 25,
      salary: 60000
    },
    {
      name: "Ahmad",
      hoursWorked: 50,
      hourlyRate: 30,
      salary: 80000
    },
   {    
      name: "Abdullah",
      hoursWorked: 45,
      hourlyRate: 45,
      salary: 70000
    }
  ];
  console.log(employees)

//3. Implement a function named calculateSalary that calculates the salary for each employee based on the hours worked and hourly rate.

  function calculateSalary(employee: Employee): number {
    return employee.hoursWorked * employee.hourlyRate;
}
let employee2: Employee = {
    name: "Ahmad",
    hoursWorked: 50,
    hourlyRate:30,
    salary: 0 //  calculated
};

employee2.salary = calculateSalary(employee2);
console.log(employee2.salary); 
  
//4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary.
  
  function calculateTheSalary(hoursWorked: number, salary: number): number {
    if (hoursWorked >= 20) {
      return salary * 1.10; // apply 10% bonus
    } else {
      return salary;
    }
  };   
    let employee3: Employee = {
    name: "Abdullah",
    hoursWorked: 45,
    hourlyRate: 45,
    salary: 0
    };

employee3.salary = calculateSalary(employee3);
console.log(employee3.salary); 
