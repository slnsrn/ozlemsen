import Image from "next/image";
import Header from "../Header";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <Header />
      <div className="relative">
        <div className={`w-full lg:w-1/2 z-20 relative ${styles.asymmetric}`}>
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="z-10 pt-14 lg:max-w-3xl mx-auto lg:pl-24">
            <div className="py-32 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0">
              <div className="mx-auto max-w-2xl text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">
                  Ozlem Sen Creative Agency
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-700">
                  Eine kreative Einzelunternehmerin mit einer Leidenschaft für
                  Social Media Management, Branding und Videoproduktion. Ich
                  helfe kleinen und mittelständischen Unternehmen, ihre Marke zu
                  definieren, ihre Online-Präsenz zu verbessern und ansprechende
                  Inhalte zu erstellen, die ihre Zielgruppe ansprechen.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 absolute top-0 opacity-40 lg:opacity-100 lg:flex lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="images/hero.jpg"
            alt=""
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </>
  );
}
