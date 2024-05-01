import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Pagination } from "swiper/modules";
import one from "../../assets/images/banner/1.jpg";
import two from "../../assets/images/banner/2.jpg";
import three from "../../assets/images/banner/3.jpg";
import four from "../../assets/images/banner/4.jpg";
import five from "../../assets/images/banner/5.jpg";
import six from "../../assets/images/banner/6.jpg";
const Banner = () => {
  return (
    <main className="container mx-auto mt-20">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${one})` }}
            className="h-[600px] bg-cover rounded-xl"
          >
            <div className=" text-white flex flex-col justify-center h-[600px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
              <h1 className="font-extrabold text-7xl w-1/3 mb-8 ml-16">
                Affordable Price For Car Servicing
              </h1>
              <p className="w-1/3 font-medium mb-8 ml-16">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-6 ml-16">
                <button className="btn glass bg-[#FF3811] text-white">
                  Discover More
                </button>
                <button className="btn hover:glass btn-outline font-bold hover:bg-[#FF3811] bg-none border-[#FF3811] text-white ">
                  Latest Projects
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${one})` }}
            className="h-[600px] bg-cover rounded-xl"
          >
            <div className=" text-white flex flex-col justify-center h-[600px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
              <h1 className="font-extrabold text-7xl w-1/3 mb-8 ml-16">
                Affordable Price For Car Servicing
              </h1>
              <p className="w-1/3 font-medium mb-8 ml-16">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-6 ml-16">
                <button className="btn glass bg-[#FF3811] text-white">
                  Discover More
                </button>
                <button className="btn hover:glass btn-outline font-bold hover:bg-[#FF3811] bg-none border-[#FF3811] text-white ">
                  Latest Projects
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${two})` }}
            className="h-[600px] bg-cover rounded-xl"
          >
            <div className=" text-white flex flex-col justify-center h-[600px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
              <h1 className="font-extrabold text-7xl w-1/3 mb-8 ml-16">
                Affordable Price For Car Servicing
              </h1>
              <p className="w-1/3 font-medium mb-8 ml-16">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-6 ml-16">
                <button className="btn glass bg-[#FF3811] text-white">
                  Discover More
                </button>
                <button className="btn hover:glass btn-outline font-bold hover:bg-[#FF3811] bg-none border-[#FF3811] text-white ">
                  Latest Projects
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${three})` }}
            className="h-[600px] bg-cover rounded-xl"
          >
            <div className=" text-white flex flex-col justify-center h-[600px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
              <h1 className="font-extrabold text-7xl w-1/3 mb-8 ml-16">
                Affordable Price For Car Servicing
              </h1>
              <p className="w-1/3 font-medium mb-8 ml-16">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-6 ml-16">
                <button className="btn glass bg-[#FF3811] text-white">
                  Discover More
                </button>
                <button className="btn hover:glass btn-outline font-bold hover:bg-[#FF3811] bg-none border-[#FF3811] text-white ">
                  Latest Projects
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${four})` }}
            className="h-[600px] bg-cover rounded-xl"
          >
            <div className=" text-white flex flex-col justify-center h-[600px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
              <h1 className="font-extrabold text-7xl w-1/3 mb-8 ml-16">
                Affordable Price For Car Servicing
              </h1>
              <p className="w-1/3 font-medium mb-8 ml-16">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-6 ml-16">
                <button className="btn glass bg-[#FF3811] text-white">
                  Discover More
                </button>
                <button className="btn hover:glass btn-outline font-bold hover:bg-[#FF3811] bg-none border-[#FF3811] text-white ">
                  Latest Projects
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${five})` }}
            className="h-[600px] bg-cover rounded-xl"
          >
            <div className=" text-white flex flex-col justify-center h-[600px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
              <h1 className="font-extrabold text-7xl w-1/3 mb-8 ml-16">
                Affordable Price For Car Servicing
              </h1>
              <p className="w-1/3 font-medium mb-8 ml-16">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-6 ml-16">
                <button className="btn glass bg-[#FF3811] text-white">
                  Discover More
                </button>
                <button className="btn hover:glass btn-outline font-bold hover:bg-[#FF3811] bg-none border-[#FF3811] text-white ">
                  Latest Projects
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${six})` }}
            className="h-[600px] bg-cover rounded-xl"
          >
            <div className=" text-white flex flex-col justify-center h-[600px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
              <h1 className="font-extrabold text-7xl w-1/3 mb-8 ml-16">
                Affordable Price For Car Servicing
              </h1>
              <p className="w-1/3 font-medium mb-8 ml-16">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-6 ml-16">
                <button className="btn glass bg-[#FF3811] text-white">
                  Discover More
                </button>
                <button className="btn hover:glass btn-outline font-bold hover:bg-[#FF3811] bg-none border-[#FF3811] text-white ">
                  Latest Projects
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </main>
  );
};

export default Banner;
