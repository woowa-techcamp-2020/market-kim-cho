let timerId = null;

function changeDomain(target) {
  const { value } = target;
  const domainEl = document.getElementById("domain_etc");
  if (value === "etc") {
    domainEl.removeAttribute("disabled");
  } else domainEl.value = value;
}

function checkOptionAgreement(target) {
  const elSection = target.closest(".section");
  elSection.classList.toggle("disabled");
}

function formatTime(sec) {
  const secNumber = parseInt(sec, 10);
  const minutes = Math.floor(secNumber / 60);
  const seconds = secNumber % 60;

  return [minutes, seconds].map((v) => (v < 10 ? "0" + v : v)).join(":");
}

function setTimer(target) {
  let time = 10;
  const timer = target;
  if (timerId !== null) clearInterval(timerId);
  return new Promise((resolve) => {
    timerId = setInterval(() => {
      timer.innerText = formatTime(time);
      if (time === 0) {
        clearInterval(timerId);
        timerId = null;
        resolve(time);
      }
      time -= 1;
    }, 1000);
  });
}

function getVerificationCode(target, elTimer) {
  target.closest(".section").classList.add("on_verification");
  target.innerText = "재전송";
  setTimer(elTimer).then((time) => {
    if (time === 0) {
      const infoEl = target.parentElement.nextElementSibling;
      infoEl.classList.add("error");
      infoEl.innerText =
        "입력시간을 초과하였습니다. 인증번호 재전송 후 다시 시도해 주세요.";
    }
    target.closest(".section").classList.remove("on_verification");
    target.innerText = "인증받기";
  });
}

function checkAgreeAll(target, children) {
  children.forEach((child) => {
    if (!target.checked) child.checked = false;
    else child.checked = true;
  });
}

function checkAgree(target, parent) {
  if (!target.checked) parent.checked = false;
}

function setModal(modal, msg) {
  const parentEl = modal.parentElement;
  parentEl.classList.add("modalOn");
  modal.querySelector("p").innerText = msg;
}

function closeModal(modal) {
  const parentEl = modal.parentElement;
  parentEl.classList.remove("modalOn");
  modal.querySelector("p").innerText = "";
}

export {
  changeDomain,
  checkOptionAgreement,
  getVerificationCode,
  checkAgreeAll,
  checkAgree,
  setModal,
  closeModal,
};
