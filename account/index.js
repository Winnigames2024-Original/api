const urlParams = new URLSearchParams(window.location.search);
const ownerAccount = "Winnigames2024";
const ownerPassword = "kodiki8909";
const ownerPanelUrl = "https://winnigames2024-original.github.io/api/panel/";
const homeRedirectUrl = "https://winnigames2024-original.github.io/api/user_panel/";

const login = urlParams.get('login');
const password = urlParams.get('password');
  
  if(login != "") {
    if (password != "") {
      newCookie("login", login);
      newCookie("password", password);
    }
  }


if (type == "register") {
  
}




let allCookies = document.cookie;

function newCookie(name, value) {
  document.cookie = name + "=" + (value || "") + "; path=/";
}



function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';'); // Split into individual cookie strings
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') { // Remove leading whitespace
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) { // Check if the cookie name matches
      return c.substring(nameEQ.length, c.length); // Return the value
    }
  }
  return null; // Return null if the cookie is not found
}



 window.onload = function() {
   const user_login = getCookie("username");
   if (user_login) {
     if (user_login == ownerAccount) {
       if (user_password == ownerPassword) {
         window.location.href = ownerPanelUrl;
       }
       else {
         document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
         window.location.reload();
       }
     }
     else {
       if (user_password == "user") {
          window.location.href = homeRedirectUrl;
       }
       else {
         document.cookie = "password=user; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
         window.location.reload();
       }
     }
   }
};
