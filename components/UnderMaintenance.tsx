import Image from "next/image";

export const UnderMaintenance = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="bg-white rounded-lg shadow-lg p-5 md:p-12 mx-2">
        <div className="flex flex-col text-center w-full justify-center">
          <Image
            className="self-center"
            src="/logo/logo.png"
            alt=""
            width={500}
            height={200}
          />
          <h3 className="text-xl md:text-4xl mt-6">Coming Soon</h3>
          <p className="text-md md:text-xl mt-10">
            Contact:{" "}
            <a className="hover:underline" href="tel:+491778094979">
              +49 177 809 49 79
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
