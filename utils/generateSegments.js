export const generateSegments = (seed = 50) => {
  // if (seed < 10 || seed > 90) {
  //   seed = Math.floor(Math.random() * (90 - 10) + 10);
  // }
  return [0, seed - 10, seed - 6, seed - 2, seed + 2, seed + 6, seed + 10, 100]
}
