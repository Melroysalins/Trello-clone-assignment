export const LoginValidation = ({ email, password }) => {
  let message = "";
  const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const passwordregex = /^(?=.*[A-Z])(?=.*\d).+$/;

  if (!emailregex.test(email)) {
    message = "Email is not valid";
  } else if (!passwordregex.test(password)) {
    message =
      "Password must contain at least one capital letter and one number";
  }

  return message;
};

export const SignUpValidation = ({
  firstname,
  lastname,
  email,
  password,
  confirmpassword,
}) => {
  let message = "";
  const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordregex = /^(?=.*[A-Z])(?=.*\d).+$/;

  if (!firstname || firstname?.trim().length === 0) {
    message = "First Name can't be empty";
  } else if (!lastname || lastname?.trim().length === 0) {
    message = "Last Name can't be empty";
  } else if (!email || !emailregex.test(email)) {
    message = "Email is not valid";
  } else if (!password || !passwordregex.test(password)) {
    message =
      "Password must contain at least one capital letter and one number";
  } else if (password !== confirmpassword) {
    message = "Passwords don't match";
  }

  return message;
};
