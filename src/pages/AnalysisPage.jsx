import Navbar from "../components/SubPage/Navbar/Navbar";
import Analysis from "../components/SubPage/AnalysisPage/Analysis/Analysis";
import MainTopic from "../components/SubPage/AnalysisPage/MainTopic/MainTopic";
import Footer from "../components/SubPage/Footer/Footer";

const AnalysisPage = () => {
  return (
    <div>
      <Navbar />
      <Analysis />
      <MainTopic />
      <Footer />
    </div>
  );
};

export default AnalysisPage;
