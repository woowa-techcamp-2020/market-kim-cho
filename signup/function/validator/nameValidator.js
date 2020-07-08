function nameValidator(name) {
  const nameExp = /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/;
  if (typeof name !== "string") return false;

  return nameExp.test(name);
}

export default nameValidator;
