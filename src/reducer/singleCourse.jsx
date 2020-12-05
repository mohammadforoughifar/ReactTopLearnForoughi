export const singleCourseReducer = (state = {}, action) => {
    switch (action.type) {
        case "Get_Course_By_Id":
          return {...action.payload};
      default:
        return state;
    }
  };