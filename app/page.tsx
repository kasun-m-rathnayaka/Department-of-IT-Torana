import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-transparent relative w-full text-white flex flex-col">
      <div><Nav/></div>
      <section><Hero/></section>
    </main>
  );
}
