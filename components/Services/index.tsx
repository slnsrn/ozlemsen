import Image from "next/image";
import Link from "next/link";
import { services } from "../../pages/services";

export default function Services() {
  return (
    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="relative">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-lg font-semibold text-cyan-600">Leistungen</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Was brauchen Sie?
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Ob Rebranding, Instagram Post oder Imagefilm: Wir machen den Kern
            Ihres Unternehmens sicht- und greifbar. Wählen Sie einfach Ihr Paket
            und wir erledigen den Rest!
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-md gap-8 px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg cursor-pointer  bg-white"
            >
              <div className="flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover"
                  src={service.background}
                  alt={service.title}
                  height={192}
                  width={100}
                />
              </div>
              <Link href={`/services/#${service.id}`}>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-cyan-600">
                      <a
                        href={`/services/${service.id}`}
                        className="hover:underline"
                      >
                        {service.title}
                      </a>
                    </p>
                    <p className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {service.text}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
