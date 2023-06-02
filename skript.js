function calculateTotal(number) {
 // Change code below this line


 let newNumber = 0;

  for (let i = 1; i <= number; i += 1) {
    newNumber += i;
  }

   return newNumber;



  // Change code above this line
}
console.log(calculateTotal(12));