export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

export const value = array => array
  .map(color => COLORS.indexOf(color.toLowerCase()))
  .reduce((total, item) => (total * 10) + item, 0);
