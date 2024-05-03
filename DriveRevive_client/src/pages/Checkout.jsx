import Navbar from "./shared/Navbar";
import checkout from "../assets/images/checkout/checkout.png";
import { useLoaderData } from "react-router-dom";
import Footer from "./shared/Footer";
import useAuth from "../hooks/useAuth";
import Swal from 'sweetalert2'
const Checkout = () => {
  const service = useLoaderData();
console.log(service,);
  const {_id, price,title,img } = service;
  const { user } = useAuth();
  const handleCheckOut = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const due_amount = form.due_amount.value;
    const description = form.description.value;

    const checkoutInfo = {
      customer_name: name,
      img,
      service:title,
      service_id: _id,
      email,
      date,
      price: due_amount,
      description,
    };
    console.log(checkoutInfo);
    fetch(`http://localhost:3000/checkout`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(checkoutInfo)
    })
    .then(res => res.json())
    .then(data =>{
        
        if(data.insertedId){
            Swal.fire({
                title: "Success",
                text: "Order Confirm",
                icon: "success"
              });
        }
        form.reset()
    })
  };
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
              Check Out
            </h2>
          </div>
        </div>
        <div className="w-full my-32 bg-gray-200 rounded-lg  py-32">
          <form className="card-body space-y-4" onSubmit={handleCheckOut}>
            <div className="flex items-center justify-center gap-4">
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.name}
                  placeholder="Enter Your Name"
                  className="input input-bordered lg:w-[460px]"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  defaultValue={user?.email}
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered lg:w-[460px]"
                  required
                  readOnly={user?true:false}
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="form-control">
                <input
                  type="date"
                  name="date"
                  placeholder="Service Schedule"
                  className="input input-bordered lg:w-[460px]"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="due_amount"
                  defaultValue={"$" + price}
                  placeholder="Due Amount"
                  className="input input-bordered lg:w-[460px]"
                  required
                  readOnly
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <textarea
                name="description"
                className="textarea textarea-bordered w-[940px] min-h-[240px]"
                placeholder="Your Message"
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

export default Checkout;
