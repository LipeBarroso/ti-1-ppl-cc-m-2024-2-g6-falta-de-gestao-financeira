import { auth, logout } from "./auth.js";

const logoutButton = document.getElementById("logout-button");

logoutButton.addEventListener("click", (event) => {
  event.preventDefault;

  logout();
});

if (!auth()) window.location.replace("./login.html");
