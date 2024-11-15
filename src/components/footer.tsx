import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] pt-6">
      <div className="px-4 container mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between">
          <div className=" pb-8">
            <div className="pb-4 font-semibold text-lg">Al-Noor MSA</div>
            <div className="opacity-80">
              <div>Contact Us:</div>
              <div>+974 1234 1234</div>
              <div>something@something.com</div>
            </div>
          </div>
          <div className="mb-6 w-48 h-48 relative hidden md:block">
            <Image src="/logo-rectangular.png" alt="logo-rectangular" fill />
          </div>
        </div>
        <div className="text-center py-1">© 2024 Al-Noor MSA</div>
      </div>
    </footer>
  );
};
