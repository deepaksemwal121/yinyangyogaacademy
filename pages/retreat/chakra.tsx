import Head from "next/head";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Slider from "react-slick";
import Image from "next/image";
import { IoCheckmarkCircle } from "react-icons/io5";
import Teacherprofile from "../../components/sections/Teacherprofile";

const template = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Head>
        <title>Yoga Retreat</title>
        <meta name="description" content="Yin yang yoga academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        {/* hero section */}
        <section className="grid  h-[40rem] items-center bg-orange-200 px-8 py-16 md:grid-cols-2 md:px-32">
          <div>
            <Text.Secondary size="lg">Welcome to yoga retreat</Text.Secondary>
            <h3 className="text-[30px] md:text-[45px]">
              Chakras Yoga Retreat in Rishikesh
            </h3>
            <h3 className="text-[30px] md:text-[40px] ">7 Days Retreat !</h3>

            <Text.Secondary color="gray">
              Come and join us for the unforgettable experience of a lifetime
            </Text.Secondary>
            <Button
              title="Book Now"
              url="/"
              style="border-2 border-orange-600 px-6 py-2 text-orange-600 text-[24px] hover:bg-orange-600 hover:text-white"
            />
          </div>
          <div>
            <Image
              src={require("../../public/chakra.png")}
              height={411}
              width={607}
              alt="hero"
            />
          </div>
        </section>
        {/* chakra retreat section */}
        <section className="px-8 py-16 text-center md:px-32">
          <p className="text-lg font-semibold text-orange-600">
            Practicing Yoga
          </p>
          <h3 className="text-[30px] md:text-[40px]">
            Chakras Yoga Retreat in Rishikesh
          </h3>

          <div className="my-6">
            <Slider {...settings}>
              {[
                {
                  name: "Sahasrara Chakra",
                  desc: "Have you ever woken up in the morning with a feeling of not being grounded, of being somewhere you don’t belong, feeling restless with constant worries and frustration",
                  image: require("../../public/shahsrachakra.png"),
                },
                {
                  name: "Ajna Chakra",
                  desc: "Have you ever woken up in the morning with a feeling of not being grounded, of being somewhere you don’t belong, feeling restless with constant worries and frustration",
                  image: require("../../public/ajnachakra.png"),
                },
                {
                  name: "Vishuddha Chakra",
                  desc: "Have you ever woken up in the morning with a feeling of not being grounded, of being somewhere you don’t belong, feeling restless with constant worries and frustration",
                  image: require("../../public/vishuddhachakra.png"),
                },
                {
                  name: "Anhata Chakra",
                  desc: "Have you ever woken up in the morning with a feeling of not being grounded, of being somewhere you don’t belong, feeling restless with constant worries and frustration",
                  image: require("../../public/anhatachakra.png"),
                },
                {
                  name: "Manipura Chakra",
                  desc: "Have you ever woken up in the morning with a feeling of not being grounded, of being somewhere you don’t belong, feeling restless with constant worries and frustration",
                  image: require("../../public/manipura.png"),
                },
                {
                  name: "Swadhistana Chakra",
                  desc: "Have you ever woken up in the morning with a feeling of not being grounded, of being somewhere you don’t belong, feeling restless with constant worries and frustration",
                  image: require("../../public/swadhisthana.png"),
                },
                {
                  name: "Muladhara Chakra",
                  desc: "Have you ever woken up in the morning with a feeling of not being grounded, of being somewhere you don’t belong, feeling restless with constant worries and frustration",
                  image: require("../../public/muladhara.png"),
                },
              ].map((item, i) => {
                return (
                  <div key={i}>
                    <div className="mx-2">
                      <Image
                        src={item.image}
                        alt={item.name}
                        height={200}
                        width={200}
                      />
                      <div className="px-4">
                        <h3 className="text-[24px] md:text-[34px]">
                          {item.name}
                        </h3>
                        <div className="my-2">
                          <Text.Secondary size="sm" color="gray">
                            {item.desc}
                          </Text.Secondary>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </section>

        {/* undestanding chakras and their functions */}
        <section className="grid items-center  bg-orange-100 px-8  py-16 md:grid-cols-2 md:px-32">
          <div className="text-center">
            <Image
              src="https://yinyangyogaacademy.com/wp-content/uploads/2022/09/Untitled-design.png"
              alt="yoga courses"
              height={500}
              width={500}
            />
          </div>
          <div>
            <Text.Secondary size="lg">
              Energy centers within the human body
            </Text.Secondary>
            <h3 className="text-[30px] md:text-[45px]">
              Understanding Chakras &amp; Their Functioning
            </h3>
            <div className="my-2">
              <Text.Secondary color="gray" size="sm">
                Chakras are the energy centers within the human body. They help
                to regulate all the body&apos;s processes, right from organ
                function to the immune system and emotion control.
              </Text.Secondary>
            </div>

            <div className="my-2">
              <Text.Secondary color="gray" size="sm">
                If one or more of these energy centers are blocked, we may
                unconsciously be impeding the body&apos;s energy flow. When we
                suppress feelings like anger or sorrow for example, these
                chakras get blocked and in the long run, start to affect the
                body. Whenever we fall sick or experience low emotional levels,
                it is because a chakra is imbalance or is being blocked. On the
                other hand, if we endeavor to work on our physical, emotional,
                mental and spiritual health, we promote an easy flow of energy
                throughout our chakras. This retreat will help you in restoring
                the balance and energy flow throughout the body.
              </Text.Secondary>
            </div>
            <Button
              title="Book Now"
              url="/"
              style="border-2 border-orange-600 px-6 py-2 text-orange-600 text-[24px] hover:bg-orange-600 hover:text-white"
            />
          </div>
        </section>
        <section className=" grid items-center px-8 py-16 md:grid-cols-2 md:px-32">
          <div>
            <Text.Secondary size="lg">7 days chakra retreat</Text.Secondary>
            <h3 className="text-[30px] md:text-[40px]">
              About the 7 days yoga retreat
            </h3>
            {/* title desc comps */}
            <div className="my-4">
              {[
                {
                  image: require("../../public/shahsrachakra.png"),
                  title: "Self discovery",
                  desc: "On this inner journey of self discovery, we help you access your healing powers, giving you techniques that you can take back and integrate into your daily life.",
                },
                {
                  image: "",
                  title: "Self discovery",
                  desc: "On this inner journey of self discovery, we help you access your healing powers, giving you techniques that you can take back and integrate into your daily life.",
                },
                {
                  image: "",
                  title: "Self discovery",
                  desc: "On this inner journey of self discovery, we help you access your healing powers, giving you techniques that you can take back and integrate into your daily life.",
                },
              ].map((item, i) => {
                return (
                  <div
                    key={i}
                    className="my-2 flex flex-col items-center md:flex-row"
                  >
                    <Image
                      src="http://yinyangyogaacademy.com/wp-content/uploads/2022/09/yog2.png"
                      alt="icon"
                      width={150}
                      height={150}
                    />
                    <div className="ml-4">
                      <Text.Secondary size="lg" color="black">
                        {item.title}
                      </Text.Secondary>
                      <Text.Secondary size="sm" color="gray">
                        {item.desc}
                      </Text.Secondary>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-center">
            <Image
              src="https://yinyangyogaacademy.com/wp-content/uploads/2022/09/Untitled-design.png"
              alt="yoga courses"
              height={500}
              width={500}
            />
          </div>
        </section>
        {/* highlights eligibility whats included */}
        <section className="grid space-y-4 px-8 md:grid-cols-2 md:space-x-2 md:px-32">
          <div>
            <div className="mb-2 rounded bg-orange-100 p-4">
              <Text.Secondary size="lg">Highlights</Text.Secondary>
              <h3 className="text-2xl md:text-[34px]">
                Overview Of The Retreat
              </h3>
              <Text.Secondary color="gray">
                While there are many kinds of Yoga retreats, the Chakra retreat
                is primarily different in its focus. The subject of the retreat,
                as the name suggests, is the Chakras of the body. We learn about
                the obstacles blocking each chakra and the best way to deal with
                these issues effectively. Keeping this in mind, all the
                activities that we do will be focused on the chakras. Even the
                excursion that we undertake will be connected to the topic of
                the day! You get to experience a full-immersion Chakra Healing
                Program while discovering Yoga, The italian mountains and most
                importantly yourself.
              </Text.Secondary>
              <Text.Secondary color="gray">
                This retreat will recharge and boost you and your energy levels.
                Unlike other retreats, it gives you multiple tools that you can
                effectively use from home and even continue to develop each
                practice on your own. It enables you to become more peaceful and
                less stressed, helping you see things in a new perspective and
                replacing your old patterns with more productive ones. It is
                perfect in helping you understand your needs and feelings and in
                teaching you to take the time to nurture yourself.
              </Text.Secondary>
            </div>
            <div className="mt-2 rounded bg-orange-100 p-4">
              <Text.Secondary size="lg">Eligibility</Text.Secondary>
              <h3 className="text-2xl md:text-[34px]">
                Eligibility For The Retreat
              </h3>
              <Text.Secondary color="gray">
                This retreat is designed to be beneficial to everyone. Neither
                do you need to have a background in Yoga to participate nor is
                there any restriction on age. You don&apos;t need flexibility or
                strength to do this retreat. This retreat is ideal for anyone
                looking to recharge their battery, take a break from the stress
                of daily life and learn more about yourself. The only
                requirement is a keen interest in learning and a determination
                to work on your body and mind.
              </Text.Secondary>
            </div>
          </div>
          <div className="rounded bg-orange-100 p-4">
            <Text.Secondary size="lg">What&apos;s Included</Text.Secondary>
            <h3 className="text-2xl md:text-[34px]">
              All What Is Included In Retreat
            </h3>
            {[
              { title: " 2 yoga classes daily (one morning, one evening)" },
              { title: " Daily pranayama class (breath awareness practice)" },
              { title: " Daily mantra recitations and relaxations" },
              {
                title:
                  " Daily meditation class (active and passive meditations)",
              },
              {
                title:
                  " Daily outdoor excursions or satsang (caves, temples, waterfalls, or local mountain, villages)",
              },
              { title: " Daily discussion group and journaling sessions" },
              { title: " One vedic astrology session" },
              { title: " One reiki healing session" },
              { title: " 6 nights accommodation" },
              {
                title:
                  " 3 organic vegetarian or vegan delicious meals per day, plus morning herbal tea",
              },
              { title: " Pick up from Jolly Grant Airport (DED)" },
              { title: " Filtered water" },
              { title: " Use of campus facilities such as free Wi-Fi" },
              { title: " School notebook and pen" },
              { title: " 1 mala (Indian mantra necklace)" },
              { title: " Yogic cleansing kit" },
              { title: " One kirtan or sound healing session" },
            ].map((item, i) => {
              return (
                <div key={i} className="my-4 flex items-center md:my-2">
                  <IoCheckmarkCircle className="mr-2 text-orange-600" />
                  <Text.Secondary size="sm" color="gray">
                    {item.title}
                  </Text.Secondary>
                </div>
              );
            })}
          </div>
        </section>

        {/* pricing section */}
        <section className="my-32 px-8 text-center md:px-32">
          <Text.Secondary size="lg">Timetable</Text.Secondary>
          <h3 className="text-[40px]">Upcoming Events</h3>
          <div className="w-full overflow-x-auto">
            <table className="table-zebra my-4 table w-full">
              <thead className="h-16 rounded bg-orange-100">
                <tr className="font-medium text-orange-600">
                  <td>Start Date</td>
                  <td>Start End</td>
                  <td>Availability</td>
                  <td>Shared</td>
                  <td>Private</td>
                  <td className="text-center">Booking</td>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    start: "23 Jul 2022",
                    end: "29 Jul 2022",
                    availability: "Available",
                    shared: "499 USD",
                    private: "599 USD",
                    booking: "Apply Now",
                  },
                  {
                    start: "23 Jul 2022",
                    end: "29 Jul 2022",
                    availability: "Available",
                    shared: "499 USD",
                    private: "599 USD",
                    booking: "Apply Now",
                  },
                  {
                    start: "23 Jul 2022",
                    end: "29 Jul 2022",
                    availability: "Available",
                    shared: "499 USD",
                    private: "599 USD",
                    booking: "Apply Now",
                  },
                  {
                    start: "23 Jul 2022",
                    end: "29 Jul 2022",
                    availability: "Available",
                    shared: "499 USD",
                    private: "599 USD",
                    booking: "Apply Now",
                  },
                  {
                    start: "23 Jul 2022",
                    end: "29 Jul 2022",
                    availability: "Available",
                    shared: "499 USD",
                    private: "599 USD",
                    booking: "Apply Now",
                  },
                  {
                    start: "23 Jul 2022",
                    end: "29 Jul 2022",
                    availability: "Available",
                    shared: "499 USD",
                    private: "599 USD",
                    booking: "Apply Now",
                  },
                ].map((item, i) => {
                  return (
                    <tr
                      key={i}
                      className={`h-16 text-sm text-gray-600 ${
                        i % 2 !== 0 ? "bg-orange-100" : ""
                      } `}
                    >
                      <td>{item.start}</td>
                      <td>{item.end}</td>
                      <td>{item.availability}</td>
                      <td>{item.shared}</td>
                      <td>{item.private}</td>
                      <td>
                        <Button
                          title={item.booking}
                          url="/"
                          style="bg-orange-600 md:px-6 md:py-3 px-3 py-1 mx-auto text-white rounded"
                        />
                      </td>
                    </tr>
                  );
                })}
                <tr></tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Teacherprofile />
    </div>
  );
};

export default template;
