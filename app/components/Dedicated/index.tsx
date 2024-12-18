import Image from "next/image";

const Dedicated = () => {
  return (
    <div className="relative">
      <Image
        src="/images/dedicated/spiral.svg"
        height={272}
        width={686}
        alt="spiral-design"
        className="absolute left-0 hidden lg:block -z-10"
      />

      <div className="mx-auto max-w-7xl px-4 my-1 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 my-16">
          {/* COLUMN-1 */}
          <div>
            <Image
              src="/images/dedicated/IMG_0351.JPEG"
              alt="man-icon"
              width={416}
              height={530}
              className="mx-auto md:mx-0"
            />
          </div>

          {/* COLUMN-2 */}
          <div className="relative">
            <Image
              src="images/dedicated/comma.svg"
              alt="comma-image"
              width={200}
              height={106}
              className="absolute comma-pos hidden lg:block"
            />
            <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">
              What Sets Shero Apart?
            </h2>
            <ul className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">
              <li>
                Unique by Design: We don’t just follow trends; we craft them.
                Every project becomes one-of-a-kind through our bespoke
                strategies and innovative touch.
              </li>
              <li className="my-7">
                Adding Value at Every Step: From initial concept creation to
                execution, Shero’s hands-on approach ensures measurable impact
                and lasting value.
              </li>
              <li>
                A Collaborative Journey: We partner closely with visionaries,
                bringing ideas to life with a blend of expertise, creativity,
                and bold thinking.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dedicated;
