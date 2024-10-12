import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <h1>Hello world</h1>
      <h2>Hello world</h2>
      <h3>Hello world</h3>
      <p>Ciao a tutti</p>
      <div className="bg-[#a4b8f6] w-96 h-96"></div>
      <Image src="/nunzioBasciano-foto.jpg" alt="" width={400} height={400} />
    </div>
  );
}
