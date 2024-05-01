import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import Banner from '../components/homes/Banner'

const Home = () => {
  return (
    <main>
      <Navbar />
      <Banner/>
      <h2>Home</h2>
      <Footer/>
    </main>
  );
};

export default Home;
