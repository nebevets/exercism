export const age = (planet, secondsOnPlanet) => {
  const earthYearsOn = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };
  const earthSecondsPerYear = 31557600;
  const planetSecondsPerEarthYear = (earthSecondsPerYear * earthYearsOn[planet]);
  const ageInEarthYears = secondsOnPlanet / planetSecondsPerEarthYear;
  return Math.round(ageInEarthYears * 100) / 100;
};
