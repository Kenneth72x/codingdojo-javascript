//Task: print out all odd numbers from 1 to 20.
for (var i = 1; i < 20; i += 2) {
  console.log(i);
}

//Sum numbers from 1 to 5, print out the sum and current number
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
  console.log("Current Num:", i, "Sum:", sum);
}

//was not understanding on line 9, how the code was to sum += 1 was not yielding
//the expected output in the Learn platform. After being walked through the code,
//the 1 in line 9 was changed to i to reach the expected output which is adding
//the sum to the stored variable.
