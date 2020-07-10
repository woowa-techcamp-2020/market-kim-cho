import {
  elId,
  elPW,
  elEmail,
  elDomain,
  elName,
  elPhone,
  elPostNumber,
  elAddress,
  elAddressDetail,
  elAgreeAdv,
} from "/javascripts/signup/elementObj.js";

// 백엔드 코드수정 후 추가 필요!

export default function retrieveValue() {
  return {
    id: elId.value,
    password: elPW.value,
    email: elEmail.value + "@" + elDomain.value,
    name: elName.value,
    phone: elPhone.value,
    postNumber: elPostNumber.value,
    address: elAddress.value,
    detailAddress: elAddressDetail.value,
    agreeAdvertise: elAgreeAdv.checked,
  };
}
