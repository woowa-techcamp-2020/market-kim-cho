const addressButton = document.querySelector("#find_address");
const inputPostNumber = document.querySelector("#postnumber");
const inputAddress = document.querySelector("#address");

addressButton.addEventListener("click", (evt) => {
  new daum.Postcode({
    oncomplete: function (data) {
      inputPostNumber.value = data.zonecode;
      inputAddress.value = data.address;
    },
  }).open();
});
