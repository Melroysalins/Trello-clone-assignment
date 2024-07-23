import { Base_url } from "../constant";

const signupUser = async ({ email, password, firstname, lastname }) => {
  const data = { email, password, firstname, lastname };
  const result = await fetch(`${Base_url}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const respoonse = await result.json();

  return respoonse;
};

export { signupUser };
