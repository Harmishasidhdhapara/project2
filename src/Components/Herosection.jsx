import React from "react";


const Herosection = () => {
  return (
    <>
    
    <div>
    <div className="container  sm:text-center p-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left side*/}
        <div className="text-center md:text-left">
          <p className="text-blue-600 text-3xl font-bold">About Our Company</p><br/>
          <h1 className="text-5xl font-bold mb-4">Web Design SEO &<br/> Internet Marketing For<br/> <span className="text-blue-600">Your Business</span></h1>
          <p className="text-gray-700 mb-3 ">
            Lorem Ipsum Is Simply Dummy Text oF The Printing And Typesetting Industry<br/>.Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The<br/> When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
          </p>
          <button className="px-7 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ">
            Read More
          </button>
        </div>

        {/* Right side */}
        <div className="flex justify-center md:justify-center">
          <img src="image2.png" alt="" className=" sm:text-center w-full" />
        </div>
      </div>
    </div>
    </div>

  
    </>
  );
};

export default Herosection;
