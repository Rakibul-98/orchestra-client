import * as jwtDecode from "jwt-decode";

export function verifyToken(token) {
  return jwtDecode(token);
}
