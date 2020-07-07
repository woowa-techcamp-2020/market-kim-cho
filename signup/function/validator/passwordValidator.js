function passwordValidator(password) {
  const passwordExp = /^[a-zA-Z0-9]{8,20}$/;
  if (typeof password !== "string") return false;

  return passwordExp.test(password);
}

export default passwordValidator;
