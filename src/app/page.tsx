import { AboutUs, Campaigns, Header, Footer, Hero } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col gap-24">
      <Header />
      <Hero />
      <Campaigns />
      <AboutUs />
      <Footer />
    </main>
  );
}
