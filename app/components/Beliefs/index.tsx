const Beliefs = () => {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5">
        {/* COLUMN-1 */}

        <div className="bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
          <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start">
            Our Philosophy
          </h2>
          <h3 className="text-4xl sm:text-65xl font-bold text-white leading-snug mb-5 text-center sm:text-start">
            We believe that{" "}
            <span className="text-grey">every project has a story,</span>
          </h3>
          <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">
            and our role is to help write a chapter that stands out. By blending
            vision with execution,we bring concepts to life in ways that
            resonate far beyond financial success.
          </h5>
          <div className="text-center sm:text-start">
            <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">
              Get Started
            </button>
          </div>
        </div>

        {/* COLUMN-2 */}

        <div className="bg-build pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
          <h2 className="text-lg font-normal text-blue tracking-widest mb-5 text-center sm:text-start">
            BUILD
          </h2>
          <h3 className="text-4xl sm:text-65xl font-bold text-black leading-snug mb-5 text-center sm:text-start">
            <span className="text-blue">At Shero,</span> we’re not just shaping
            investments
          </h3>
          <h5 className="bluish pt-2 mb-5 text-center sm:text-start">
            we’re shaping the future. Together, let’s make something
            extraordinary.
          </h5>
          <div className="text-center sm:text-start">
            <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beliefs;
