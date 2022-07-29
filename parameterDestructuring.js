const person = {
    name : "pappu",
    age : 43
}

function details({name,age,sex}){
    console.log(name,age,sex);
}

details(person);