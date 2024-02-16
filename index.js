let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let copied = document.querySelector(".img");

const addPassword = () => {
  input.value = generateRandomPassword(8);
};

function generateRandomPassword(length) {
  var charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

const copiedPassword = () => {
  input.select();
  document.execCommand("copy");
};

btn.addEventListener("click", addPassword);
copied.addEventListener("click", copiedPassword);