import Navbar from "../components/Navbar/Navbar";
import Header from "../components/MainPage/Header/Header";
import Steps from "../components/MainPage/Steps/Steps";
import Worth from "../components/MainPage/Worth/Worth";
import Faults from "../components/MainPage/Faults/Faults";
import Offer from "../components/MainPage/Offer/Offer";
import Contact from "../components/MainPage/Contact/Contact";
import Footer from "../components/Footer/Footer";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Worth />
      <Steps />
      <Faults />
      <Offer />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainPage;
