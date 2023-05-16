// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// Pseudo Code:
// Input: an array
// Output: a shuffled array with the first item from the array removed
// I need to make a copy of the original array using the slice method so that I can shuffle the copy without changing the original array
// I would need to use the shift method to remove the first element from the copied array.
// I may need to use the sort and math.random methods to shuffle the elements randomly.
// I learned that 0.5 is used as a threshold to determine the order of the shuffled elements. A value greater than 0.5 will sort the elements in ascending order, whereas a value less than 0.5 will sort the elements in descending order. I can't use a number too close to 0 or 1 either since it will result in less randomness.

function shuffle(array) {
  const newArray = array.slice()
  const removeFirst = newArray.shift()
  return newArray.sort(() => Math.random() - 0.5)
}

// a) Create a test with an expect statement using the variable provided.

// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]

// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.
describe('shuffle', () => {
  it('should remove the first element and return a shuffled array', () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = [
      "chartreuse",
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron"
    ]

    const shuffle1 = shuffle(colors1)
    expect(shuffle1).toContain("blue")
    expect(shuffle1).toContain("green")
    expect(shuffle1).toContain("yellow")
    expect(shuffle1).toContain("pink")
    expect(shuffle1).not.toContain("purple")
    expect(shuffle1.length).toEqual(4)


    const shuffle2 = shuffle(colors2)
    expect(shuffle2).toContain("indigo")
    expect(shuffle2).toContain("periwinkle")
    expect(shuffle2).toContain("ochre")
    expect(shuffle2).toContain("aquamarine")
    expect(shuffle2).toContain("saffron")
    expect(shuffle2).not.toContain("chartreuse")
    expect(shuffle2.length).toEqual(5)
})
})

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// Pseudo Code:
// Input: an object that has up and down votes
// Output: the total tally of up and down votes
// Since it only requires basic arithmetic, I can just subtract downVotes from the upVotes

function totalTally(votes) {
  const upVotes = votes.upVotes
  const downVotes = votes.downVotes
  return upVotes - downVotes
}

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// // Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// // Expected output: -31

// b) Create the function that makes the test pass.

describe('totalTally', () => {
  const votes1 = { upVotes: 13, downVotes: 2 }
  const votes2 = { upVotes: 2, downVotes: 33 }
  it('should return the total tally of the votes', () => {
    expect(totalTally(votes1)).toEqual(11)
    expect(totalTally(votes2)).toEqual(-31)
  })
})

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// Pseudo Code:
// Input: two arrays
// Output: a new array with no duplicate values
// I will need to combine the two arrays by using the .concat method
// I will need to use .filter method and the value's index to get rid of the duplicates
// If the index is equal to the index of the first occurrence of the value in the combined array ensures that only the first occurrence of each value is kept, and the subsequent occurrences of the same value that have a different index will be filtered out. 

function noDupes(array1, array2) {
  const combined = array1.concat(array2)
  return combined.filter((value, index) => combined.indexOf(value) === index)
  }


// a) Create a test with an expect statement using the variables provided.


// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.

describe('no Dupes', () => {
  const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
  const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]

  it('returns an array with no duplicate values', () => {
    expect(noDupes(dataTypesArray1, dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// Stretch goals
// I would have to use the spread operator (`...`) to allow any number of arguments to pass in as an array. It also spreads the array into individual elements
// Similar to the first one, I would need to concat the arrays. However, in this function it includes a square bracket to create a new empty array and will allow arrays to be concatenated even if it doesn't know the amount of arrays in advance.

function noDupesDynamic(...arrays) {
  const combined = [].concat(...arrays)
  return combined.filter((value, index) => combined.indexOf(value) === index)
}