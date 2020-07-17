function helloDom() {
  let hi = document.createElement("div");
  hi.innerText = "Hello viewers";
  document.body.appendChild(hi);
}

exports.helloDom = helloDom;
