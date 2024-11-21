import { ArrowUpRight } from "@/icons";
import Link from "next/link";

export const Campaigns = () => {
  return (
    <section className="px-4 container mx-auto">
      <h2 className="text-2xl lg:text-4xl font-semibold pb-6">
        Our Current Campaigns:
      </h2>
      <div className="bg-white bg-opacity-10 border-card px-4 py-3 md:px-6 md:py-5 flex flex-col gap-2">
        <h3
          className="outfit-800 text-3xl lg:text-5xl text-yellow-400"
          style={{
            textShadow: "#c4b67d 1px 0 10px",
          }}
        >
          Giving Light
        </h3>
        <p className="text-base md:text-lg lg:text-xl">
          Give light through supporting the knowledge of students in Niger!
        </p>
        <div className="text-base md:text-lg lg:text-xl text-right">
          <p className="text-2xl md:text-3xl lg:text-4xl text-right">
            إِنَّ ٱللَّهَ يَجْزِى ٱلْمُتَصَدِّقِينَ -{" "}
          </p>
          <p>Indeed, Allah rewards the charitable - </p>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-between">
          <div className="text-base md:text-lg lg:text-xl">
            <label className="opacity-70">Date:</label>
            <p>Jan 1, 2024 1 PM</p>
          </div>
          <div className="flex items-end justify-end w-full md:w-auto">
            <Link
              href={
                "https://www.qcharity.org/en/qa/donation/details?I=333961&T=4&P=true&C=58&AccountTypeId=1131&ProjectId=333961&TemplateId=117764&CA=null"
              }
              className="flex flex-row text-background bg-secondary p-2 pl-4 gap-2 rounded-sm font-semibold text-lg lg:text-xl"
            >
              Donate Here!
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
