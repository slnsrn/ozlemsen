import Image from "next/image";
import { useAppSizeConfig } from "../../hooks/useAppSizeConfig";

const packageNames = {
  basic: "Basic",
  standart: "Standart",
  premium: "Premium",
};

export const ServiceSection = ({
  title,
  text,
  background,
  offers,
  id,
}: {
  title: string;
  text: string;
  background: string;
  offers: Record<keyof typeof packageNames, string[]>;
  id: string;
}) => {
  const { wHeight, wWidth } = useAppSizeConfig();

  return (
    <section
      id={id}
      style={{ height: wWidth < 600 ? "auto" : wHeight }}
      className="pb-8"
    >
      <div className="relative bg-white flex lg:h-5/6">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8 h-full self-center">
          <div className="relative w-full sm:py-16 lg:py-0 h-full">
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
            <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20 h-full">
              <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl h-full">
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
            <div className="self-center flex-col w-full pt-8 lg:pt-0 text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {title}
              </h2>
              <div className="mt-4 space-y-6 text-gray-500">
                <p className="text-lg">{text}</p>
                <div className="space-y-4">
                  {["basic", "standart", "premium"].map((p, i) => (
                    <div key={i} className="text-left">
                      <h6 className="font-bold">
                        {packageNames[p as "basic"]}
                      </h6>
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
