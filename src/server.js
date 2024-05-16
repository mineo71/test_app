const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/send', async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'jamar.walker30@ethereal.email',
            pass: 'aaTBvj77T3nTF1NtYp'
        }
    });

    try {
        const info = await transporter.sendMail({
            from: '"Oleh Rylsky" <sammie4@ethereal.email>',
            to: email,
            subject: `New message from ${name}`,
            text: message,
        });

        res.json({ messageId: info.messageId });
    } catch (error) {
        res.status(500).json({ error: 'Error sending email' });
    }
});

app.get('/test', (req, res) => {
    res.send('Backend is working');
});

app.listen(5050, () => {
    console.log('Server is running on port 5050');
});