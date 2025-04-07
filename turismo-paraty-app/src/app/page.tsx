import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="m-auto uppercase font-bold text-5xl text-center">Turismo Paraty Felipe</h1>

        <Image
          className=""
          src="/em_construcao.png"
          alt="Turismo Paraty"
          width={730}
          height={453}
          priority
        />

        <p className="m-auto uppercase font-bold">Site em Construção!!!</p>

        <span className="m-auto">Em Desenvolvimento por Brain Tech...</span>
      </main>
    </div>
  );
}
