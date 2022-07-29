function fun2(){
    function fun1(){
        // return "jkldfls";
        console.log("ds");
    }
    return fun1;
}
console.log(fun2());
const a = fun2();
console.log(typeof a);
// console.log(fun1);  // you cant access this directly