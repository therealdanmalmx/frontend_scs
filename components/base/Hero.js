import Link from "next/link";
import { images } from "../../utils";

const Hero = () => {
  return (
    <div className="app__hero h-[calc(100vh_-_113px)] w-full flex flex-col justify-center items-center bg-center bg-black bg-opacity-30 bg-blend-overlay" style={{ backgroundImage: `url(${images.communication.src})` }}>
      <h1 className="mb-4 max-w-4xl text-center text-5xl font-normal leading-snug text-white md:text-6xl md:leading-tight">
        We design, develop and{" "} modernize your digital tools
      </h1>
      <p className="mb-8 px-8 text-center text-2xl text-white">
        <Link
          passHref
          href="/parttime"
        >
          <a className="text-white">Part time agency. Based remotely. Clients all over the world.</a>

        </Link>
      </p>
      <Link
        passHref
        href="/works"
      >
        <button className="bg-white text-black duration-300 ease-in-out">Our Portfolio</button>
      </Link>
    </div>
  );
};

export default Hero;
