export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD_TO_DECK = "ADD_CARD_TO_DECK";
export const REMOVE_DECK = "REMOVE_DECK";
export const REMOVE_DECK_CARD = "REMOVE_DECK_CARD";

export const receiveDecks = (decks) => {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
};

export const addDeck = (title) => {
  return {
    type: ADD_DECK,
    title,
  };
};

export const addCardToDeck = (title, card) => {
  return {
    type: ADD_CARD_TO_DECK,
    title,
    card,
  };
};

export const removeDeck = (title) => {
  return {
    type: REMOVE_DECK,
    title,
  };
};
