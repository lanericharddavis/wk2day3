
//Tell if Number is Even or Odd Function
function isThisEvenOfOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} ${"is an even number"} `)
  } else {
    console.log(`${num} ${"is an odd number"} `)
  }
}

isThisEvenOfOdd(5)


//Count up to a certain number indicating if number is
console.log("Start the Count!")

function oddOrEven(upToNum) {
  for (let i = 0; i <= upToNum; i++) {
    if (i % 2 === 0) {
      console.log(`${i} ${"even"} `)
    } else {
      console.log(`${i} ${"odd"} `)
    }
  }
}

oddOrEven(20)