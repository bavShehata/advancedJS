// validation script here
const reg = {
  username: /^[a-z\d]{5,12}$/i,
  email: /^([^@]+)@(.+)\.(.+)$/i, //And send a confirmation Email anyways
  password: /^[\w@-]{8,20}$/,
  telephone: /^\d{11}$/,
  slug: /^[a-z\d-]{8,20}$/,
};

const validate = (field, regEx) => {
  if (regEx.test(field.value)) {
    field.style.borderColor = "green";
  } else {
    field.style.borderColor = "red";
  }
  if (field.name == "email") {
    Mailcheck.run({
      email: field.value,
      suggested: function (suggestion) {
        console.log(`Do you mean ${suggestion.full}?`);
        field.style.borderColor = "red";
      },
      empty: function () {
        console.log(`You are all set!`);
        field.style.borderColor = "green";
      },
    });
  }
};
const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("blur", () => {
    validate(input, reg[input.name]);
  });
});
