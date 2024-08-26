
const completeUser = { name, district}

// Rest operator
const { name, district} = completeUser


// spread operator
// completeUser = const { name1, district1}

//Date
new Date().getFullYear


//Higher order function
const arr = [2, 4, 6, 7]
arr.map(() => {})
//MAP
const a = arr.map((item) => item + 1) 
//is same as
const ab = arr.map((item) => {item + 1}) 
//is same as
const abc = arr.map((item) => {
    const calc = item + 1;
    return calc;
}) 


//filter 
const users = [
    {name: 'ram', age: 12},
    {name: 'Sita', age: 24}
]

const adults = users.filter((item) => {
    const condition = item.age > 18;
    return condition;
})


//find
const adult = users.find((item) => {
    item.age > 18;
})


//Mutable functions
// Can change the original array
//Add item to the array by using push

users.push('Simana')

// .pop removes the last item from the array and .shift removes the first item from the array
//Push, pop, shifts are called mutable functions


