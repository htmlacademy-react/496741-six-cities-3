import { NamePlaceCard } from '../../../const.ts';

const isFavoriteName = (cardName: keyof typeof NamePlaceCard): boolean =>
  NamePlaceCard[cardName] === NamePlaceCard.FAVORITES;

export { isFavoriteName };
