import * as elementObj from "/javascripts/signup/elementObj.js";
import * as validator from "/javascripts/signup//validator.js";

function validateAll() {
  validator.validateId(elementObj.elId);
  validator.validatePassword(elementObj.elPW);
  validator.validateRetype(elementObj.elRetype);
  validator.validateEmail(elementObj.elEmail);
  validator.validateDomain(elementObj.elDomain);
  validator.validatePhone(elementObj.elPhone);
  validator.validateName(elementObj.elName);
}

function existError() {
  if (document.querySelectorAll(".error").length > 0) return true;
  return false;
}

function signup(userInfo) {
  fetch("http://localhost:3000/signup", {
    method: "POST",
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
    });
}

export { validateAll, existError, signup };
