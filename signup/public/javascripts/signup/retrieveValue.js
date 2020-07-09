import * as elementObj from "/javascripts/signup/elementObj.js";

export default function retrieveValue() {
  const value = {};
  Object.keys(elementObj).forEach((key) => {
    value[key] = elementObj[key].value;
  });
  console.log(value);
}
