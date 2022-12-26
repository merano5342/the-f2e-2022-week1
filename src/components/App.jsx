import Nav from "./Nav";
import Banner from "./Banner";
import SectionA from "./SectionA"
import SectionB from "./SectionB"
import SectionC from "./SectionC"
import SectionD from "./SectionD";
import SectionE from "./SectionE";
import SectionF from "./SectionF";
import SectionG from "./SectionG";
import SectionH from "./SectionH";
import Footer from "./Footer";


const App = () => {
  return (
    <div className="wrapper">
      <div className="content bg-purple">

        <Nav />
        <Banner />
        <SectionA />
        <SectionB />
        <SectionC />
        <SectionD />
        <SectionE />
        <SectionH />
        <SectionF />
        <SectionG />
        <Footer />

      </div >
    </div>

  );
};

export default App;
