import { Base_url } from "../constant";

const taskCreate = async ({ taskheading, description }) => {
  const userID = localStorage.getItem("userID");
  const data = { taskheading, description, userID };
  const result = await fetch(`${Base_url}/task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const respoonse = await result.json();

  return respoonse;
};

export { taskCreate };
