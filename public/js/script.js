/* REVEAL SCROLL ANIM */

function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);

/* BTN MOBILE */

const nav = document.querySelector("#navbar");

function menu() {
  nav.classList.toggle("active");
}

window.onscroll = () => {
  nav.classList.remove("active");
};

/* SEND EMAIL */

function sendEmail() {
  let name = select("inputName");
  let email = select("inputEmail");
  let message = select("inputMessage");

  if (!name || !email || !message) {
    alert("Preencha todos os campos!");
    return;
  } else if (!validaEmail(email)) {
    return;
  }

  let objEmail = { name, email, message };

  const options = {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(objEmail),
  };

  fetch("https://odontobrai.herokuapp.com/send", options).then((res) => {
    res.text().then((msg) => {
      alert(msg);
    });
  });
}

function select(id) {
  let selected = document.querySelector(`#${id}`).value;

  return selected;
}

function validaEmail(valorEmail) {
  if (valorEmail.indexOf(" ") >= 0) {
    alert("O email não pode conter espaços!");
    return false;
  } else {
    let validacaoRegex = /\S+@\S+\.\S+/;
    let resultadoValidacao = validacaoRegex.test(valorEmail);

    if (resultadoValidacao) {
      return true;
    } else {
      alert("Digite um email válido!");
      return false;
    }
  }
}
