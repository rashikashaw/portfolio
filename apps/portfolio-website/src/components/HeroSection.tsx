export const HeroSection = () => {
  return (
    <section id="hero" className="container flex flex-col md:flex-row items-center mx-auto mt-32 space-y-0 md:space-y-0">
      <div className="flex flex-col mb-20 lg:block space-y-10 lg:px-20 md:w-1/2">
        <div>
          <h2 className="max-w-lg font-bold mt-2 text-center md-4 lg:text-left">Hi, I am</h2>
          <h1 className="max-w-lg text-4xl font-bold text-center mt-2 md:text-5xl lg:text-7xl lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            Rashika Shaw
          </h1>
        </div>
        <p className="max-w-lg text-center dark-text-pink text-zinc-500 dark:text-zinc-400 lg:text-left">
          A Frontend Developer based in Toronto, Canada.
          My expertise is in building web applications,
          landing pages and anything in between.
        </p>
        <div className="max-w-sm flex flex-col justify-center items-center space-y-6 lg:block">
          <button className="p-3 px-6 lg:mr-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md baseline border-black hover:opacity-100">Download CV</button>
          <button className="p-3 px-6 bg-white rounded-md baseline border-2 dark:bg-slate-800">Hire me?</button>
        </div>
      </div>
      <div id="image" className="flex md:w-1/2 justify-center items-center">
        <img id="image" src="/selfImage.png" alt="" className="drop-shadow-3xl dark:drop-shadow-4xl"/>
      </div>
    </section>
  );
};
