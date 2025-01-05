import Image from "next/image";
import { ArrowDown } from "@/icons";
export const Hero = () => (
  <section className="px-4 container mx-auto h-[80vh] flex items-center justify-center relative">
    <Image
      src="/hero-bg.png"
      alt="hero-bg"
      fill
      className=" object-center object-contain"
    />
    <h1 className="text-xl md:text-2xl lg:text-[40px] lg:leading-snug text-center anonymous-pro-regular relative z-10">
      Bringing together{" "}
      <span className="underline font-semibold">
        the muslim community in the Education City
      </span>{" "}
      and guiding each other in a direction where we can grow together in the{" "}
      <span className="underline font-semibold">path of Allah.</span>
    </h1>
    <div className="absolute bottom-16">
      <button>
        <ArrowDown />
      </button>
    </div>
  </section>
);
