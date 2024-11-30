import React from 'react';

const Services = () => {
  return (
    <>
      <div className="px-5 py-10">
        <h1 className="flex-col items-center text-center sm:text-5xl text-2xl font-bold title-font text-gray-900">
          All the digital services that<br />are convenient for you
        </h1>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap">
              {/* Service 1: UI/UX Designer */}
              <div className="p-4 lg:w-1/2 sm:w-full">
                <div className="flex flex-col sm:flex-row border border-black rounded-lg p-8">
                  <div className="flex justify-center items-center mb-4 sm:mb-0">
                    <img
                      src="Group 323.png"
                      className="max-w-full h-auto p-3"
                      alt="UI/UX Designer"
                    />
                  </div>
                  <div className="flex-grow sm:ml-4">
                    <h2 className="text-gray-900 text-2xl font-bold mb-3">
                      UI/UX Designer
                    </h2>
                    <p className="leading-relaxed text-base text-gray-500">
                      Lorem Ipsum Is Simply Dummy Text Of The Printing Industry's
                      Standard Dummy.
                    </p>
                    <a
                      href="#"
                      className="mt-3 text-indigo-500 font-bold inline-flex items-center underline"
                    >
                      Find Out More
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 2: Php Laravel Development */}
              <div className="p-4 lg:w-1/2 sm:w-full">
                <div className="flex flex-col sm:flex-row border border-black rounded-lg p-8">
                  <div className="flex justify-center items-center mb-4 sm:mb-0">
                    <img
                      src="Group 324.png"
                      className="max-w-full h-auto p-3"
                      alt="Php Laravel Development"
                    />
                  </div>
                  <div className="flex-grow sm:ml-4">
                    <h2 className="text-gray-900 text-2xl font-bold mb-3">
                      Php Laravel Development
                    </h2>
                    <p className="leading-relaxed text-base text-gray-500">
                      Lorem Ipsum Is Simply Dummy Text Of The Printing Industry's
                      Standard Dummy.
                    </p>
                    <a
                      href="#"
                      className="mt-3 text-indigo-500 font-bold inline-flex items-center underline"
                    >
                      Find Out More
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 3: Graphic Designer */}
              <div className="p-4 lg:w-1/2 sm:w-full">
                <div className="flex flex-col sm:flex-row border border-black rounded-lg p-8">
                  <div className="flex justify-center items-center mb-4 sm:mb-0">
                    <img
                      src="Group 325.png"
                      className="max-w-full h-auto p-3"
                      alt="Graphic Designer"
                    />
                  </div>
                  <div className="flex-grow sm:ml-4">
                    <h2 className="text-black text-2xl font-bold mb-3">
                      Graphic Designer
                    </h2>
                    <p className="leading-relaxed text-base text-gray-500">
                      Lorem Ipsum Is Simply Dummy Text Of The Printing Industry's
                      Standard Dummy.
                    </p>
                    <a
                      href="#"
                      className="mt-3 text-indigo-500 font-bold inline-flex items-center underline"
                    >
                      Find Out More
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 4: Web Design & App Development */}
              <div className="p-4 lg:w-1/2 sm:w-full">
                <div className="flex flex-col sm:flex-row border border-black rounded-lg p-8">
                  <div className="flex justify-center items-center mb-4 sm:mb-0">
                    <img
                      src="Group 326.png"
                      className="max-w-full h-auto p-3"
                      alt="Web Design & App Development"
                    />
                  </div>
                  <div className="flex-grow sm:ml-4">
                    <h2 className="text-black text-2xl font-bold mb-3">
                      Web Design & App Development
                    </h2>
                    <p className="leading-relaxed text-base text-gray-500">
                      Lorem Ipsum Is Simply Dummy Text Of The Printing Industry's
                      Standard Dummy.
                    </p>
                    <a
                      href="#"
                      className="mt-3 text-indigo-500 font-bold inline-flex items-center underline"
                    >
                      Find Out More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="px-10 mb-10 text-center sm:text-5xl text-2xl font-bold text-black">
              Culture Rooted In Growth,<br />Fuelled By Creativity
            </h2>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
