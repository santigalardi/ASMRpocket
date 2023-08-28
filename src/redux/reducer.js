import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from './actions';

const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharactersFav: payload,
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharactersFav: payload,
      };

    case FILTER:
      const allCharactersFiltered = state.allCharactersFav.filter(
        (character) => character.gender === payload
      );
      return {
        ...state,
        myFavorites: payload === 'allCharacters' ? [...state.allCharactersFav] : allCharactersFiltered,
      };

    case ORDER:
      const allCharactersFavCopy = [...state.allCharactersFav];
      if (payload === 'A') {
        return {
          ...state,
          myFavorites: allCharactersFavCopy.sort((a, b) => a.id - b.id),
        };
      } else if (payload === 'D') {
        return {
          ...state,
          myFavorites: allCharactersFavCopy.sort((a, b) => b.id - a.id),
        };
      } else {
        return {
          ...state,
          myFavorites: [...state.allCharactersFav],
        };
      }

    default:
      return { ...state };
  }
};

export default reducer;