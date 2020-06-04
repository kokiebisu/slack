export const randomColor = (obj: any) => {
  var keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};
