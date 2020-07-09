import * as elementObj from "/javascripts/signup/elementObj.js";
import * as validator from "/javascripts/signup//validator.js";
import retrieveValue from "./retrieveValue.js";
import { elRetype } from "./elementObj.js";
import { signup } from "./signup.js";
import {
  changeDomain,
  checkOptionAgreement,
  getVerificationCode,
  checkAgreeAll,
  checkAgree,
} from "./action.js";

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

export default function addEventListener() {
  elementObj.elId.addEventListener("blur", (e) => {
    validator.validateId(e.target);
  });
  elementObj.elPW.addEventListener("blur", (e) => {
    validator.validatePassword(e.target);
    if (elRetype.value.length > 0) validator.validateRetype(elRetype);
  });
  elementObj.elRetype.addEventListener("blur", (e) => {
    validator.validateRetype(e.target);
  });

  elementObj.elEmail.addEventListener("blur", (e) => {
    validator.validateEmail(e.target);
  });

  elementObj.elDomain.addEventListener("blur", (e) => {
    validator.validateDomain(e.target);
  });

  elementObj.elSelectDomain.addEventListener("change", (e) => {
    changeDomain(e.target);
  });

  elementObj.elPhone.addEventListener("blur", (e) => {
    validator.validatePhone(e.target);
  });

  elementObj.elName.addEventListener("blur", (e) => {
    validator.validateName(e.target);
  });

  elementObj.elOptionInfo.addEventListener("change", (e) => {
    checkOptionAgreement(e.target);
  });

  elementObj.elSignup.addEventListener("click", () => {
    validateAll();
    if (!existError()) signup(retrieveValue());
  });

  elementObj.elVerification.addEventListener("click", (e) => {
    validator.validatePhone(elementObj.elPhone);
    if (!existError()) {
      getVerificationCode(e.target, elementObj.elTimer);
    }
  });
  elementObj.elAgreeAll.addEventListener("change", (e) => {
    checkAgreeAll(e.target, [
      elementObj.elAgreeRequired,
      elementObj.elAgreeAdv,
    ]);
  });
  elementObj.elAgreeRequired.addEventListener("change", (e) => {
    checkAgree(e.target, elementObj.elAgreeAll);
  });
  elementObj.elAgreeAdv.addEventListener("change", (e) => {
    checkAgree(e.target, elementObj.elAgreeAll);
  });
}
