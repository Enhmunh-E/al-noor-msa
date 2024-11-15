import { ArrowUpRight } from "@/icons";

export const Campaigns = () => {
  return (
    <section className="px-4 container mx-auto">
      <h2 className="text-xl lg:text-3xl font-medium pb-6">
        Our Current Campaigns:
      </h2>
      <div className="bg-white bg-opacity-10 border-card px-4 py-3 md:px-6 md:py-5 flex flex-col gap-2">
        <h3 className="anonymous-pro-bold text-xl lg:text-3xl">Giving Light</h3>
        <p className="text-base md:text-lg lg:text-xl">
          Give light through supporting the knowledge of students!
        </p>
        <div className="text-base md:text-lg lg:text-xl text-right">
          <p>إِنَّ ٱللَّهَ يَجْزِى ٱلْمُتَصَدِّقِينَ - </p>
          <p>Indeed, Allah rewards the charitable - </p>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-between">
          <div className="text-base md:text-lg lg:text-xl">
            <label className="opacity-70">Date:</label>
            <p>Jan 1, 2024 1 PM</p>
          </div>
          <div className="flex items-end justify-end w-full md:w-auto">
            <button className="flex flex-row text-background bg-secondary p-2 pl-4 gap-2 rounded-sm">
              More Information
              <ArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
