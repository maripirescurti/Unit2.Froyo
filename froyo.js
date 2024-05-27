// prompt user to enter the flavors of froyo they want to order
// result stored in visitorFlavors as a string
const visitorFlavors = prompt(
  'Please enter a list of froyo flavors you would like to order, each separated by a comma:',
  'vanilla,vanilla,vanilla,strawberry,coffee,coffee'
)
console.log('Flavors String:', visitorFlavors)

// split string of flavors into array of strings
const flavorsArray = visitorFlavors.split(",")

console.log('Flavors Array:', flavorsArray)

// making array into object
let froyo = {}

console.log(froyo)

// loop that iterates through array of flavors
// and counts how many objects there are for each key
for(let i = 0; i < flavorsArray.length; i++) {
  // retrieves flavor from current array and assign it 'flavor' variable
  let flavor = flavorsArray[i]
  // check for existing property
  // if flavor doesnt exist in object = true
  if (!froyo[flavor]) {
    froyo[flavor] = 1
    // if flavor exists it adds 1 to the value
  } else {
    froyo[flavor] += 1
  }
}

// logs this count into a table with the key and amounts
console.table(froyo)
