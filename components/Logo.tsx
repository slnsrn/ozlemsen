import Image from "next/image";

const Logo = ({
  width,
  height,
  isMobile,
}: {
  width?: number;
  height?: number;
  isMobile?: boolean;
}) => {
  const logoWidth = width ?? (isMobile ? 150 : 250);
  const logoHeight = height ?? (isMobile ? 150 : 250);
  return (
    <div className="text-center sm:text-left lg:text-center">
      <Image
        src="/logo.png"
        width={logoWidth}
        height={logoHeight}
        alt="duzzle"
      />
    </div>
  );
};

export default Logo;
