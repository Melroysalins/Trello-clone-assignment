import { Base_url } from "../constant";

const logoutUser = async () => {
  const _id = localStorage.getItem("userID");
  const data = { _id };
  const result = await fetch(`${Base_url}/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const respoonse = await result.json();

  return respoonse;
};

export { logoutUser };
