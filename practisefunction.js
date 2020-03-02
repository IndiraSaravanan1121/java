var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName:"Indira",
    lastName: "Saravanan"
  }
  var person2 = {
    firstName:"Pooja",
    lastName: "SundarRaj"
  }

y=person.fullName.call(person2);
z=person.fullName.call(person1);

console.log(z);
console.log(y);