const person = {
  talk() {
    var self = this;
    setTimeout(function () {
      console.log(self);
    }, 1000);
  },
};

person.talk();

const person1 = {
  talk() {
    setTimeout(() => console.log(this), 1000);
  },
};

person1.talk();
