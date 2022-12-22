// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import template from "./template";

type Data = {
  message: string;
};

console.log(process.env.email);

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.hostinger.com",
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
  secure: true,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const {
    studentname,
    emailaddress,
    phoneNumber,
    country,
    gender,
    courseSelected,
    courseDate,
    selectRoomType,
    channelType,
    messageFromStudent,
  } = req.body;

  const mailData = {
    from: process.env.email,
    to: "akhilbisht83@gmail.com",
    subject: `New Registration - YinYangYoga Academy`,
    html: template(
      studentname,
      emailaddress,
      phoneNumber,
      country,
      gender,
      courseSelected,
      courseDate,
      selectRoomType,
      channelType,
      messageFromStudent,
    ),
  };

  const studentEmail = {
    from: process.env.email,
    to: emailaddress,
    subject: "Registration - YinYangYoga Academy",
    html: `<div>
    <p>Dear ${studentname},</p>
    <p>Your Registration Form For ${courseSelected} on ${courseDate} at <b>YinYangYoga Academy</b> is successfully submitted</p>
    <p>Someone from our team will reach out to you soon on your registered phone number ${phoneNumber} or email address ${emailaddress}</p>
     <br />
     <br />
    <p>Thanks and Regards</p>
    <p>Yin Yang Yoga Academy Team </p>
    <div>`,
  };

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("戦う準備ができている");
        resolve(success);
      }
    });
  });

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err: any, info: any) {
      console.log("request here");
      if (err) {
        reject(err);
        console.log(err);
      } else {
        console.log(info);
        transporter.sendMail(studentEmail, function (err: any, info: any) {
          if (err) console.log(err);
          else console.log(info);
          resolve(info);
        });
      }
    });
  });
  return res.status(200).json({ message: "Registered Successfully" });
}
