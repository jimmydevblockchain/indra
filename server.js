const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "othman.mekouar99@gmail.com",
    pass: "jysygqyxyqmtlxou"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const email = req.body.email;
  const phone = req.body.phone;
  const mail = {
    to: "othman.mekouar99@gmail.com",
    subject: "Nouvelle commande a traiter",
    html: `
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           `,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});