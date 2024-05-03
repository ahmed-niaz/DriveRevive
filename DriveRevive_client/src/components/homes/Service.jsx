import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard";
import Loader from "../Loader";

const Service = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:3000/services`)
      .then((res) => res.json())
      .then((data) => {
        setOffers(data);
        setLoading(false);
      });
  }, []);
  return (
    <main className="container mx-auto">
      <div className="flex flex-col items-center mb-10 space-y-3">
        <h2 className="text-[#FF3811] text-2xl font-bold">Service</h2>
        <h1 className="text-black text-4xl font-extrabold">Our Service Area</h1>
        <p className="w-2/4 text-center">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don`t look even slightly believable.{" "}
        </p>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {offers.map((service) => (
            <ServiceCard key={service._id} serve={service} />
          ))}
        </div>
      )}

      <div className="flex justify-center mt-8 mb-24">
        <button className="btn btn-outline border-[#DD3811]">
          More Service
        </button>
      </div>
    </main>
  );
};

export default Service;
