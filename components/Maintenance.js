function Maintenance() {
  return (
    <main className="bg-neutral-200 flex  w-full h-lvh flex-col items-center justify-center relative overflow-hidden  ">
      <div className="text-neutral-800 z-20 bg-transparent mt-3 font-bold text-7xl 2xl:text-7xl xl-text-7xl lg:text-6xl md:text-6xl sm:text-5xl ">
        Portfolio en maintenance.
      </div>
      <div className="z-20 max-w-72 overflow-hidden">
        <div className="animate-rotate-y w-200 h-256 border-solid border-1 border-zinc-400 opacity-10 rounded-full absolute left-1 -translate-x-1/2 top-10 transform"></div>

        <div className="animate-rotate-y w-256 h-200 border-solid border-1 border-zinc-600 opacity-20 rounded-full absolute left-1 -translate-x-96 top-10 transform"></div>
        <div className="animate-rotate-y w-96 h-80 border-solid border-1 border-zinc-600 opacity-20 rounded-full absolute left-1 -translate-x-96 top-64 transform"></div>
        <div className="animate-rotate-y w-200 h-192 border-solid border-1 border-zinc-400 opacity-20 rounded-full absolute left-1 -translate-x-3/4 top-80 transform"></div>
        <div className="animate-rotate-y w-192 h-160 bg-zinc-950 opacity-10 rounded-full blur-3xl absolute left-1 -translate-x-1/3 top-72 transform"></div>
        <div className="animate-rotate-y w-256 h-200 bg-violet-900 opacity-5 rounded-full blur-3xl absolute left-1 -translate-x-1/2 top-10 transform"></div>
        <div className="animate-rotate-y w-144 h-128 bg-zinc-600 opacity-10 rounded-full blur-3xl absolute left-1 -translate-x-7 top-72 transform"></div>
      </div>
    </main>
  );
}

export default Maintenance;
