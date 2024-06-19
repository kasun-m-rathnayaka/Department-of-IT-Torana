import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-[#18181B] to-black-100 relative w-full text-white flex flex-col">
      <div><Nav/></div>
      <section><Hero/></section>
      <section>
        {/* add a audio file for this section to auto play when the page is loaded */}
        <audio src="/assets/audi.mp3" autoPlay loop></audio>
      </section>
      <footer><Footer/></footer>
    </main>
  );
}
