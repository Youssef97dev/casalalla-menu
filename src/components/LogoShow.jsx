import Image from "next/image";

const LogoShow = () => {
  return (
    <div className="px-2 py-1 border-[3px] border-primary rounded-3xl bg-background shadow-lg flex justify-center items-center">
      <Image
        src="/logo-1.png"
        alt="casalalla"
        width={1000}
        height={1000}
        className="w-20 lg:w-28"
      />
    </div>
  );
};

export default LogoShow;
