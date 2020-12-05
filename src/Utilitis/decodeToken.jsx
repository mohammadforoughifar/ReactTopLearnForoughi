import jwt from "jsonwebtoken";

export const decodeToken = token => {
    return jwt.decode(token, { complete: true });
};
export default decodeToken;
