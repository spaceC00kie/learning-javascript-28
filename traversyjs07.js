//Arrays - variable that hold multiple values

const fruits = ["apples", "oranges", "pears", "grapes"]

fruits[4] = "cherries"

fruits.push("mangos")

fruits.unshift("strawberries")

//fruits.pop()
    //pops off the last item

//answers if it is an array with T/F statement
console.log(Array.isArray(fruits))
console.log(Array.isArray("snickerdoodle"))

console.log(fruits.indexOf("pears"))

console.log(fruits)
