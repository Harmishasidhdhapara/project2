import React from 'react';

const Testimonials = () => {
  return (
    <>
      <div>
        <h1 className="px-10 text-center sm:text-5xl text-2xl font-bold text-black">
          Trusted by millions of<br />worldwide customers
        </h1>
      </div>

      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap justify-center -m-4">

              {/* Testimonial 1 */}
              <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
                <div className="h-full p-8 border-b-2 border-black sm:border-r sm:border-black lg:border-b-0">
                  {/* 5-Star Image */}
                  <div className="flex justify-center mb-4">
                    <img src="Frame (6).png" alt="5-Star Rating" className="w-24" />
                  </div>
                  <p className="leading-relaxed mb-6 text-black">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                  </p>
                  <div className="inline-flex items-center justify-center text-center">
                    <span className="flex flex-col items-center">
                      <span className="title-font font-semibold text-blue-600 block mx-24 ">Jhon Thidiya</span>
                      <span className="text-blue-600 font-bold text-sm">CEO</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
                <div className="h-full p-8 border-b-2 border-black sm:border-r sm:border-black lg:border-b-0">
                  {/* 5-Star Image */}
                  <div className="flex justify-center mb-4">
                    <img src="Frame (6).png" alt="5-Star Rating" className="w-24" />
                  </div>
                  <p className="leading-relaxed mb-6 text-black">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                  </p>
                  <div className="inline-flex items-center justify-center text-center">
                    <span className="flex flex-col items-center">
                      <span className="title-font font-semibold text-blue-600 block mx-24">Jhon Thidiya</span>
                      <span className="text-blue-600 font-bold text-sm">CEO</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
                <div className="h-full p-8 border-b-2 border-black sm:border-r sm:border-black lg:border-b-0">
                  {/* 5-Star Image */}
                  <div className="flex justify-center mb-4">
                    <img src="Frame (6).png" alt="5-Star Rating" className="w-24" />
                  </div>
                  <p className="leading-relaxed mb-6 text-black">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                  </p>
                  <div className="inline-flex items-center justify-center text-center">
                    <span className="flex flex-col items-center">
                      <span className="title-font font-semibold text-blue-600  block mx-24">John Thidiya</span>
                      <span className="text-blue-600 font-bold text-sm">CEO</span>
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonials;
