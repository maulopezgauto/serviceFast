import React from "react";
import delivery9 from '../../assets/serviceFast/delivery9.png'

function LandingPageHeader() {

  return (
    <div className="bg-white bg-no-repeat min-h-screen" style={{backgroundImage: `url(${delivery9})`, backgroundPositionX: 700, backgroundPositionY: -450}}>      
            <div className="relative z-10 flex min-h-screen items-center">
                <div className="w-full mx-1 px-6 text-left">
                <h1 className=" text-6xl font-extrabold text-black mb-6">
                    ServiceFast
                </h1>
                <h1 className="text-red-500 text-5xl font-bold">
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