import Image from "next/image";

export const Header = () => {
  return (
    <section className="absolute w-full">
      <header className="px-4 py-4 container mx-auto flex flex-row justify-center ">
        <div className="flex flex-row items-center justify-center gap-2">
          <Image src="/logo-white.png" width={80} height={80} alt="logo" />
          <div className="font-semibold uppercase text-xl">Al-Noor MSA</div>
        </div>
      </header>
    </section>
  );
};
