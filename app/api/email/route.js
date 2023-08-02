import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(request) {
  const { email, name, message ,template} = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "mathematicsstudent12345@gmail.com",
      pass: 'rdyibenvxwvhofhi',
    },
  });

  const mailOptions= {
    from: "saptakexterio@gmail.com",
    to: [email, 'hiranmoyhs380@gmail.com'],
  
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    html: template,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
         
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
