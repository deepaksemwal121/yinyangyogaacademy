import Image from "next/image";
import React from "react";
import FAQ from "../../components/FAQ";

const Contact = () => {
  return (
    <div>
      <main>
        <section className="contact-header flex items-center px-32 py-16">
          <div>
            <div className=" breadcrumbs text-sm">
              <ul>
                <li className="text-white ">
                  <a>Home</a>
                </li>
                <li className="text-orange-600">Contact Us</li>
              </ul>
            </div>

            <h2 className="text-[45px] text-white">Contact Us</h2>
          </div>
        </section>
        <section className="flex w-full space-x-6 px-32 py-16">
          <div className="w-1/2">
            <h2 className="my-4 flex flex-col text-center text-[30px] font-bold md:text-[40px]">
              Get In Touch with us
              <span>
                <Image
                  src="/underline.svg"
                  width={2500 / 12}
                  height={346 / 12}
                  alt="line-decor"
                />
              </span>
            </h2>
            <p>
              We are here to answer any questions you may have about our yoga
              courses at Yin Yang Yoga. Reach out to us and we&apos;ll respond
              as soon as we can. Even if there is something you have always
              wanted to experience and can&apos;t find it on Yin Yang Yoga,let
              us know and we promise we&apos;ll do our best to find it for you
              and send you there.
            </p>
            <div className="my-4 flex w-full space-x-2">
              <div className="w-1/2">
                <h3 className="font-semibold">Address</h3>
                <address>
                  Laxman Chowk Road, Near Anandham Ashram, Tapovan, Rishikesh,
                  Uttarakhand 249192
                </address>
              </div>
              <div className="w-1/2">
                <h3 className="font-semibold">Enquiry</h3>
                <p>
                  +91 8218114342 <br />
                  +918979596944
                </p>

                <div className="mt-2">
                  <h3 className="font-semibold">Mail Us</h3>
                  <p> rishikeshyogkulam@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <h2 className="my-4 flex flex-col text-center text-[30px] font-bold md:text-[40px]">
              Send Us your query
              <span>
                <Image
                  src="/underline.svg"
                  width={2500 / 12}
                  height={346 / 12}
                  alt="line-decor"
                />
              </span>
            </h2>
            <form className="flex flex-col items-center space-y-4">
              <input
                type="text"
                className="w-[80%] rounded border-0 bg-gray-100 p-3"
                placeholder="Full Name"
              />
              <input
                type="text"
                className="w-[80%] rounded border-0 bg-gray-100 p-3"
                placeholder="Email "
              />
              <input
                type="text"
                className="w-[80%] rounded border-0 bg-gray-100 p-3"
                placeholder="Phone"
              />
              <textarea
                className="w-[80%] rounded border-0 bg-gray-100 p-3"
                placeholder="Your Query"
              />
              <input
                type="submit"
                className="w-[80%] bg-orange-600 p-3 font-semibold text-white"
              />
            </form>
          </div>
        </section>
        <section className="px-32 py-16 ">
          <h2 className="my-4 flex flex-col text-center text-[30px] font-bold md:text-[40px]">
            Frequently Asked Questions
            <span>
              <Image
                src="/underline.svg"
                width={2500 / 12}
                height={346 / 12}
                alt="line-decor"
              />
            </span>
          </h2>
          <FAQ />
        </section>
      </main>
    </div>
  );
};

export default Contact;
