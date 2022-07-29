// const arr = [10];

// const a = arr.reduce((accumulator,currentvalue)=>{
//     // console.log(accumulator , currentvalue);
//     return accumulator+currentvalue;
// }0);  // ye 0 intial value hogi accumulator ki

// console.log(a);

const product = [
    {
        name: "apple",
        price: 10
    },
    {
        name: "samsung",
        price: 20
    }
];

const total = product.reduce((accumulator,currentvalue)=>{
    return accumulator + currentvalue.price;
},0);  // accumulator int h or currentvalue object h
console.log(total);