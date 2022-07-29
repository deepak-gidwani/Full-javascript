function about(hobby){
    console.log(this.fname , this.age , hobby);
};
const user1={
    fname: "pappu",
    age: 50,
};

const user2={
    fname:"pappi",
    age:24
};

const f=about.bind(user1,"kjdfkj");
f();
