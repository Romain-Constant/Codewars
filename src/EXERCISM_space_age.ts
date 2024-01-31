type Planet =
  | "mercury"
  | "venus"
  | "earth"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune"; // Add more planet names as needed

const planets: Record<Planet, number> = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

const OneYearearthInSeconds = 31557600;

export function age(planet: Planet, seconds: number): number {
  const result = seconds / OneYearearthInSeconds / planets[planet];

  return Number(result.toFixed(2));
}
