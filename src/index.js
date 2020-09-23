const person = {
  name: "Piyu",
  walk() {
    console.log(this);
  },
};

person.walk();

const w = person.walk;

w();
