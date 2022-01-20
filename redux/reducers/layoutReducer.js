export const darkModeReducer = (state = { darkMode: false }, action) => {
  if (action.type === "DARK_MODE_ON") {
    return { ...state, darkMode: true };
  } else if (action.type === "DARK_MODE_OFF") {
    return { ...state, darkMode: false };
  } else {
    return state;
  }
};
