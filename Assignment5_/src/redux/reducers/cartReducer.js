import {
  ADD_ITEM,
  INCREMENT_QTY,
  DECREMENT_QTY,
  DELETE_ITEM,
  CLEAR_CART
} from "../actions/cartActions";

const initialState = {
  items: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      const exists = state.items.find((i) => i.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, qty: 1 }],
      };

    case INCREMENT_QTY:
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload ? { ...i, qty: i.qty + 1 } : i
        ),
      };

    case DECREMENT_QTY:
      return {
        ...state,
        items: state.items
          .map((i) =>
            i.id === action.payload ? { ...i, qty: i.qty - 1 } : i
          )
          .filter((i) => i.qty > 0),
      };

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
      };

    case CLEAR_CART:
      return initialState;

    default:
      return state;
  }
}
