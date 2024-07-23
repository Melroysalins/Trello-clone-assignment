import { Base_url } from "../constant";

const getUser = async ({ _id }) => {
  const data = { _id };
  const result = await fetch(`${Base_url}/getuser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const respoonse = await result.json();

  return respoonse;
};

export { getUser };
