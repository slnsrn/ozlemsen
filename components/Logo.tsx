import Image from "next/image";

const Logo = ({ isMobile }: { isMobile?: boolean }) => (
  <div className="text-center sm:text-left lg:text-center">
    <Image
      src="/logo.png"
      width={isMobile ? "150" : "250"}
      height={isMobile ? "150" : "250"}
      alt="duzzle"
    />
  </div>
);

export default Logo;
