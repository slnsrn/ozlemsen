import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

import { Layout } from "../components/Layout";
import { navigation } from "../components/Social";
import Link from "next/link";
// import { Formik, Form, Field } from "formik";

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

  const handleSubmit = async (values: FormValues) => {
    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
  };

  return (
    <Layout>
      <section>
        <div className="mt-6 relative bg-white flex lg:h-5/6">
          {/* <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8 h-full self-center"> */}
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
                  <div className="flex space-x-6 mt-8">
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

            {/* <div className="relative max-w-md px-6 sm:max-w-3xl lg:px-0">
              <div className="pt-6 lg:pt-0">
                <h3 className="text-lg font-medium text-gray-500 text-center">
                  Kontakt Formular
                </h3>
                <Formik
                  initialValues={{ ...formValues }}
                  onSubmit={handleSubmit}
                  validationSchema={validationSchema}
                  enableReinitialize
                >
                  {({ errors, touched }) => (
                    <Form className="space-y-4 mt-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Name / Firma
                        </label>
                        <div className="mt-1">
                          <Field
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            className={`block w-full rounded-md py-3 px-4 shadow-sm ${
                              errors.name ? CLASS.error : CLASS.default
                            }`}
                          />
                        </div>
                        <span className="text-sm text-red-400">
                          {errors.name}
                        </span>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <div className="mt-1">
                          <Field
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className={`block w-full rounded-md py-3 px-4 shadow-sm ${
                              errors.email ? CLASS.error : CLASS.default
                            }`}
                          />
                        </div>
                        <span className="text-sm text-red-400">
                          {errors.email}
                        </span>
                      </div>
                      <div>
                        <label
                          htmlFor="phone-number"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Telefon
                        </label>
                        <div className="relative mt-1 rounded-md shadow-sm">
                          <Field
                            type="text"
                            name="phone-number"
                            id="phone-number"
                            autoComplete="tel"
                            className={`block w-full rounded-md py-3 px-4 shadow-sm ${
                              errors.phone ? CLASS.error : CLASS.default
                            }`}
                            placeholder="+49 (1xx) xxx-xxxx"
                          />
                        </div>
                        <span className="text-sm text-red-400">
                          {errors.phone}
                        </span>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Nachricht
                        </label>
                        <div className="mt-1">
                          <Field
                            as="textarea"
                            id="message"
                            name="message"
                            rows={3}
                            className={`block w-full rounded-md py-3 px-4 shadow-sm ${
                              touched.message && errors.message
                                ? CLASS.error
                                : CLASS.default
                            }`}
                          />
                        </div>
                        <span className="text-sm text-red-400">
                          {touched.message && errors.message
                            ? errors.message
                            : ""}
                        </span>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="block w-full rounded-md bg-gradient-to-r from-indigo-400 to-indigo-500 py-3 px-4 font-medium text-white shadow hover:from-indigo-500 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                        >
                          Absenden
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </Layout>
  );
}
