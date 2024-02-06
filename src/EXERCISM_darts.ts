/* <!-- Instructions
Write a function that returns the earned points in a single toss of a Darts game.

Darts is a game where players throw darts at a target.

In our particular instance of the game, the target rewards 4 different amounts of points, depending on where the dart lands:

Our dart scoreboard with values from a complete miss to a bullseye

If the dart lands outside the target, player earns no points (0 points).
If the dart lands in the outer circle of the target, player earns 1 point.
If the dart lands in the middle circle of the target, player earns 5 points.
If the dart lands in the inner circle of the target, player earns 10 points.
The outer circle has a radius of 10 units (this is equivalent to the total radius for the entire target), the middle circle a radius of 5 units, and the inner circle a radius of 1. Of course, they are all centered at the same point — that is, the circles are concentric defined by the coordinates (0, 0).

Write a function that given a point in the target (defined by its Cartesian coordinates x and y, where x and y are real), returns the correct amount earned by a dart landing at that point. --> */

export function score(x: number, y: number): number {
  const distance = Math.sqrt(x * x + y * y);

  if (distance <= 1) {
    // Le point est dans le cercle intérieur
    return 10;
  } else if (distance <= 5) {
    // Le point est dans le cercle du milieu
    return 5;
  } else if (distance <= 10) {
    // Le point est dans le cercle extérieur
    return 1;
  }

  // Le point est à l'extérieur du cercle
  return 0;
}
