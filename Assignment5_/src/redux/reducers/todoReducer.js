import { ADD_TASK, DELETE_TASK } from "../actions/todoActions";

const initialState = {
  tasks: [],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), text: action.payload }
        ],
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      };

    default:
      return state;
  }
}

