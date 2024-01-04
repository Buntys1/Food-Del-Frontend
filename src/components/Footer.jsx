import React from "react";

const Footer = () => {
  const currentTime = new Date();

  const day = currentTime.getDate();
  const month = currentTime.getMonth() + 1;
  const year = currentTime.getFullYear();
  const time = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  return (
    <footer className="px-3 pt-4 lg:px-9 border-t-2 bg-gray-50">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a href="#" className="inline-flex items-center">
            <img
              src="https://mcqmate.com/public/images/logos/60x60.png"
              alt="logo"
              className="h-8 w-8"
            />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
              ShopLess
            </span>
          </a>
          <div className="mt-6 lg:max-w-xl">
            <div>
              <div className="flex justify-center items-center cursor-pointer">
                <div className="group before:absolute before:bg-sky-500 before:w-3 before:h-12 before:top-24 before:-right-2 before:-z-10 before:rounded-2xl before:shadow-inner before:shadow-gray-50 relative w-60 h-60 bg-sky-500 shadow-inner shadow-gray-50 flex justify-center items-center rounded-3xl">
                  <div className="w-56 h-56 bg-neutral-900 shadow-inner shadow-gray-50 flex justify-center items-center rounded-3xl">
                    <div className="flex flex-col items-center justify-center rounded-2xl bg-neutral-900 shadow-inner shadow-gray-50 w-52 h-52">
                      <div className="group-hover:duration-300 hover:opacity-100 opacity-0 before:absolute before:w-12 before:h-12 before:bg-orange-800 before:rounded-full before:blur-xl before:top-16 relative flex flex-col justify-around items-center w-44 h-40 bg-neutral-900 text-gray-50">
                        <span>{`${day}/${month}/${year}`}</span>
                        <span className="z-10 flex items-center text-6xl text-amber-600 text-shadow">
                          <span className="text-3xl font-bold text-gray-50 text-shadow-none">
                            {time}:{minutes}
                          </span>
                        </span>
                        <div className="text-gray-50 w-48 flex flex-row justify-evenly">
                          <span className="text-xs font-bold">89</span>
                          <div className="flex flex-row items-center">
                            <svg
                              className="w-5 h-5 fill-red-500 animate-bounce"
                              height="100"
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="0 0 100 100"
                              width="100"
                              x="0"
                              xmlns="http://www.w3.org/2000/svg"
                              y="0"
                            >
                              <path
                                d="M23,27.6a15.8,15.8,0,0,1,22.4,0L50,32.2l4.6-4.6A15.8,15.8,0,0,1,77,50L50,77,23,50A15.8,15.8,0,0,1,23,27.6Z"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                            {/* Other SVG elements */}
                          </div>
                        </div>
                      </div>
                      <span className="text-gray-700 text-lg font-light">
                        BOAT
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Popular Courses
          </p>
          <a href="#">UPSC - Union Public Service Commission</a>
          <a href="#">General Knowledge</a>
          <a href="#">MBA</a>
          <p className="text-base font-bold tracking-wide text-gray-900">
            Popular Topics
          </p>
          <a href="#">Human Resource Management</a>
          <a href="#">Operations Management</a>
          <a href="#">Marketing Management</a>
        </div>

        <div>
          <p className="text-base font-bold tracking-wide text-gray-900">
            COMPANY IS ALSO AVAILABLE ON
          </p>
          <div className="flex items-center gap-1 px-2">
            <a href="#" className="w-full min-w-xl">
              <img
                src="https://mcqmate.com/public/images/icons/playstore.svg"
                alt="Playstore Button"
                className="h-10"
              />
            </a>
            <a
              className="w-full min-w-xl"
              href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA"
            >
              <img
                src="https://mcqmate.com/public/images/icons/youtube.svg"
                alt="Youtube Button"
                className="h-28"
              />
            </a>
          </div>
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a href="#" title="send email">
              admin@company.com
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2023 Company. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="#"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy &amp; Cookies Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Disclaimer
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
