export class DnDCharacter {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();

    const constitutionModifier = DnDCharacter.getModifierFor(this.constitution);
    this.hitpoints = 10 + constitutionModifier;
  }

  public static generateAbilityScore(): number {
    let abilityScore = 0;

    function getRandomArbitrary(min: number, max: number) {
      const minCeiled = Math.ceil(min);
      const maxFloored = Math.floor(max);
      return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    }

    function getRollDicesArray(launchNumber: number): number[] {
      const rollDicesArray = [];
      let rollDicesSortedArray = [];

      for (let i = 0; i < launchNumber; i++) {
        rollDicesArray.push(getRandomArbitrary(1, 7));
      }

      rollDicesSortedArray = rollDicesArray.sort((a, b) => a - b);
      rollDicesSortedArray.pop();

      return rollDicesSortedArray;
    }

    abilityScore = getRollDicesArray(4).reduce((acc, curr) => acc + curr, 0);

    return abilityScore;
  }

  public static getModifierFor(abilityValue: number): number {
    const modifier = Math.floor((abilityValue - 10) / 2);

    return modifier;
  }
}
