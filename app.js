// const a = ["dom", 'apple', "bottle"];
// const sorted = a.sort();

// console.log(sorted);

// const people = [
//     {
//         name: "Dom",
//         age: 55
//     },
//     {
//         name: "Sophie",
//         age: 98
//     },
//     {
//         name: "Mark",
//         age: 27
//     }
// ]

// const sortedByAgeAscending = people.sort(function(a, b) {
//     return a.age - b.age;
// });

// const sortedByAgeDescending = people.sort(function(a, b) {
//     return b.age - a.age;
// });

// console.log(sortedByAgeAscending)
// console.log(sortedByAgeDescending)

const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25},
];

const filteredItems = items.filter((item) => {
    return item.price <= 100;
});

// console.log(filteredItems);

const itemNames = items.map((item) => {
    return item.name;
})

// console.log(itemNames);

const foundItem = items.find((item) => {
    return item.name === 'Book';
});

// console.log(foundItem);

items.forEach((item) => {
    // console.log(item.name);
});

const inexpensiveItems = items.some((item) => {
    return item.price <= 100;
});

// console.log(inexpensiveItems)

const hasInexpensiveItems = items.every((item) => {
    return item.price <= 1000;
});

// console.log(hasInexpensiveItems);

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0);

// console.log(total)

const items2 = [1, 2, 3, 4, 5]

const includesTwo = items2.includes(9);

console.log(includesTwo)