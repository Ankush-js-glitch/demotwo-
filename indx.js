var readlineSync = require('readline-sync');
var mineSalary= readlineSync.question('what is your salary');
console.log("my salary  is:" + mineSalary)
var score = 0

if(mineSalary>=40000)
{
  console.log('you are right ') 
  score = score + 1
}
else
{
  console.log('you are wrong')
  score = score - 1
}

console.log("your score is" + score);