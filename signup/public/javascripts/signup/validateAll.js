import * as elementObj from "/javascripts/signup/elementObj.js";
import * as validator from "/javascripts/signup//validator.js";

export default function validateAll() {
  validator.validateId(elementObj.elId);
  validator.validatePassword(elementObj.elPW);
  validator.validateRetype(elementObj.elRetype);
  validator.validateEmail(elementObj.elEmail);
  validator.validateDomain(elementObj.elDomain);
  validator.validatePhone(elementObj.elPhone);
  validator.validateName(elementObj.elName);
  if (document.querySelectorAll(".error").length > 0) return false;
  return true;
}
