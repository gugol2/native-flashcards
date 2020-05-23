import { AsyncStorage } from "react-native";

const DECK_STORAGE_KEY = "Flashcards:decks";

const dummyDecks = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces",
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event",
      },
    ],
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared.",
      },
    ],
  },
};

const formatDeckResults = () => {
  return AsyncStorage.setItem(
    DECK_STORAGE_KEY,
    JSON.stringify(dummyDecks)
  ).then(() => dummyDecks);
};

export function fetchDeckResults() {
  // Let's clear the storage first
  AsyncStorage.removeItem(DECK_STORAGE_KEY);
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(formatDeckResults);
}

// saveDeckTitle: take in a single title argument and add it to the decks.
export const saveDeckToStorage = (title) => {
  return AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [title]: { title, questions: [] },
    })
  );
};

export const removeDeckFromStorage = (title) => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {
    const data = JSON.parse(results);

    const { [title]: removedDeck, ...restDecks } = data;
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(restDecks));
  });
};

// getDecks: return all of the decks along with their titles, questions, and answers.
// getDeck: take in a single id argument and return the deck associated with that id.
// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
