export default function Home() {
  return (
    <div className="py-3">
      <div className="w-96 h-96 p-3 flex flex-col gap-3">
        <h1 className="text-[var(--orange)] text-3xl my-3 font-semibold">
          Nunzio basciano
        </h1>
        <h2 className="text-2xl mb-2">Hello world</h2>
        <h3 className="text-xl text-[var(--orange)] mb-1">Hello world</h3>
        <p className="tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellat
          voluptatum odit tenetur quasi, ratione laborum voluptate delectus
          molestias deleniti corporis modi dolorum quidem cum maiores
          repudiandae tempore sit illo.
        </p>
        <button className="transition-transform duration-300 transform scale-100 hover:scale-110  mt-1 bg-[#0D1419] bg-gradient-to-r from-[var(--blue)] to-[var(--darkBlue)] text-white w-fit py-1 px-5 rounded-2xl">
          ciao
        </button>
      </div>
    </div>
  );
}
