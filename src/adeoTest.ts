type Animal = {
  name: string;
};

type People = {
  name: string;
  animals: Animal[];
};

type Country = {
  name: string;
  people: People[];
};

export const filterCountry = (
  inputString: string,
  countryArray: Country[]
): Country[] => {
  return countryArray
    .map((country) => {
      const filteredPeople = filterPeopleByAnimalsName(
        inputString,
        country.people
      );
      return {
        ...country,
        name: `${country.name} [${filteredPeople.length}]`,
        people: filteredPeople,
      };
    })
    .filter((country) => country.people.length > 0);
};

export const filterPeopleByAnimalsName = (
  inputString: string,
  peopleArray: People[]
): People[] => {
  return peopleArray
    .map((person) => {
      const filteredAnimals = filterAnimalsByName(inputString, person.animals);
      return {
        ...person,
        name: `${person.name} [${filteredAnimals.length}]`,
        animals: filteredAnimals,
      };
    })
    .filter((person) => person.animals.length > 0);
};

export const filterAnimalsByName = (
  inputString: string,
  animalsArray: Animal[]
): Animal[] => {
  const returnArray = animalsArray.filter((animal) =>
    animal.name.toLowerCase().includes(inputString.toLowerCase())
  );
  return returnArray;
};
