import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import Banner from '../components/homes/Banner'
import About from "../components/homes/About";
import Service from "../components/homes/Service";



const Home = () => {
  return (
    <main>
      <Navbar />
      <Banner/>
      <About/>
      <Service/>
      <Footer/>
    </main>
  );
};


export default Home;