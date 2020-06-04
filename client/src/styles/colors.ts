export const colors = {
  oldlavendar: '#776885',
  tyrianpurple: '#5F1A37',
  lapislazuli: '#33658A',
  chineseyello: '#F6AE2D',
  orangepantone: '#F26419',
  pansypurple: '#70163C',
  amazon: '#307351',
  darksienna: '#2E0F15',
  electricindigo: '#5E2BFF',
  phlox: '#C04CFD',
  cyclamen: '#FC6DAB',
  bluepantone: '#0D21A1',
  riflegreen: '#4A5240',
  twilightlavendar: '#824670',
  bittersweet: '#FF6B6B',
  crimson: '#D72638',
  lightgreen: '#8FF7A7',
  mayablue: '#51BBFE',
};

export const randomColor = (obj: any) => {
  var keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};
