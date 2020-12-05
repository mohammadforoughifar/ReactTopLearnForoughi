import config from "./config.json";
import http from "./httpService";

export const login = (user) => {

  return http.post(`${config.toplearnapi}/user/login`, JSON.stringify(user));
};

export const GetUserById=(id)=>{
  console.log("GetUserById_service",id);
  return http.get(`${config.toplearnapi}/user/GetUserById?id=${id}`);
}
