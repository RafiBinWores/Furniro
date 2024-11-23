import testimonialImage from "../../assets/images/testimonial.png";
import testimonialImage2 from "../../assets/images/testimonial2.png";
import testimonialImage3 from "../../assets/images/testimonial3.png";
import { ArrowRight, ChevronRight } from "akar-icons";

function Testimonial() {
  return (
    <div className="bg-peach font-poppins mt-[70px] overflow-hidden py-56">
      <div className="container px-3 mx-auto">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div className="basis-2/5">
            <h3 className="pt-12 text-3xl font-bold capitalize md:pt-0 lg:text-5xl text-customGray-600">
              50+ Beautiful rooms inspiration
            </h3>
            <p className="mt-4 font-medium text-customGray-400">
              Our designer already made a lot of beautiful prototype of rooms
              that inspire you
            </p>

            <a
              className="inline-flex px-8 py-4 mt-6 font-semibold text-white bg-golden"
              href=""
            >
              Explore more
            </a>
          </div>

          {/* testimonial card section */}
          <div className="relative basis-3/5">
            <button className="absolute right-0 z-30 flex items-center justify-center bg-white rounded-full shadow-md size-12">
              <ChevronRight className="text-golden" />
            </button>
            {/* Testimonial active card */}
            <div className="absolute inset-0 right-0 flex items-center w-screen gap-6 ">
              <div className="w-[404px] h-[582px] relative">
                <img
                  className="w-full h-full"
                  src={testimonialImage}
                  alt="Image"
                />
                {/* active card content */}
                <div className="absolute flex bottom-8 left-8">
                  <div className="w-[217px] h-[130px] bg-white/70 font-poppins">
                    <div className="pt-6 ps-6">
                      <div className="flex items-center gap-2 mb-2">
                        <p className="font-semibold text-customGray-400">01</p>
                        <hr className="w-7 border-customGray-400" />
                        <p className="font-semibold text-customGray-400">
                          Bed Room
                        </p>
                      </div>
                      <p className="font-semibold text-[28px] text-customGray-600">
                        Inner Peace
                      </p>
                    </div>
                  </div>
                  {/* active card link */}
                  <a
                    href=""
                    className="flex items-center justify-center mt-auto text-white size-12 bg-golden"
                  >
                    <ArrowRight />
                  </a>
                </div>
              </div>

              {/* testimonial cards */}
              <div className="flex flex-col gap-10">
                <div className="flex gap-6">
                  <div className="w-[372px] h-[486px] object-cover">
                    <img src={testimonialImage2} alt="Image" />
                  </div>
                  <div className="w-[372px] h-[486px] object-cover">
                    <img src={testimonialImage3} alt="Image" />
                  </div>
                </div>

                {/* testimonial card active dots */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center justify-center border rounded-full size-7 border-golden">
                    <div className="rounded-full size-3 bg-golden"></div>
                  </div>
                  <div className="rounded-full size-3 bg-customGray-200"></div>
                  <div className="rounded-full size-3 bg-customGray-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
