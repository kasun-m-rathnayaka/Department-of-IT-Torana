import Audio from "@/components/Audio";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-[#18181B] to-black-100 relative w-[850px] md:w-full text-white flex flex-col">
      <div className="">
        <Nav />
      </div>
      <section>
        <Hero />
      </section>
      <section className="w-full flex justify-center">
        <Audio/>        
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
