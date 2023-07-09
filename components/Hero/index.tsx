import Image from "next/image";
import Header from "../Header";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <Header />
      <div className="relative">
        <div className={`w-full lg:w-1/2 z-20 relative ${styles.asymmetric}`}>
          <div className="z-10 pt-14 lg:max-w-3xl mx-auto lg:pl-24">
            <div className="py-32 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0">
              <div className="mx-auto max-w-2xl text-center lg:text-left leading-8">
                <h1 className="text-4xl font-bold leading-12 text-primary mt-40 lg:mt-0 sm:text-6xl">
                  Özlem Şen KreativAgentur
                </h1>
                <p className="mt-6 text-lg leading-8 tracking-wide text-gray-100">
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
        <div className="absolute top-0 opacity-40 lg:opacity-100 lg:flex lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
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
