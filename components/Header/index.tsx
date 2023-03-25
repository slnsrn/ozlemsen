import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  EnvelopeIcon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navigation } from "../Social";

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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl">
        <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
          <nav
            className="flex items-center justify-between"
            aria-label="Global"
          >
            <Link href="/" passHref>
              <span className="sr-only">OzlemSen.creativeAgency</span>
              <Image
                src="/logo/logo.png"
                alt=""
                width={160}
                height={40}
              ></Image>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="hidden justify-center items-center lg:flex lg:gap-x-14">
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
          </nav>
        </div>
      </div>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" passHref>
              <span className="sr-only">OzlemSen.creativeAgency</span>
              <Image
                src="/logo/logo.png"
                alt=""
                width={120}
                height={30}
              ></Image>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-10 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-4">
                <Link
                  href="/services"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Leistungen
                </Link>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Über uns
                </Link>
              </div>
              <div className="flex flex-col gap-6 mt-2 pt-2">
                <div className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Kontakt
                </div>
                <div className="text-gray-500">
                  <Link href="tel:+491778094979" className="hover:underline ">
                    <>
                      <span className="sr-only">Phone number</span>
                      <span className="flex text-base">
                        <PhoneIcon
                          className="h-6 w-6 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="ml-3"> +49 177 809 49 79</span>
                      </span>
                    </>
                  </Link>
                  <Link
                    className="hover:underline "
                    href="mailto:benozlemsen@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <>
                      <span className="sr-only">Email</span>
                      <span className="mt-6 flex text-base">
                        <EnvelopeIcon
                          className="h-6 w-6 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="ml-3">benozlemsen@gmail.com</span>
                      </span>
                    </>
                  </Link>
                </div>
                <div className="flex space-x-6 mt-4">
                  {navigation.map((item) => (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      key={item.name}
                      href={item.href}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
