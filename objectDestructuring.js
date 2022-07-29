const obj1 = {
    key1 : "value1",
    key2 : "value2",
    key3 : 3
};
let {key1:var1,key3:var2,...rest} = obj1;  // do variable bn gye 
console.log(var1,var2);
console.log(rest);