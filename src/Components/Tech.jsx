import React from 'react';

const Tech = () => {
  return (
<>
<div className=''>
<h1 class=" px-10 mb-10 flex-col flex-row text-center sm:text-5xl text-2xl font-bold text-black">Technologies</h1></div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-24">
      {/* Vue.js */}
      <div className="bg-white border border-black p-4 rounded-lg">
        <div className="text-center">
          <img src="vj.png" alt="" className="w-24 h-24 mx-auto" />
          <p className="text-2xl font-bold mt-2">Vue.js</p>
        </div>
      </div>

      {/* React */}
      <div className="bg-white border border-black p-4 rounded-lg">
        <div className="text-center">
          <img src="R.png" alt="" className="w-24 h-24 mx-auto" />
          <p className="text-2xl font-bold mt-2">React</p>
        </div>
      </div>

      {/* Angular */}
      <div className="bg-white border border-black p-4 rounded-lg">
        <div className="text-center">
          <img src="A.png" alt="" className="w-24 h-24 mx-auto" />
          <p className="text-2xl font-bold mt-2">Angular</p>
        </div>
      </div>

      {/* TypeScript */}
      <div className="bg-white border border-black p-4 rounded-lg">
        <div className="text-center">
          <img src="T.png" alt="" className="w-24 h-24 mx-auto" />
          <p className="text-2xl font-bold mt-2">TypeScript</p>
        </div>
      </div>

      {/* CSS */}
      <div className="bg-white border border-black p-4 rounded-lg">
        <div className="text-center">
          <img src="TW.png" alt="" className="w-24 h-24 mx-auto" />
          <p className="text-2xl font-bold mt-2">CSS</p>
        </div>
      </div>

      {/* Figma */}
      <div className="bg-white border border-black p-4 rounded-lg ">
        <div className="text-center">
          <img src="F.png" alt="" className="w-24 h-24 mx-auto" />
          <p className="text-2xl font-bold mt-2">Figma</p>
        </div>
      </div>

      {/* Photoshop */}
      <div className="bg-white border border-black p-4 rounded-lg ">
        <div className="text-center">
          <img src="PS.png" alt="" className="w-24 h-24 mx-auto" />
          <p className="text-2xl font-bold mt-2">Photoshop</p>
        </div>
      </div>

      {/* Illustrator */}
      <div className="bg-white border border-black p-4 rounded-lg ">
        <div className="text-center">
          <img src="AI.png" alt="" className="w-24 h-24 mx-auto" />
          <p className="text-2xl font-bold mt-2">Illustrator</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Tech;
