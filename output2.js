function studentInfo(name, ageStr, markStr){ 

 

let age = Number(ageStr); 

let marks = Number(markStr); 

 

let total = marks + 10; 

 

let text = "Student: " + name + " Age: " + age; 

 

console.log(text); 

 

if(total >= 80){ 

console.log("Grade A"); 

} 

else if(total >= 60){ 

console.log("Grade B"); 

} 

else{ 

console.log("Grade C"); 

} 

 

console.log("Marks List"); 

 

for(let i = 1; i <= 5; i++){ 

console.log(i); 

} 

 

console.log("Letters in Name"); 

 

for(let letter of name){ 

console.log(letter); 

} 

 

return name + " Result Processed"; 

 

} 

 

let result = studentInfo("Maruf","20","70"); 

 

console.log(result); 

 