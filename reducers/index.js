import {
  RECEIVE_DECKS,
  ADD_DECK,
  ADD_CARD_TO_DECK,
  REMOVE_DECK,
  REMOVE_DECK_CARD,
} from "../actions";

export const decks = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };

    case ADD_DECK:
      return {
        ...state,
        [action.title]: { title: action.title, questions: [] },
      };

    case ADD_CARD_TO_DECK:
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          questions: [...state[action.title].questions, action.card],
        },
      };

    case REMOVE_DECK:
      const { [action.title]: removedDeck, ...restDecks } = state;

      return {
        restDecks,
      };

    case REMOVE_DECK_CARD:
      return {
        ...state,
        ...{
          ...state[action.deck],
          questions: state[action.deck].questions.map(
            (card) => card !== action.card
          ),
        },
      };

    default:
      state;
  }
};
