import { Base_url } from "../constant";

const taskSearch = async ({ value }) => {
  const userID = localStorage.getItem("userID");
  const data = { userID, value };
  const result = await fetch(`${Base_url}/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const respoonse = await result.json();

  return respoonse;
};

export { taskSearch };
