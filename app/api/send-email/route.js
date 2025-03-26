import nodemailer from 'nodemailer';

export async function POST(req) {
    const { firstName, lastName, email, phoneNumber, message } = await req.json();

    const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // Use `true` for 465, `false` for 587
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

    const mailOptions = {
        from: email,
        to: 'vi.build.london@gmail.com',
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phoneNumber}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
    } catch (error) {
        console.error('Email sending error:', error);
        return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500 });
    }
}
