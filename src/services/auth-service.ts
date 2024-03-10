import { RegisterRequest } from "../routes/Register";

export const baseUrl = `http://localhost:8080/api/v1`;

async function register(body: RegisterRequest) {
  const res = await fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const json = await res.json();

  return json;
}

export const Auth = { register };

// export class Auth {
//   static register(params: RegisterRequest) {}
// }
