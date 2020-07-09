function signup(userInfo) {
  fetch("/signup", {
    method: "POST",
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.isSuccess) {
        const { id, name, email, phone } = res.data.userObj;
        window.location.href = `/complete?id=${id}&name=${name}&email=${email}&phone=${phone}`;
      } else {
        console.log("error");
      }
    });
}

export { signup };
