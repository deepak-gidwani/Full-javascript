
const arr = [
    {userId:1,name:"pappu"},
    {userId:2,name:"happu"},
    {userId:3,name:"kappu"}
];

// nested destructuring
const [one,,third] = arr;
console.log(one,third);  // object destructure kre h

const [{userId}, ,{name}] = arr;  // destructing of variable from obj inside array, nested destructuring
console.log(userId,name);