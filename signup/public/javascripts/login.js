function login() {
  const id = document.getElementById("user_id").value;
  const password = document.getElementById("user_pw").value;
  fetch("http://localhost:3000/login", {
    method: "POST",
    body: JSON.stringify({ id, password }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((a) => {
      console.log(a);
    });
}

document.getElementById("btn_login").addEventListener("click", login);
