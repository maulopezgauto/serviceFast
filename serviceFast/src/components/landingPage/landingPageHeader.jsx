import React from "react";

function LandingPageHeader() {

  return (
    <div className="
        min-h-screen
        bg-white
        md:bg-[url(/src/assets/serviceFast/delivery19.png)]
        md:bg-no-repeat
        md:bg-cover
        md:bg-right
      ">
            <div className="relative z-10 flex min-h-screen items-center">
                <div className="w-full mx-1 px-4 sm:px-6 text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-black mb-6">
                    ServiceFast
                </h1>
                <h1 className="text-red-500 text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
                Tu pedido,
                    <span className="text-blue-500"> más rápido</span>
                    <span className="text-red-500"> que nunca</span>
                </h1>


               
                </div>
            </div>
    </div>
  );
}

export default LandingPageHeader;