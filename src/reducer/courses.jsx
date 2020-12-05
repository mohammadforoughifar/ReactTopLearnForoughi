export const courseReducer = (state = [], action) => {
  switch (action.type) {
    case "NOW": 
      return [...action.payload];
   
    default:
      return state;
  }
};
