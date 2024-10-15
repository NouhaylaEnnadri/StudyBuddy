import React from "react";

const Hero = () => {
  return (
    <div className="py-4 px-2 lg:py-10 lg:px-0">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {/* Left Section: Favorite Books */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-primary opacity-30 lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-48 flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-4 pb-3 pt-4 sm:px-6 sm:pb-0 sm:pt-6">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Favorite Books
                </p>
                <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                  Explore some of the books I love, from timeless classics to modern masterpieces.
                </p>
                <ul className="list-disc ml-4 text-sm text-gray-600">
                  <li>The Catcher in the Rye</li>
                  <li>1984 by George Orwell</li>
                </ul>
              </div>
              <div className="relative min-h-[15rem] w-full grow"></div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>

          {/* Middle Section: Anime Quotes */}
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-secondary opacity-30 max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-48 flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-4 pt-4 sm:px-6 sm:pt-6">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Anime Quotes
                </p>
                <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                  "I'll take a potato chip... and eat it!" - Light Yagami, *Death Note*
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>

          {/* Right Section: Recipe Categories */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-accent opacity-30"></div>
            <div className="relative flex h-48 flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-4 pt-4 sm:px-6 sm:pt-6">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Explore Recipe Categories
                </p>
                <div className="flex space-x-4 mt-4">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-white">Thai</div>
                  <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center text-white">Italian</div>
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-black">Japanese</div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>

          {/* Bottom Section: TBR */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-primary opacity-30 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-48 flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-4 pb-3 pt-4 sm:px-6 sm:pb-0 sm:pt-6">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  To Be Read
                </p>
                <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                  Discover the books I'm planning to read next. Join me on this literary journey!
                </p>
                <ul className="list-disc ml-4 text-sm text-gray-600">
                  <li>"Sapiens" by Yuval Noah Harari</li>
                </ul>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
    