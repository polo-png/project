//Object property shorthand

const name = "Andrew"
const age = 27

const user = {
    name,
    age,
    location: "Philadelphia"
}

console.log(user)

//Object destructuring

const product = {
    label : "Red notebook",
    price : 3,
    stock : 281,
    salePrice: undefined
}

const {label: product_label, stock} = product

console.log(product_label)