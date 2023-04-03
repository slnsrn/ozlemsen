import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

import { Layout } from "../components/Layout";
import { navigation } from "../components/Social";
import Link from "next/link";
import { object, string } from "yup";

const validationSchema = object({
  name: string().required(),
  email: string()
    .email()
    .when("phone", {
      is: "",
      then: (schema) =>
        schema.required(
          "Bitte geben Sie entweder Ihre Telefonnummer oder E-Mail-Adresse ein, damit wir Sie kontaktieren können."
        ),
    }),
  phone: string(),
  message: string().required("Bitte geben Sie Ihre Nachricht ein."),
});

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const CLASS = {
  default: "border-gray-300  focus:border-indigo-500 focus:ring-indigo-500",
  error: "border-red-400  focus:border-red-500 focus:ring-red-600",
};

export default function Contact() {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const router = useRouter();

  useEffect(() => {
    const product = router.query?.product;
    const offer = router.query?.package;
    const message =
      product && offer
        ? `I would like to get information about ${product} ${offer} package`
        : "";
    setFormValues({ ...formValues, message });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <Layout>
      <section>
        <div className="mt-6 relative bg-white flex lg:h-5/6">
          <div className="lg:mx-auto lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8 h-full self-center">
            <div className="relative sm:py-16 lg:py-0 h-full">
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
                <h2 id="contact-heading" className="sr-only">
                  Contact us
                </h2>
                {/* Contact information */}
                <div className="relative overflow-hidden bg-gradient-to-r from-stone-100 to-stone-200  shadow-xl h-full p-6 lg:p-12">
                  <p className="my-4 text-xl leading-6 text-gray-500">
                    Fragen? Lust? Dringende Deadline?
                  </p>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-700">
                    Wir nehmen uns die Zeit. Rufen Sie an oder schreiben Sie uns
                  </h2>
                  <div className="mt-8 text-gray-500">
                    <Link
                      href="tel:+491778094979"
                      className="hover:underline hover:text-gray-700"
                    >
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
                      className="hover:underline hover:text-gray-700"
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
                  <div className="hidden lg:flex space-x-6 mt-8">
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
          </div>
        </div>
      </section>
    </Layout>
  );
}
