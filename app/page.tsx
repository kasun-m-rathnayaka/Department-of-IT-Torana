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
        {/* add a audio file for this section to auto play when the page is loaded */}
        <audio controls autoPlay className=" opacity-20">
          <source src="/assets/audio.mp3" type="audio/mp3" />
        </audio>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
