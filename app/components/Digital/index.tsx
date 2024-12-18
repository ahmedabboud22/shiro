import Image from "next/image";

const Digital = () => {
  return (
    <div className="mx-2">
      <div className="mx-auto max-w-7xl px-4 my-1 pb-20 lg:pb-40 lg:px-8 bg-digital rounded-3xl bg-blue relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 my-16">
          {/* COLUMN-1 */}

          <div className="pt-24 lg:pl-24 mt-8">
            <h3 className="text-4xl font-bold text-white mb-5 tracking-widest text-center lg:text-start">
              Our Special Approach
            </h3>
            <h4 className="text-2xl sm:text-2xl  text-white my-8 leading-snug text-center lg:text-start">
              <div className="my-6">
                Shero’s success lies in our ability to think differently.
              </div>
              <div className="my-8">
                We combine deep industry knowledge with imaginative
                problem-solving to create a tailored roadmap for each project.
              </div>
              <div className="my-6">
                This ensures that our investments are not just profitable but
                meaningful, distinctive, and impactful.
              </div>
            </h4>
            <div className="text-center lg:text-start">
              <button className="text-xl mt-5 font-semibold text-white bg-btnblue py-4 px-12 hover:bg-hoblue rounded-full">
                Get started
              </button>
            </div>
          </div>

          {/* COLUMN-2 */}

          <div>
            <div className="lg:absolute girldoodle">
              <Image
                src="/images/digital/girldoodle.svg"
                alt="girldoodle"
                width={815}
                height={691}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digital;
