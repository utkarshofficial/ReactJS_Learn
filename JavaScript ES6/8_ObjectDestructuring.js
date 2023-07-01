const address = {
    street: 'A',
    city: 'G',
    country: 'I'
}

// We have to store all of the properties in seperate variable
// Repeating ❌
const street1 = address.street
const city1 = address.city
const country1 = address.country

// * Solution is destructuring 
// it's like python unpacking a,b = 10,20
const { street, city, country } = address

// * if you want to use with different name or want single prop than
const { street: st } = address

