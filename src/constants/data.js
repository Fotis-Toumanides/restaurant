import images from './images';

const wines = [
  {
    title: 'ALTOS DE BERGASA',
    price: '14€',
    tags: 'AU | Bottle',
  },
  {
    title: 'IRREVERENTE Roble joven',
    price: '16€',
    tags: 'AU | Bottle',
  },
  {
    title: 'BELEZOS Crianza',
    price: '22€',
    tags: 'FR | 750 ml',
  },
  {
    title: 'SA ROTA Crianza',
    price: '20€',
    tags: 'CA | 750 ml',
  },
  {
    title: 'RIOJA VEGA Crianza',
    price: '20€',
    tags: 'IE | 750 ml',
  },
  {
    title: 'Estrella Damm',
    price: '2.70 €',
    tags: 'IE | 33cl',
  },
  {
    title: 'Turia tostada',
    price: '2.80 €',
    tags: 'IE | 33cl',
  },
  {
    title: 'Voll-Damm',
    price: '2.70 €',
    tags: 'IE | 33cl',
  },
];

const cocktails = [
  {
    title: "Mojito Gin Hendrick's",
    price: '10.50 €',
    tags: 'Gin Hendrick’s, lima, hierbabuena y sirope casero de pepino ',
  },
  {
    title: "Santorini",
    price: '7.00 €',
    tags: 'Blue Curaçao, Malibú, zumo de piña y zumo de lima',
  },
  {
    title: 'Lemon Amaretto',
    price: '8.00 €',
    tags: 'Amaretto, Bombay Sapphire, granadina y zumo de limón',
  },
  {
    title: 'Mallorcan Spirit',
    price: '8.00 €',
    tags: 'Gin Seagram’s, mermelada de fresa natural, zumo de naranja….y un ingrediente secreto! ',
  },
  {
    title: 'Mojito de sabores',
    price: '7.00 €',
    tags: 'Con siropes caseros y naturales: de fresa, frambuesa o moras',
  },
];

const awards = [
  {
    imgUrl: images.award01,
    title: 'Very nice place. I often go there.',
    subtitle: 'Biljana Popović - 19/5/2023.',
  },
  {
    imgUrl: images.award02,
    title: 'Very friendly pleasant staff, good wine and good food.',
    subtitle: 'Marga Carbonell - 16/6/2023.',
  },
  {
    imgUrl: images.award04,
    title: ' The super cozy place.',
    subtitle: 'Iliadys Landestoy - 16/6/2023.',
  },
  {
    imgUrl: images.award03,
    title: 'Delicious food and excellent service',
    subtitle: 'Ines Fernandez Parra - 12/6/2023.',
  },
];

export default { wines, cocktails, awards };
