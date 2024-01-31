const data = require("./data");

type Animal = {
  name: string;
};

type Person = {
  name: string;
  animals: Animal[];
};

type Country = {
  name: string;
  people: Person[];
};

export function filterAnimals(input: string, animal: Animal): boolean {
  return animal.name.toLowerCase().includes(input.toLowerCase());
}

export function filterPersons(input: string, person: Person): Person {
  const filteredAnimals = person.animals.filter((animal) =>
    filterAnimals(input, animal)
  );

  return {
    ...person,
    name: `${person.name} [${filteredAnimals.length}]`,
    animals: filteredAnimals,
  };
}

export function filterCountry(input: string, country: Country): Country {
  const filteredPersons = country.people
    .map((person) => filterPersons(input, person))
    .filter(hasAnimals);
  return {
    ...country,
    name: `${country.name} [${filteredPersons.length}]`,
    people: filteredPersons,
  };
}

export function hasAnimals(person: Person): boolean {
  return person.animals.length === 0 ? false : true;
}

export function hasPersons(country: Country): boolean {
  return country.people.length === 0 ? false : true;
}

export function filterData(input: string, data: Country[]): Country[] {
  return data
    .map((country) => filterCountry(input, country))
    .filter(hasPersons);
}
