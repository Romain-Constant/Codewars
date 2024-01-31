import {
  filterAnimals,
  filterPersons,
  hasAnimals,
  hasPersons,
  filterData,
} from "../adeo";

describe.skip("filterAnimals function tests unit", () => {
  it("should return true if animal name includes input string", () => {
    const result = filterAnimals("eo", { name: "Adeo" });
    expect(result).toEqual(true);
  });

  it("should return false if animal name does not includes input string", () => {
    const result = filterAnimals("ry", { name: "Adeo" });
    expect(result).toEqual(false);
  });
});

describe.skip("filterPerson function tests unit", () => {
  it("should return a person with an empty array of animals if input string is not includes in animal names", () => {
    const result = filterPersons("eo", {
      name: "Winifred Graham",
      animals: [
        { name: "Anoa" },
        { name: "Duck" },
        { name: "Narwhal" },
        { name: "Badger" },
        { name: "Cobra" },
        { name: "Crow" },
      ],
    });
    expect(result).toEqual({ name: "Winifred Graham", animals: [] });
  });

  it("should return a person with an array of animals with only animals name which includes input string", () => {
    const result = filterPersons("noa", {
      name: "Winifred Graham",
      animals: [
        { name: "Anoa" },
        { name: "Duck" },
        { name: "Narwhal" },
        { name: "Badger" },
        { name: "Cobra" },
        { name: "Crow" },
      ],
    });
    expect(result).toEqual({
      name: "Winifred Graham",
      animals: [{ name: "Anoa" }],
    });
  });
});

describe.skip("hasAnimals function tests unit", () => {
  it("should return false if animals array is empty", () => {
    const result = hasAnimals({
      name: "Winifred Graham",
      animals: [],
    });
    expect(result).toEqual(false);
  });

  it("should return true if animals array is not empty", () => {
    const result = hasAnimals({
      name: "Winifred Graham",
      animals: [{ name: "Anoa" }],
    });
    expect(result).toEqual(true);
  });
});

describe.skip("hasPersons function tests unit", () => {
  it("should return false if person array is empty", () => {
    const result = hasPersons({
      name: "Dillauti",
      people: [],
    });
    expect(result).toEqual(false);
  });

  it("should return true if person array is not empty", () => {
    const result = hasPersons({
      name: "Dillauti",
      people: [
        {
          name: "Winifred Graham",
          animals: [
            { name: "Anoa" },
            { name: "Duck" },
            { name: "Narwhal" },
            { name: "Badger" },
            { name: "Cobra" },
            { name: "Crow" },
          ],
        },
      ],
    });
    expect(result).toEqual(true);
  });
});

describe.skip("filterData function tests unit", () => {
  it("should return empty array if no animals contain input string in his name", () => {
    const result = filterData("romain", [
      {
        name: "Dillauti",
        people: [
          {
            name: "Winifred Graham",
            animals: [
              { name: "Anoa" },
              { name: "Duck" },
              { name: "Narwhal" },
              { name: "Badger" },
              { name: "Cobra" },
              { name: "Crow" },
            ],
          },
          {
            name: "Blanche Viciani",
            animals: [
              { name: "Barbet" },
              { name: "Rhea" },
              { name: "Snakes" },
              { name: "Antelope" },
              { name: "Echidna" },
              { name: "Crow" },
              { name: "Guinea Fowl" },
              { name: "Deer Mouse" },
            ],
          },
          {
            name: "Philip Murray",
            animals: [
              { name: "Sand Dollar" },
              { name: "Buzzard" },
              { name: "Elephant" },
              { name: "Xenops" },
              { name: "Dormouse" },
              { name: "Anchovy" },
              { name: "Dinosaur" },
            ],
          },
          {
            name: "Bobby Ristori",
            animals: [
              { name: "Kowari" },
              { name: "Caecilian" },
              { name: "Common Genet" },
              { name: "Chipmunk" },
              { name: "Aardwolf" },
              { name: "Przewalski's Horse" },
              { name: "Badger" },
              { name: "Sand Cat" },
              { name: "Linne's Two-toed Sloth" },
            ],
          },
          {
            name: "Louise Pinzauti",
            animals: [
              { name: "Manta Ray" },
              { name: "Nubian Ibex" },
              { name: "Warbler" },
              { name: "Duck" },
              { name: "Mice" },
            ],
          },
        ],
      },
      {
        name: "Tohabdal",
        people: [
          {
            name: "Effie Houghton",
            animals: [
              { name: "Zebra" },
              { name: "Ring-tailed Lemur" },
              { name: "Fly" },
              { name: "Blue Iguana" },
              { name: "Emu" },
              { name: "African Wild Ass" },
              { name: "Numbat" },
            ],
          },
          {
            name: "Essie Bennett",
            animals: [
              { name: "Aldabra Tortoise" },
              { name: "Patagonian Toothfish" },
              { name: "Giant Panda" },
              { name: "Goat" },
              { name: "Quahog" },
              { name: "Collared Lemur" },
              { name: "Aldabra Tortoise" },
            ],
          },
          {
            name: "Owen Bongini",
            animals: [
              { name: "Zebrashark" },
              { name: "Dogs" },
              { name: "Mouse" },
              { name: "Numbat" },
              { name: "African Wild Dog" },
            ],
          },
          {
            name: "Alexander Fleury",
            animals: [
              { name: "Gelada" },
              { name: "Rattlesnake" },
              { name: "Rabbit" },
              { name: "Aardvark" },
              { name: "Duck" },
              { name: "Courser" },
              { name: "Woodpecker" },
            ],
          },
          {
            name: "Curtis Fuchs",
            animals: [
              { name: "Squirrel" },
              { name: "Falcon" },
              { name: "Cat" },
              { name: "Lobe Coral" },
              { name: "Camel" },
              { name: "Broadclub Cuttlefish" },
            ],
          },
          {
            name: "Maud Lorenzo",
            animals: [
              { name: "Bush Dog" },
              { name: "Sea Urchin" },
              { name: "Gayal" },
              { name: "Tortoise" },
              { name: "Meerkat" },
              { name: "Lion" },
              { name: "Gecko" },
            ],
          },
          {
            name: "Linnie Lamb",
            animals: [
              { name: "Burro" },
              { name: "African Wild Dog" },
              { name: "Slender Snipe Eel" },
              { name: "Red Panda" },
              { name: "Baby Doll Sheep" },
              { name: "California Sea Lion" },
              { name: "Rabbits" },
            ],
          },
          {
            name: "Randall Benoît",
            animals: [
              { name: "Chameleons" },
              { name: "Bee-eater" },
              { name: "King Vulture" },
              { name: "Giant Isopod" },
              { name: "Sand Cat" },
            ],
          },
        ],
      },
    ]);
    expect(result).toEqual([]);
  });

  it("should return an array of countries containing only persons which have animals containing input string in their name", () => {
    const result = filterData("cobra", [
      {
        name: "Dillauti",
        people: [
          {
            name: "Winifred Graham",
            animals: [
              { name: "Anoa" },
              { name: "Duck" },
              { name: "Narwhal" },
              { name: "Badger" },
              { name: "Cobra" },
              { name: "Crow" },
            ],
          },
          {
            name: "Blanche Viciani",
            animals: [
              { name: "Barbet" },
              { name: "Rhea" },
              { name: "Snakes" },
              { name: "Antelope" },
              { name: "Echidna" },
              { name: "Crow" },
              { name: "Guinea Fowl" },
              { name: "Deer Mouse" },
            ],
          },
          {
            name: "Philip Murray",
            animals: [
              { name: "Sand Dollar" },
              { name: "Buzzard" },
              { name: "Elephant" },
              { name: "Xenops" },
              { name: "Dormouse" },
              { name: "Anchovy" },
              { name: "Dinosaur" },
            ],
          },
          {
            name: "Bobby Ristori",
            animals: [
              { name: "Kowari" },
              { name: "Caecilian" },
              { name: "Common Genet" },
              { name: "Chipmunk" },
              { name: "Aardwolf" },
              { name: "Przewalski's Horse" },
              { name: "Badger" },
              { name: "Sand Cat" },
              { name: "Linne's Two-toed Sloth" },
            ],
          },
          {
            name: "Louise Pinzauti",
            animals: [
              { name: "Manta Ray" },
              { name: "Nubian Ibex" },
              { name: "Warbler" },
              { name: "Duck" },
              { name: "Mice" },
            ],
          },
        ],
      },
      {
        name: "Tohabdal",
        people: [
          {
            name: "Effie Houghton",
            animals: [
              { name: "Zebra" },
              { name: "Ring-tailed Lemur" },
              { name: "Fly" },
              { name: "Blue Iguana" },
              { name: "Emu" },
              { name: "African Wild Ass" },
              { name: "Numbat" },
            ],
          },
          {
            name: "Essie Bennett",
            animals: [
              { name: "Aldabra Tortoise" },
              { name: "Patagonian Toothfish" },
              { name: "Giant Panda" },
              { name: "Goat" },
              { name: "Quahog" },
              { name: "Collared Lemur" },
              { name: "Aldabra Tortoise" },
            ],
          },
          {
            name: "Owen Bongini",
            animals: [
              { name: "Zebrashark" },
              { name: "Dogs" },
              { name: "Mouse" },
              { name: "Numbat" },
              { name: "African Wild Dog" },
            ],
          },
          {
            name: "Alexander Fleury",
            animals: [
              { name: "Gelada" },
              { name: "Rattlesnake" },
              { name: "Rabbit" },
              { name: "Aardvark" },
              { name: "Duck" },
              { name: "Courser" },
              { name: "Woodpecker" },
            ],
          },
          {
            name: "Curtis Fuchs",
            animals: [
              { name: "Squirrel" },
              { name: "Falcon" },
              { name: "Cat" },
              { name: "Lobe Coral" },
              { name: "Camel" },
              { name: "Broadclub Cuttlefish" },
            ],
          },
          {
            name: "Maud Lorenzo",
            animals: [
              { name: "Bush Dog" },
              { name: "Sea Urchin" },
              { name: "Gayal" },
              { name: "Tortoise" },
              { name: "Meerkat" },
              { name: "Lion" },
              { name: "Gecko" },
            ],
          },
          {
            name: "Linnie Lamb",
            animals: [
              { name: "Burro" },
              { name: "African Wild Dog" },
              { name: "Slender Snipe Eel" },
              { name: "Red Panda" },
              { name: "Baby Doll Sheep" },
              { name: "California Sea Lion" },
              { name: "Rabbits" },
            ],
          },
          {
            name: "Randall Benoît",
            animals: [
              { name: "Chameleons" },
              { name: "Bee-eater" },
              { name: "King Vulture" },
              { name: "Giant Isopod" },
              { name: "Sand Cat" },
            ],
          },
        ],
      },
    ]);
    expect(result).toEqual([
      {
        name: "Dillauti [1]",
        people: [
          {
            name: "Winifred Graham [1]",
            animals: [{ name: "Cobra" }],
          },
        ],
      },
    ]);
  });
});
