// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  message: string;
};

const booksArray = [
  {
    title: "Sample Book",
    url: "https://www.mediafire.com/file/jnwsfma01kvyko7/dummy.pdf/file",
  },
];

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
  const { email, fullName, bookIndex } = req.body;
  console.log(fullName);
  const mailData = {
    from: process.env.email,
    to: email,
    cc: "yinyangyogaacademy@gmail.com",
    subject: `Download Your Book - YinYangYoga Academy`,
    html: `<div>
    <p>Hello ${fullName} ,</p>
    Please Download Your ${booksArray[0].title} Book From Here
    <a href="https://www.mediafire.com/file/jnwsfma01kvyko7/dummy.pdf/file">Download</a>
    </div>
    <div>To Checkout Our Yoga Teacher Training Courses Please Click Here <a href="#">Click Me ---> </a></div>
    `,
  };

  await new Promise((resolve, reject) => {
    // verify connection configuration
    console.log("Verifying Connection");
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("戦う準備ができている"); //Ready To Fight
        resolve(success);
      }
    });
  });

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err: any, info: any) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  res
    .status(200)
    .json({ message: "Book PDF will be emailed to your email address" });
}
