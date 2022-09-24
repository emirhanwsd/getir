import Head from "next/head";

import logo from "../assets/logo.png";

import waterAndDrink from "../assets/water-and-drink.png";
import fruitAndVegetables from "../assets/fruit-and-vegetables.png";
import fromFurnace from "../assets/from-furnace.png";
import basicFood from "../assets/basic-food.png";
import snack from "../assets/snack.png";
import iceCream from "../assets/ice-cream.png";
import milk from "../assets/milk.png";
import breakfast from "../assets/breakfast.png";
import fastFood from "../assets/fast-food.png";
import fitAndForm from "../assets/fit-and-form.png";
import selfCare from "../assets/self-care.png";
import homeCare from "../assets/home-care.png";
import homeAndLife from "../assets/home-and-life.png";
import technology from "../assets/technology.png";
import pet from "../assets/pet.png";
import baby from "../assets/baby.png";
import sexualHealth from "../assets/sexual-health.png";

const categories = [
  {
    icon: waterAndDrink,
    title: "Su & İçecek",
  },
  {
    icon: fruitAndVegetables,
    title: "Meyve & Sebze",
  },
  {
    icon: fromFurnace,
    title: "Fırından",
  },
  {
    icon: basicFood,
    title: "Temel Gıda",
  },
  {
    icon: snack,
    title: "Atıştırmalık",
  },
  {
    icon: iceCream,
    title: "Dondurma",
  },
  {
    icon: milk,
    title: "Süt Ürünleri",
  },
  {
    icon: breakfast,
    title: "Kahvaltılık",
  },
  {
    icon: fastFood,
    title: "Yiyecek",
  },
  {
    icon: fitAndForm,
    title: "Fit & Form",
  },
  {
    icon: selfCare,
    title: "Kişisel Bakım",
  },
  {
    icon: homeCare,
    title: "Ev Bakım",
  },
  {
    icon: homeAndLife,
    title: "Ev & Yaşam",
  },
  {
    icon: technology,
    title: "Teknoloji",
  },
  {
    icon: pet,
    title: "Evcil Hayvan",
  },
  {
    icon: baby,
    title: "Bebek",
  },
  {
    icon: sexualHealth,
    title: "Cinsel Sağlık",
  },
];

const Home = () => {
  return (
    <>
      <Head>
        <title>Getir</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="px-4 sm:px-0">
        <nav className="p-6">
          <div className="h-full max-w-screen-xl mx-auto flex items-center justify-between">
            <div className="flex items-center justify-center gap-x-8">
              <img className="h-8" src={logo.src} alt="" />

              <input
                className="hidden sm:block bg-gray-100 outline-none h-8 pl-4 px-24 shadow-sm text-sm rounded-lg focus:bg-gray-200 transition-colors"
                type="text"
                placeholder="Getir'de ara"
              />
            </div>

            <div className="flex items-center justify-center gap-x-6">
              <a className="hover:opacity-80 transition-colors" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-brand"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </a>

              <a className="hover:opacity-80 transition-colors" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-brand"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </a>

              <a className="hover:opacity-80 transition-colors" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-brand"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </nav>

        <header className="max-w-screen-xl mx-auto mt-4 p-16 bg-violet-100 rounded-2xl shadow-sm relative">
          <div>
            <h1 className="text-3xl sm:text-4xl max-w-md font-semibold text-brand">
              Her zaman & her yere binlerce ürün siparişi ver.
            </h1>

            <div className="h-0.5 w-12 bg-brand/30 rounded-full mt-4" />

            <p className="max-w-md font-medium mt-4">
              1500'den fazla ürünle, dakikalar içinde, İstanbul, İzmir, Ankara,
              Bursa, Kocaeli ve Bodrum'da dilediğiniz yere mutluluk getiriyoruz.
            </p>

            <a
              href="#"
              className="hidden sm:inline-flex p-4 bg-white shadow-sm rounded-lg mt-8 items-center gap-x-4 hover:opacity-80 transition-opacity text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-brand"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>

              <div className="block w-0.5 h-6 bg-gray-200" />

              <p className="font-semibold">
                Tahtakale Mah. Mineçiçeği Sok. B..
              </p>

              <div className="block w-0.5 h-6 bg-gray-200" />

              <div className="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-brand"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="uppercase text-brand font-semibold">9 dk</span>
              </div>
            </a>
          </div>

          <img
            className="hidden sm:block h-72 absolute bottom-0 right-6 drop-shadow-lg"
            src="https://landing-strapi-images-development.s3.eu-west-1.amazonaws.com/mission_delivery_9303b96f1e.svg"
            alt=""
          />
        </header>

        <section className="flex flex-col items-center justify-center mt-24 gap-y-8">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">Kategoriler</h1>

            <div className="h-0.5 w-8 bg-brand rounded-full mt-4 mx-auto" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 sm:gap-8">
            {categories.map((category) => (
              <a
                href="#"
                className="p-6 flex flex-col gap-y-4 items-center justify-center rounded-xl hover:bg-gray-50 transition-colors"
              >
                <img
                  className="h-12 w-12 sm:h-auto sm:w-auto drop-shadow"
                  src={category.icon.src}
                  alt=""
                />

                <h4 className="font-medium">{category.title}</h4>
              </a>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center justify-center mt-24 gap-y-8">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">Kampanyalar</h1>

            <div className="h-0.5 w-8 bg-brand rounded-full mt-4 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img
                className="sm:h-64 rounded-2xl shadow-sm"
                src="https://cdn.getir.com/misc/62a0ca37c43b9c36436ef4f4_banner_tr_1654704721813.png"
                alt=""
              />
            </a>

            <a href="#" className="hover:opacity-80 transition-opacity">
              <img
                className="sm:h-64 rounded-2xl shadow-sm"
                src="https://cdn.getir.com/misc/62a0ca37c43b9c36436ef4f4_banner_tr_1654704721813.png"
                alt=""
              />
            </a>
          </div>

          <div className="flex items-center justify-center gap-x-4">
            <a
              href="#"
              className="p-2 bg-violet-100 rounded-full hover:opacity-80 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-brand"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </a>

            <a
              href="#"
              className="p-2 bg-brand rounded-full hover:opacity-80 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto mt-24 p-16 bg-violet-100 rounded-2xl shadow-sm relative">
          <div>
            <h1 className="text-3xl sm:text-4xl max-w-md font-semibold text-brand">
              Getir'i indirin!
            </h1>

            <div className="h-0.5 w-12 bg-brand/30 rounded-full mt-4" />

            <p className="max-w-md font-medium mt-4">
              İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 text-sm">
              <a
                href="#"
                className="w-full sm:w-auto py-4 px-8 flex items-center justify-center sm:justify-start gap-x-2 rounded-xl bg-white shadow-sm hover:opacity-80 transition-opacity"
              >
                <svg
                  className="w-6 h-6"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Apple</title>
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                </svg>

                <h6>App Store</h6>
              </a>

              <a
                href="#"
                className="w-full sm:w-auto py-4 px-8 flex items-center justify-center sm:justify-start gap-x-2 rounded-xl bg-white shadow-sm hover:opacity-80 transition-opacity"
              >
                <svg
                  className="w-6 h-6"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Google Play</title>
                  <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
                </svg>

                <h6>Google Play</h6>
              </a>
            </div>
          </div>

          <img
            className="hidden sm:block h-72 absolute bottom-0 right-0 drop-shadow-sm"
            src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png"
            alt=""
          />
        </section>

        <footer className="h-16">{/*// TODO*/}</footer>
      </div>
    </>
  );
};

export default Home;
