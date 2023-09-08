import '../scss/main.scss';
import formBlock from "./common.js";
import loginForm from "./login.js";

document.addEventListener("DOMContentLoaded", () => {
  formBlock();
  loginForm();
  console.log(process.env.NODE_ENV)
})  