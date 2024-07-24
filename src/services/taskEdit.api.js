import { Base_url } from "../constant";

const taskEdit = async ({ _id, taskheading, description }) => {
  const data = { _id, taskheading, description };
  const result = await fetch(`${Base_url}/edittask`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const respoonse = await result.json();

  return respoonse;
};

export { taskEdit };
