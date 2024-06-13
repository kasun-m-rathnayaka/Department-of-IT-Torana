import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black-100 relative w-full text-white flex flex-col">
      <div><Nav/></div>
      <section>Home</section>
    </main>
  );
}
