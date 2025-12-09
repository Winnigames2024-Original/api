const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get('type');

if (type == "redirect") {
  const redirectUrl = urlParams.get('url');
  window.location.href = "./redirect?url=" + redirectUrl
}

if (type == "cookieDialog") {
  const fileName = urlParams.get('file');
  const visibleAlert = urlParams.get('alert');
  if (fileName == "winnicookies.cookie") {
    if (visibleAlert == "true") {
      alert("Cookie message visible now");
    }
    else {
      console.log("Cookie message visible now");
      console.log(type);
      console.log(fileName);
    }
    console.log("Cookie Visible Now!!!");
    console.log(type);
    console.log(fileName);
  }
}
