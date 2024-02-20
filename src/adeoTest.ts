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
  const returnArray = countryArray
    .map((country) => ({
      ...country,
      people: filterPeopleByAnimalsName(inputString, country.people),
    }))
    .filter(isPeople);

  return returnArray;
};

const isPeople = (country: Country): boolean => {
  const isPeople = country.people.length > 0;
  return isPeople;
};

export const filterPeopleByAnimalsName = (
  inputString: string,
  peopleArray: People[]
): People[] => {
  const returnArray = peopleArray
    .map((person) => ({
      ...person,
      animals: filterAnimalsByName(inputString, person.animals),
    }))
    .filter(isAnimal);

  return returnArray;
};

const isAnimal = (people: People): boolean => {
  const isAnimal = people.animals.length > 0;
  return isAnimal;
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
