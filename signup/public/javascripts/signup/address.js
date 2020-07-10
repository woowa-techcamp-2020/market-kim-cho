const addressButton = document.querySelector("#find_address");
const inputPostNumber = document.querySelector("#postnumber");
const inputAddress = document.querySelector("#address");
const modal = document.querySelector("#modal_map");
const wrap = document.querySelector("#wrap");

addressButton.addEventListener("click", (evt) => {
  wrap.classList.add("mapOn");
  new daum.Postcode({
    oncomplete: function (data) {
      inputPostNumber.value = data.zonecode;
      inputAddress.value = data.address;
      wrap.classList.remove("mapOn");
    },
  }).embed(modal);
});
