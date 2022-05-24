var person = {
  name: 'Victor',
  surname: 'Jilescu',
  age: 20,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: true,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      surname: 'Carloson',
      age: 29,
    },
  },
};

console.log(person.friends.larry);
console.log(person.skills.javaScript);

// insert
console.log(
  person.friends.steven.name +
    ' este cu ' +
    (person.friends.steven.age - person.friends.larry.age) +
    ' ani mai mare decat ' +
    person.friends.larry.name +
    '.',
);

console.log(
  'Prietenii mei sunt: ' +
    person.friends.steven.name +
    ', ' +
    person.friends.carol.name +
    ' si ' +
    person.friends.larry.name +
    '.',
);

console.warn(
  'Afiseaza numarul de caractere al numelui de familie al lui Steven',
);

console.log(person.friends.steven.surname.length.toString());
