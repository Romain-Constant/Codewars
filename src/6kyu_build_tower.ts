export const towerBuilder = (nFloors: number): string[] => {
  const tower = [];

  for (let i = 0; i < nFloors; i++) {
    const spaces = " ".repeat(nFloors - i - 1);
    const stars = "*".repeat(2 * i + 1);
    const floor = spaces + stars + spaces;
    tower.push(floor);
  }

  return tower;
};
