import { Base_url } from "../constant";

const taskFilter = async ({ status }) => {
  const userID = localStorage.getItem("userID");
  const data = { userID, status };
  const result = await fetch(`${Base_url}/filter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const respoonse = await result.json();

  return respoonse;
};

export { taskFilter };
