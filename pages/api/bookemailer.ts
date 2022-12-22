// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

const booksArray = [
  {
    title: "Sample Book",
    url: "https://www.mediafire.com/file/jnwsfma01kvyko7/dummy.pdf/file",
  },
];

let nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.hostinger.com",
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
  secure: true,
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { email, fullName, bookIndex } = req.body;
  console.log(fullName);
  const mailData = {
    from: process.env.email,
    to: email,
    subject: `Download Your Book - YinYangYoga Academy`,
    html: `<div>
    <p>Hello ${fullName} ,</p>
    Please Download Your ${booksArray[0].title} Book From Here
    <a href="https://www.mediafire.com/file/jnwsfma01kvyko7/dummy.pdf/file">Download</a>
    </div>
    <div>To Checkout Our Yoga Teacher Training Courses Please Click Here <a href="#">Click Me ---> </a></div>
    `,
  };

  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });
  res
    .status(200)
    .json({ message: "Book PDF will be emailed to your email address" });
}
