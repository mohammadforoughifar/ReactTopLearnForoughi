import { createContext } from "react";

export const Context = createContext({
  firstName: "",
  setfirstName: () => {},
  lastName: "",
  setLastName: () => {},
  password: "",
  setPassword: () => {},
  userName: "",
  setUserName: () => {},

  validator:null,
  handellogin:()=>{},
  handelRegister:()=>{}
});
