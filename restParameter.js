function addall(...num){
    let total=0;
    for(let x of num){
        total+=x;
    }
    return total;
};

console.log(addall(1,2,3,4));
