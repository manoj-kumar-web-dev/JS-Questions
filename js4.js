const person = [

    {name: "manoj", age: 28},
    {name: "jonam", age: 99},
    {name: "kumar", age: 68}
  ];
  
  const ageFilter = person.filter(Findage => Findage.age > 35).map(persons => persons.name);;
  
  console.log(ageFilter);