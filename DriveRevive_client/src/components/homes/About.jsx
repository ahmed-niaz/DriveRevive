import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <main className="container mx-auto my-28">
      <div className="card lg:card-side flex gap-24">
        <div className="w-11/12 mx-auto lg:w-1/2 relative">
          <img className="w-3/4 rounded-lg" src={person} alt={person} />
          <img
            className="w-1/2 absolute right-5 top-1/2 border-8 rounded-lg border-[#FF3811]"
            src={parts}
            alt={parts}
          />
        </div>
        <div className="w-3/4 mx-auto lg:w-1/2 flex flex-col  justify-center space-y-4">
          <h2 className="card-title text-[#FF3811] text-2xl font-bold">About Us</h2>
          <h1 className="text-4xl font-extrabold w-full lg:w-1/2">
            We are qualified & of experience in this field
          </h1>
          <div className="w-full lg:w-3/4">
            <p>
              In the realm of automotive care, experience is key, and at our car
              servicing company, expertise is our hallmark. With a seasoned team
              of qualified professionals, we bring a wealth of knowledge and
              proficiency to every service we provide.
            </p>
            <p>
              When you choose our car servicing company, you`re choosing peace
              of mind. Trust in our experience, rely on our expertise, and
              experience the difference that quality care can make for your
              vehicle.
            </p>
          </div>
          <div className="card-actions ">
            <button className="btn glass bg-[#FF3811] text-white">
              get more info
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
