export const AboutUs = () => {
  return (
    <section className="px-4 container mx-auto flex flex-col items-center gap-4">
      <h2 className="text-xl lg:text-3xl font-medium text-center">About Us:</h2>
      <p className="text-base md:text-lg lg:text-xl lg:max-w-[60%] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequa.
      </p>
      <div className="flex flex-row flex-wrap items-center justify-center gap-6 mt-6">
        <div>
          <div className="w-60 h-60 bg-white mb-2"></div>
          <label className="opacity-70 text-sm md:text-base">Founder</label>
          <p className="text-base md:text-lg lg:text-xl">John Doe</p>
        </div>
        <div>
          <div className="w-60 h-60 bg-white mb-2"></div>
          <label className="opacity-70 text-sm md:text-base">Founder</label>
          <p className="text-base md:text-lg lg:text-xl">John Doe</p>
        </div>
      </div>
    </section>
  );
};
