import { GetUserById } from "../services/userService";

// export const login = () => {
//   return async (dispatch) => {
//     await dispatch({ type: "LOGIN", payload: user });
//   };
// };

export const GetUserById_Action = (id) => {
  return async (dispatch) => {
    const { data } = await GetUserById(id);
    console.log("GET_USER_BY_ID_Data", data);

    await dispatch({ type: "GET_USER_BY_ID", payload: data });
  };
};
