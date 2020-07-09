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

export { signup };
