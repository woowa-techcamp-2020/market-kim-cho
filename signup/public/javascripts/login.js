/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-absolute-path */
import idValidator from "/validator/idValidator.js";
import passwordValidator from "/validator/passwordValidator.js";

const loginButton = document.getElementById("btn_login");
const idSection = document.querySelector("section.id");
const passwordSection = document.querySelector("section.password");
const idInput = document.getElementById("user_id");
const passwordInput = document.getElementById("user_pw");
const form = document.querySelector("form.login_form");

const idMessage = document.querySelector("section.id .error_message");
const passwordMessage = document.querySelector(
  "section.password .error_message"
);

function showIdError(errMessage) {
  idSection.classList.add("error");
  idInput.value = "";
  idMessage.innerText = `${errMessage}`;
}

function showPasswordError(errMessage) {
  passwordSection.classList.add("error");
  passwordInput.value = "";
  passwordMessage.innerText = `${errMessage}`;
}

function switching(response) {
  if (response.isSuccess) {
    window.location.href = "http://localhost:3000/";
  } else {
    if (response.data.isIdError) {
      showIdError("유효하지 않은 아이디입니다.");
      passwordInput.value = "";
    }
    if (response.data.isPasswordError) {
      showPasswordError("비밀번호가 잘못되었습니다.");
    }
  }
}

function login(id, password) {
  fetch("http://localhost:3000/login", {
    method: "POST",
    body: JSON.stringify({ id, password }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      switching(res);
    });
}

function checkInputEmpty() {
  const id = idInput.value;
  const password = passwordInput.value;

  let isError = false;
  if (id === "") {
    showIdError("아이디를 입력하세요");
    isError = true;
  } else if (!idValidator(id)) {
    showIdError("유효한 아이디를 입력하세요");
    isError = true;
  } else {
    idSection.classList.remove("error");
  }

  if (password === "") {
    showPasswordError("비밀번호를 입력하세요");
    isError = true;
  } else if (!passwordValidator(password)) {
    showPasswordError("유효한 비밀번호를 입력하세요");
    isError = true;
  } else {
    passwordSection.classList.remove("error");
  }

  if (!isError) {
    login(id, password);
  }
}

loginButton.addEventListener("click", checkInputEmpty);
form.addEventListener("keydown", (evt) => {
  if (evt.keyCode === 13) {
    checkInputEmpty();
  }
});
