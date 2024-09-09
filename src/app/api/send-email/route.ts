import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

// console.log(name, email, message);
console.log({
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS,
});

  // Configura el transporter de nodemailer
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    // Envía el correo
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'samuelsolerpico99@gmail.com',
      subject: 'Nuevo mensaje de contacto',
      text: `
        Nombre: ${name}
        Email: ${email}
        Mensaje: ${message}
      `,
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    })

    return NextResponse.json({ message: 'Correo enviado con éxito' })
  } catch (error) {
    console.error('Error al enviar el correo:', error)
    return NextResponse.json({ message: 'Error al enviar el correo' }, { status: 500 })
  }
}
