export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'TOGGLE_TODO':
      return state.map((todo, index) =>
        index === action.payload ? { ...todo, isComplete: !todo.isComplete } : todo
      );
    case 'DELETE_TODO':
      return state.filter((_, index) => index !== action.payload);
    case 'EDIT_TODO':
      return state.map((todo, index) =>
        index === action.payload.index ? { ...todo, text: action.payload.newText } : todo
      );
    default:
      return state;
  }
};