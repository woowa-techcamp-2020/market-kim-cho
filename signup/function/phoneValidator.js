function phoneValidator(name) {
  const phoneExp = /^[0-9]{10,11}$/;
  if (typeof name !== "string") return false;

  return phoneExp.test(name);
}

export default phoneValidator;
