import Navbar from "../components/SubPage/Navbar/Navbar";
import Protocol from "../components/SubPage/ProtocolPage/Protocol/Protocol";
import MainTopic from "../components/SubPage/ProtocolPage/MainTopic/MainTopic";
import Footer from "../components/SubPage/Footer/Footer";

const ProtocolPage = () => {
  return (
    <div>
      <Navbar />
      <Protocol />
      <MainTopic />
      <Footer />
    </div>
  );
};

export default ProtocolPage;
