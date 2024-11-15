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
      Bring together the entire{" "}
      <span className="underline font-semibold">Muslim community</span> and
      guide it in a direction where we can grow together in the path of
      <span className="font-semibold"> Allah.</span>
    </h1>
    <div className="absolute bottom-16">
      <button>
        <ArrowDown />
      </button>
    </div>
  </section>
);
