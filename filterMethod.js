const arr = [1,2,3,4,5,6,7];

const arr2 = arr.filter((num)=>{   // jo 1 return krega vohi number store krlega
    return num%2===0;
});
console.log(arr2);