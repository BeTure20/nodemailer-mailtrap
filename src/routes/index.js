const { Router } = require("express");
const router = Router();

const transporter = require("../config/mailer");

router.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  const contentHtml = `
        <h1>User information</h1>
        <ul>
            <li>User: ${name}</li>
            <li>Email: ${email}</li>
            <li>Phone: ${phone}</li>
        </ul>
        <p>Message: ${message}</p>
    `;

  try {
    const info = await transporter.sendMail({
      from: '"Secreatary Mail" <nodemailer@sent.com>', //send address
      to: "example@domain.com", // list of receviers
      subject: "Get in touch with us",
      html: contentHtml,
    });
    return res.status(200).json({ message: "Email sent successfully", info });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
  //   console.log(`Message sent ${info.messageId}`);
  //   return res.status(200).json({ message: "Email sent successfully", info });
  // res.redirect("success.html");
});

module.exports = router;
