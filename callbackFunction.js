const fun2 = ()=>{
    console.log("in fun 2");
}

function fun1(callback){
    console.log("in fun 1");
    callback();
}

fun1(fun2);