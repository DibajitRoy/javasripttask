function calculateSalary(name, salaryStr){ 

 

let salary = Number(salaryStr); 

 

let bonus = 500; 

 

let total = salary + bonus; 

 

let text = "Employee: " + name; 

 

console.log(text); 

 

console.log("Total Salary =", total); 

 

if(total > 5000){ 

console.log("High Salary"); 

} 

else{ 

console.log("Low Salary"); 

} 

 

console.log("First 3 Numbers"); 

 

for(let i = 1; i <= 3; i++){ 

console.log(i); 

} 

 

let message = name + " works in company"; 

 

console.log(message); 

 

return total; 

 

} 

 

let result = calculateSalary("Rahim","4800"); 

 

console.log("Final Salary:",result); 