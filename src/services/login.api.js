import { Base_url } from "../constant";

const loginUser = async ({ email, password }) => {
  const data = { email, password };
  const result = await fetch(`${Base_url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const respoonse = await result.json();

  return respoonse;
};

export { loginUser };
