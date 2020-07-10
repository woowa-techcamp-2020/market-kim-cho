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
  setModal,
  closeModal,
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
    if (!elementObj.elPhoneError.classList.contains("error")) {
      getVerificationCode(e.target, elementObj.elTimer);
      setModal(
        elementObj.elModalInfo,
        "인증번호를 발송했습니다.휴대폰 SMS 발송된 인증번호를 확인해 주세요."
      );
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
  elementObj.elBtnModal.addEventListener("click", () => {
    closeModal(elementObj.elModalInfo);
  });
  elementObj.elModalBack.addEventListener("click", () => {
    closeModal(elementObj.elModalInfo);
  });
  elementObj.elUnderAge.addEventListener("click", () => {
    setModal(
      elementObj.elModalInfo,
      "정보통신망 이용촉진 및 정보보호 등에 관한 법률에서는 만 14세 미만 아동의 개인정보 수집 시 법정대리인 동의를 받도록 규정하고 있으며, 만 14세 미만 아동이 법정대리인 동의없이 회원가입을 하는 경우 회원탈퇴 또는 서비스 이용이 제한 될 수 있습니다."
    );
  });
}
