import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(request) {
  const { email, name, message ,template1 , template2} = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "demoprojectsaptak@gmail.com",
      pass: 'rajoroduqjpgjzqv',
    },
  });

  // Sender email template
  const senderMailOptions = {
    from: "saptakexterio@gmail.com",
    to: email,
  
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    html: template2,
  };

  // Owner email template
  const ownerMailOptions = {
    from: "saptakexterio@gmail.com",
    to: 'demoprojectsaptak@gmail.com',
  
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    html: template2,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(senderMailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
         
        } else {
          reject(err.message);
        }
      });
      transport.sendMail(ownerMailOptions, function (err) {
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
