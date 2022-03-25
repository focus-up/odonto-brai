require("dotenv").config();
const nodemailer = require("nodemailer");

const sendEmail = (req, res) => {
  const user = process.env.USER;
  const pass = process.env.PASS;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  transporter
    .sendMail({
      from: user,
      to: "oliverlohann12@gmail.com",
      subject: `${req.body.name}`,
      html: `<p><strong>Nome:</strong> ${req.body.name}</p>
                <p><strong>Email:</strong> ${req.body.email}</p>
                <p><strong>Mensagem:</strong> ${req.body.message}</p>`,
    })
    .then((info) => {
      res.send("Email enviado com sucesso!");
    })
    .catch((error) => {
      res.send("Ocorreu um erro inesperado");
    });
};

module.exports = { sendEmail };
