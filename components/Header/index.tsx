import Image from "next/image";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

const links = [
  {
    name: "Leistungen",
    href: "/services",
  },
  {
    name: "Uber uns",
    href: "/about",
  },
  {
    name: "Kontakt",
    href: "/contact",
  },
];

export default function Example() {
  return (
    <Popover className="z-50 relative bg-white min-h-[100px]">
      <div className="flex items-center justify-between mx-auto max-w-7xl px-4 sm:px-6 p-6 md:justify-start md:space-x-10">
        <div>
          <Link href="/" passHref>
            <span className="sr-only">OzlemSen.creativeAgency</span>
            <Image src="/logo/logo.png" alt="" width={160} height={40}></Image>
          </Link>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-end">
          <div className="flex space-x-10 items-center md:ml-12">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    width={200}
                    height={200}
                    className="h-8 w-auto"
                    src="/logo/logo.png"
                    alt="Ozlem Sen creative agency"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-6">
                  {links.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-lg p-3 text-gray-500"
                    >
                      {/* <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-cyan-500 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div> */}
                      <div className="ml-4 text-base font-medium text-gray-900">
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
