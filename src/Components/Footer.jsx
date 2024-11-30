import React from 'react';

function Footer() {
  return (
    <div className="bg-cover text-white bg-center bg-no-repeat py-16 mt-24" style={{ backgroundImage: 'url("img.png")' }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <span className="text-3xl font-bold">LOGO</span>
            <p className='mb-4 mt-6'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
            <div className="mt-10 flex space-x-4">
              <img src="in.png" alt="LinkedIn" className="w-10 h-10" />
              <img src="fb.png" alt="Facebook" className="w-10 h-10" />
              <img src="ln.png" alt="Instagram" className="w-10 h-10" />
              <img src="twi.png" alt="Twitter" className="w-10 h-10" />
            </div>
          </div>

          {/* Second */}         
          <div className="text-white">
            <p className="font-semibold text-2xl mb-4">Quick Links</p>
            <ul className="space-y-2">
              <li>Web Design/Development</li>              
              <li>App Development</li>
              <li>UI/UX Design</li>
              <li>Flutter Download</li>
              <li>React Js Developer</li>              
              <li>Android Developer</li>
            </ul>
          </div>

          {/* Third */}
          <div>
            <h2 className="font-semibold text-2xl mb-4">Popular Posts</h2>
            <div className="flex flex-col space-y-4 mt-4">
              <div className="flex">
                <img
                  src="Rectangle 34.png"
                  alt="Post 1"
                  className="w-16 h-16 rounded-md"
                />
                <div className="ml-4 text-sm text-white">
                  Lorem Ipsum Simply Dummy Text Of The Printing
                </div>
              </div>

              <div className="flex">
                <img
                  src="rec2.png"
                  alt="Post 2"
                  className="w-16 h-16 rounded-md"
                />
                <div className="ml-4 text-sm text-white ">
                  Lorem Ipsum Simply Dummy Text Of The Printing
                </div>
              </div>
            </div>
          </div>

          {/* Fourth */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
            <ul>
              <li className="flex items-center space-x-3 mb-4">
                <img src="loc.png" alt="Location" className="w-8 h-8" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm text-semibold">2/20, Astern Road, USA</p>
                </div>
              </li>
              <li className="flex items-center space-x-3 mb-4">
                <img src="mes.png" alt="Email" className="w-8 h-8" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-sm text-semibold">example@example.com</p>
                </div>
              </li>
              <li className="flex items-center space-x-3 mb-4">
                <img src="call.png" alt="Phone" className="w-8 h-8" />
                <div>
                  <p className="font-semibold">Phone Us</p>
                  <p className="text-sm text-semibold">+880 320 432 242</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
