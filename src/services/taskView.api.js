import { Base_url } from "../constant";

const viewTaskDetails = async ({ _id }) => {
  const result = await fetch(`${Base_url}/gettask/${_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const respoonse = await result.json();

  return respoonse;
};

export { viewTaskDetails };
