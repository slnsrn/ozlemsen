import Image from "next/image";
import { Layout } from "../components/Layout";
import { useAppSizeConfig } from "../hooks/useAppSizeConfig";

export default function About() {
  return (
    <Layout>
      <section>
        <div className="relative bg-white flex lg:h-5/6">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8 h-full self-center">
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
                {/* Testimonial card*/}
                <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl h-full">
                  <Image
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/images/ozlem-sen.jpg"
                    alt=""
                    width={1000}
                    height={1000}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-stone-100 to-stone-300 opacity-40" />
                </div>
              </div>
            </div>

            <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
              {/* Content area */}
              <div className="pt-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Über uns
                </h2>
                <div className="mt-6 space-y-6 text-gray-500">
                  <p className="text-lg">
                    Zeit fliegt. Wir fangen sie ein. Halten den Moment fest und
                    schaffen Erinnerungen, die bleiben.
                  </p>
                  <p className="text-base leading-7">
                    Özlem Şen, das ist eine Berliner Kreativagentur für den
                    besonderen Moment. Wir setzen uns über die Klischees der
                    Branche hinweg und zeigen, was Sie wirklich ausmacht.
                    Visuelle Kommunikation at its best.
                  </p>
                  <p className="text-base leading-7">
                    Wir sind ein junges, organisches Team mit mehr als zehn
                    Jahren professioneller Erfahrung. Ob Gastro, Mode oder
                    Event, Corporate Design oder Social-Media-Strategie: Als
                    360° Agentur sind wir agil, interdisziplinär und wachsen mit
                    Ihren Bedürfnissen.
                  </p>
                  <p className="text-base leading-7">
                    Das Ziel einer jeden Marke: im Gedächtnis bleiben und
                    langfristige Beziehungen schaffen. Genau das ist unsere
                    Stärke. Denn es gibt nur diesen einen Moment, in dem sich
                    Kunde und Marke zum ersten Mal begegnen. Wir stellen sicher,
                    dass Ihr Moment der richtige ist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
