import Image from "next/image";
import Link from "next/link";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

import { useAppSizeConfig } from "../../hooks/useAppSizeConfig";

const packageNames = {
  basic: "Basic",
  standart: "Standart",
  premium: "Premium",
};

const RightBG = () => (
  <div
    aria-hidden="true"
    className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
  >
    <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
    <svg
      className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
      width={404}
      height={392}
      fill="none"
      viewBox="0 0 404 392"
    >
      <defs>
        <pattern
          id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect
            x={0}
            y={0}
            width={4}
            height={4}
            className="text-gray-200"
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect
        width={404}
        height={392}
        fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
      />
    </svg>
  </div>
);
const LeftBG = () => (
  <div
    aria-hidden="true"
    className="hidden sm:block lg:absolute lg:inset-y-0 lg:left-0 lg:w-screen"
  >
    <div className="absolute inset-y-0 right-1/2 w-full rounded-l-3xl bg-gray-50 lg:-right-72" />
    <svg
      className="absolute top-8 right-1/2 -ml-3 lg:right-[72rem]  lg:top-12"
      width={404}
      height={392}
      fill="none"
      viewBox="0 0 404 392"
    >
      <defs>
        <pattern
          id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect
            x={0}
            y={0}
            width={4}
            height={4}
            className="text-gray-200"
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect
        width={404}
        height={392}
        fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
      />
    </svg>
  </div>
);

export const ServiceSection = ({
  title,
  text,
  background,
  offers,
  id,
  index,
}: {
  title: string;
  text: string;
  background: string;
  offers: Record<keyof typeof packageNames, string[]>;
  id: string;
  index: number;
}) => {
  const { wHeight, wWidth } = useAppSizeConfig();

  return (
    <section
      id={id}
      style={{ minHeight: wWidth < 600 ? "auto" : wHeight }}
      className="pb-8"
    >
      <div className="relative bg-white flex lg:h-5/6 ">
        <div
          className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8 h-full"
          style={index === 1 ? { direction: "rtl" } : {}}
        >
          <div className="relative w-full sm:py-16 lg:py-0 h-full">
            {index === 1 ? <LeftBG /> : <RightBG />}
            <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20 h-full">
              <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl h-full min-h-[512px]">
                <Image
                  className="absolute inset-0 h-full w-full object-cover"
                  src={background}
                  alt={title}
                  fill
                />
              </div>
            </div>
          </div>

          <div className="relative h-full mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0 flex">
            {/* Content area */}
            <div className="flex-col w-full pt-6 lg:pt-0 text-center lg:text-left self-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-700 sm:text-3xl">
                {title}
              </h2>
              <div className="mt-4 space-y-6 text-gray-500">
                <p className="text-lg">{text}</p>
                <div className="space-y-4">
                  {["basic", "standart", "premium"].map((p, i) => (
                    <div
                      key={i}
                      className="text-left"
                      style={index !== 1 ? { direction: "rtl" } : {}}
                    >
                      <Link
                        href={{
                          pathname: "/contact",
                          query: { product: id, package: p },
                        }}
                        className="flex space-x-2 items-center flex-row-reverse"
                      >
                        <h6 className="font-bold  hover:text-indigo-500">
                          {packageNames[p as "basic"]}
                        </h6>
                        <ChevronDoubleRightIcon className="h-4 self-center hover:text-indigo-500" />
                      </Link>
                      <ol>
                        {offers[p as "basic"].map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
