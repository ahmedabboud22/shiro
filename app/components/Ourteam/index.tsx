import Image from "next/image";

const index = () => {
  return (
    <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 m-1">
      <h2 className="text-4xl sm:text-65xl font-bold text-center">
        Board of Directors
      </h2>
      <h3 className="text-2xl font-medium text-center pt-10 opacity-50">
        Shiro Concepts Investment is led by a dynamic and experienced board of
        directors with diverse expertise across industries. Their collective
        vision, leadership, and commitment drive the company’s mission and
        ensure its sustained success.
      </h3>
      <div className="grid grid-cols-1 mt-5  min-[320px]:mb-32">
        <Image
          src="/images/team/teamimg.png"
          alt="office-image"
          height={684}
          width={1296}
        />
      </div>
    </div>
  );
};

export default index;
