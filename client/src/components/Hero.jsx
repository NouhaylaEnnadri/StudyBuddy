import React from "react";

const Hero = () => {
  return (
    <div className="py-4 px-2 lg:py-10 lg:px-0">
      {" "}
      {/* Added padding for mobile */}
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {/* Left Section: Share Your Courses */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-primary opacity-30 lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-48 flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-4 pb-3 pt-4 sm:px-6 sm:pb-0 sm:pt-6">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Share Your Courses
                </p>
                <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                  Contribute to our community by sharing your course
                  experiences. Help others find the best courses that suit their
                  needs and inspire them to explore new learning opportunities!
                </p>
              </div>
              <div className="relative min-h-[15rem] w-full grow"></div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>

          {/* Middle Section: Course Reviews */}
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-secondary opacity-30 max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-48 flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-4 pt-4 sm:px-6 sm:pt-6">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Course Reviews
                </p>
                <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                  Read detailed reviews from fellow students to make informed
                  decisions about your next course. Discover what others loved
                  and learn from their insights.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>

          {/* Right Section: Discover New Learning Paths */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-accent opacity-30"></div>
            <div className="relative flex h-48 flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-4 pt-4 sm:px-6 sm:pt-6">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Discover New Learning Paths
                </p>
                <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                  Explore new subjects and skill sets tailored to your
                  interests. Find recommended courses based on trending topics
                  and personal preferences!
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>

          {/* Bottom Section: Engage with Your Learning Community */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-primary opacity-30 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-48 flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-4 pb-3 pt-4 sm:px-6 sm:pb-0 sm:pt-6">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Engage with Your Learning Community
                </p>
                <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                  Join a vibrant community of learners sharing knowledge,
                  experiences, and inspiration. Help others in their educational
                  journey while enhancing your own!
                </p>
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
