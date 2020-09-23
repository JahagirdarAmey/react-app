const person = {
  name: "Amey",
  walk() {
    console.log(this);
  },
};

person.walk();

//const c = person.walk;
//c();

const c = person.walk.bind(person);
c();
