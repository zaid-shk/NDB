import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/709101569_1563269911830953_6335023828597055932_n.jpg";
import HeroImg2 from "../../assets/675904536_1511257493697943_3675454403396010573_n.jpg";
import HeroImg3 from "../../assets/678151240_1511257373697955_4487136564843984308_n.jpg";
import HeroImg4 from "../../assets/682305041_18203880859345179_669288045977064600_n.jpg";

const slides = [
  {
    img: HeroImg,
    heading: "AIMIM Nandurbar",
    description: "Nandurbar zile mein tabdeeli ki leher",
    btnText: "Join Now",
    btnLink: "/about",
  },
  {
    img: HeroImg2,
    heading: "Azadari Ka Alampan",
    description: "Aapki awaaz, aapka haq",
    btnText: "Join Now",
    btnLink: "/about",
  },
  {
    img: HeroImg3,
    heading: "Naye Nandurbar Ki Ore",
    description: "Taraqqi aur insaaf ke liye ek naya safar",
    btnText: "Join Now",
    btnLink: "/about",
  },
  {
    img: HeroImg4,
    heading: "Awam Ki Khidmat",
    description: "Har masle ka hal, aapke darwaaze par",
    btnText: "Join Now",
    btnLink: "/about",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen max-h-screen w-full overflow-hidden">
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.img}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${i === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
          alt="hero"
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />

      <div className="absolute inset-0 flex flex-col justify-end pb-16 sm:pb-20 md:pb-32 px-5 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <span className="w-8 sm:w-10 h-0.5 bg-green-400" />
            <span className="text-green-400 text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase">
              {slides[currentIndex].btnLink === "/about"
                ? "Who We Are"
                : slides[currentIndex].btnLink === "/vision"
                  ? "Our Vision"
                  : slides[currentIndex].btnLink === "/join"
                    ? "Join Us"
                    : "Get in Touch"}
            </span>
          </div>

          <h1
            key={currentIndex}
            className="text-white text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] sm:leading-[1.1] tracking-tight mb-4 sm:mb-5"
          >
            {slides[currentIndex].heading.split(" ").map((word, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="text-green-400">
                  {word}{" "}
                </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h1>

          <p
            key={currentIndex + "-desc"}
            className="text-gray-300 text-sm sm:text-base md:text-lg max-w-lg md:max-w-xl mb-6 sm:mb-8 md:mb-10 leading-relaxed font-light"
          >
            {slides[currentIndex].description}
          </p>

          <div className="flex items-center gap-4 sm:gap-5">
            <Link
              to={slides[currentIndex].btnLink}
              className="group relative px-6 sm:px-8 py-3 sm:py-3.5 bg-green-600 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase overflow-hidden rounded-md transition-all duration-300 hover:bg-green-500"
            >
              <span className="relative z-10">{slides[currentIndex].btnText}</span>
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`rounded-full transition-all duration-500 ${
              i === currentIndex
                ? "w-8 h-2 bg-green-400"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
