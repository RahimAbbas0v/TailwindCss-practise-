import React from "react";

const Index = () => {
  return (
    <section className="group relative bg-hero-pattern h-auto lg:h-128 w-screen bg-no-repeat bg-center bg-cover ">
      <div className="h-128 bg-gradient-to-b from-transparent to-black w-full">
        <div className="container flex  items-end px-3 ">
          <div className="heroMain absolute bottom-4 font-roboto w-4/5 lg:w-6/12">
            <h3 className="text-yellow-400 text-lg group-hover:mb-1 duration-1000 cursor-pointer">
              ACTION, DARAMA, THRILLER
            </h3>
            <h1 className="text-white text-6xl group-hover:mb-1 duration-1000 cursor-pointer">
              THE DARK KNIGHT
            </h1>
            <p className=" group-hover:mb-20 duration-1000 cursor-pointer text-white text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              quas officia aut quidem? Numquam fuga quis repellendus ad beatae
              culpa?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
