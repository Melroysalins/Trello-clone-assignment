export const taskValidation = ({ taskheading, description }) => {
  let message = "";

  if (!taskheading || taskheading?.trim().length === 0) {
    message = "Task title cann't be empty";
  } else if (!description || description?.trim().length === 0) {
    message = "Task description cann't be empty";
  }

  return message;
};
