var person = {
  name: 'Victor',
  surname: 'Jilescu',
  age: 20,
  petOwner: false,
  skills: ['html', 'javaScript', 'css'],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(
  'Afiseaza propozitia: “Ma numesc xxx yyy si stiu html si css. Foloseste notatia cu paranteze patrate',
);
// add code

console.warn(
  'Afiseaza propozitia “Am x prieteni: Larry, Steven si Carol.”',
  'Foloseste proprietatea length si apeleaza direct proprietatile name ale obiectelor.',
);

console.log('Am' + person.friends.length + 'prieteni:');
// add code
