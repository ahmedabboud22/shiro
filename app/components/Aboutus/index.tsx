import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

interface datatype {
  heading: string;
  imgSrc: string;
  paragraph: string;
  link: string;
}

const Aboutdata: datatype[] = [
  {
    heading: "About us.",
    imgSrc: "/images/aboutus/imgOne.svg",
    paragraph:
      "At Shiro Concepts Investment, we are driven by creativity, innovation, and a commitment to excellence. By combining strategic insights with operational expertise, we create exceptional value for our partners and clients, positioning their ventures at the highest level in the market.",
    link: "Learn more",
  },
  {
    heading: "Our Vision.",
    imgSrc: "/images/aboutus/imgTwo.svg",
    paragraph:
      "To establish ourselves as a global authority in investment and project management, by creating projects that leave a lasting impact, shaping industries, and inspiring change.",
    link: "Learn more",
  },
  {
    heading: "Our Mission.",
    imgSrc: "/images/aboutus/imgThree.svg",
    paragraph:
      "To deliver exceptional value in every project we engage with through the seamless integration of creativity, innovation, and strategic expertise, ensuring transformative outcomes for our partners and stakeholders.",
    link: "Learn more",
  },
];

const Aboutus = () => {
  return (
    <div id="aboutus-section">
      <div className="mx-auto max-w-7xl px-4 py-10 my-10 lg:px-10 bg-lightgrey rounded-3xl relative">
        <Image
          src="/images/aboutus/dots.svg"
          width={100}
          height={100}
          alt="dots-image"
          className="absolute bottom-1 -left-20"
        />
        <h3 className="text-center font-bold text-blue text-4xl tracking-widest">
          ABOUT US
        </h3>
        <h4 className="text-center text-2xl lg:text-2xl  mt-7">
          Shiro Concepts Investment is a visionary company based in Dubai,
          specializing in transforming Business Ideas into unique realities and
          managing them to achieve excellence in their respective industries.{" "}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-x-16 lg:gap-x-32">
          {Aboutdata.map((item, i) => (
            <div
              key={i}
              className="hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group"
            >
              <h4 className="text-4xl font-semibold  text-black mb-5 group-hover:text-white">
                {item.heading}
              </h4>
              <Image
                src={item.imgSrc}
                alt={item.imgSrc}
                width={100}
                height={100}
                className="mb-5"
              />
              <h4 className="text-lg font-normal text-black group-hover:text-offwhite mb-5">
                {item.paragraph}
              </h4>
              <Link
                href="#"
                className="text-lg font-semibold group-hover:text-white text-blue hover-underline"
              >
                {item.link}
                <ChevronRightIcon width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
