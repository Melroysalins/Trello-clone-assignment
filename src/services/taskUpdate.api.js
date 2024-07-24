import { Base_url } from "../constant";

const taskUpdate = async ({ _id, status }) => {
  const data = { _id, status };
  const result = await fetch(`${Base_url}/updatetask`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const respoonse = await result.json();

  return respoonse;
};

export { taskUpdate };
