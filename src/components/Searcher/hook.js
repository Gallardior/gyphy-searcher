import { useReducer } from "react";

const ACTIONS = {
  update_keyword: 1,
  update_rating: 2,
}

const reducer = (state, actions) => {
  switch (actions.type) {
    case ACTIONS.update_keyword:
      return {
        ...state,
        keyword: actions.payload
      }
    case ACTIONS.update_rating:
      return {
        ...state,
        rating: actions.payload
      }
    default:
      return state
  }
}

export default function useForm ({initialKeyword, initialRating}) {
  const [state, distpach] = useReducer(reducer, {
    keyword: decodeURI(initialKeyword),
    rating: initialRating,
  })
  const {keyword, rating} = state

  return {
    keyword, 
    rating,
    updateKeyword: keyword => distpach({type: ACTIONS.update_keyword, payload: keyword}),
    updateRating: rating => distpach({type: ACTIONS.update_rating, payload: rating}),
  }
}