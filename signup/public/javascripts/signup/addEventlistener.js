import * as elementObj from "/javascripts/signup/elementObj.js";
import * as validator from "/javascripts/signup//validator.js";
import retrieveValue from "./retrieveValue.js";

export default function addEventListener() {
  elementObj.elId.addEventListener("blur", (e) => {
    validator.validateId(e.target);
  });
  elementObj.elPW.addEventListener("blur", (e) => {
    validator.validatePassword(e.target);
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
    validator.changeDomain(e.target);
  });

  elementObj.elPhone.addEventListener("blur", (e) => {
    validator.validatePhone(e.target);
  });

  elementObj.elName.addEventListener("blur", (e) => {
    validator.validateName(e.target);
  });

  elementObj.elOptionInfo.addEventListener("click", (e) => {
    validator.checkOptionAgreement(e.target);
  });

  elementObj.elSignup.addEventListener("click", (e) => {
    retrieveValue();
  });
}
