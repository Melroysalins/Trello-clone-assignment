import { Base_url } from "../constant";

const getAllTaskList = async () => {
  const userID = localStorage.getItem("userID");
  const data = { userID };
  const result = await fetch(`${Base_url}/getalltask`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const respoonse = await result.json();

  return respoonse;
};

export { getAllTaskList };
