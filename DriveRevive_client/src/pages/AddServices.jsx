import checkout from "../assets/images/checkout/checkout.png";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

const AddServices = () => {
    return (
        <main>
        <Navbar />
        <div className="container mx-auto">
          <div
            className="w-full h-[300px] rounded-lg bg-cover bg-no-repeat mt-8 "
            style={{ backgroundImage: `url(${checkout})` }}
          >
            <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full rounded-lg">
              <h2 className="text-white flex items-center h-full ml-32 font-extrabold text-5xl">
                Add New Services
              </h2>
            </div>
          </div>
          <div className="w-full my-32 bg-gray-200 rounded-lg  py-32">
            <form className="card-body space-y-4">
              <div className="flex items-center justify-center gap-4">
                <div className="form-control">
                  <input
                    type="text"
                    name="service_name"
                    placeholder="service_name"
                    className="input input-bordered w-[460px]"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="number"
                    name="service_price"
                    placeholder="Service Price"
                    className="input input-bordered w-[460px]"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="form-control">
                  <input
                    type="date"
                    name="date"
                    placeholder="Service Schedule"
                    className="input input-bordered w-[460px]"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="service_type"
                    placeholder="Service Type"
                    className="input input-bordered w-[460px]"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <textarea
                name="description"
                  className="textarea textarea-bordered w-[940px] min-h-[240px]"
                  placeholder="Bio"
                ></textarea>
              </div>
              <div className="form-control mt-6  flex items-center justify-center">
                <input
                  className="btn glass bg-[#DD3811] text-white font-bold hover:bg-black  w-[940px]"
                  type="submit"
                  value="Order Confirm"
                />
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </main>
    );
};

export default AddServices;