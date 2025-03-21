const { Router } = require('express');
const router = Router();

const transporter = require('../config/mailer');

router.post('/send-email', async (req, res) => {
    const { name, email, phone, message } = req.body;
    
    const contentHtml = `
        <h1>User information</h1>
        <ul>
            <li>User: ${name}</li>
            <li>Email: ${email}</li>
            <li>Phone: ${phone}</li>
        </ul>
        <p>Message: ${message}</p>
    `

    const info = await transporter.sendMail({
        from: '"Secreatary Mail" <nodemailer@sent.com>', //send address
        to: 'example@domain.com', // list of receviers
        subject: 'Email from Nodemailer',
        html: contentHtml 
    })

    console.log(`Message sent ${info.messageId}`);
    res.redirect('success.html')
});

module.exports = router;