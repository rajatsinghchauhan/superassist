import "./App.css";
import Navbar from "./components/Navbar";
import HeroPage from "./components/HeroPage";
import UsedBy from "./components/UsedBy";
import HowitWorks from "./components/HowitWorks";
import ReviewCard from "./components/ReviewCard";
import InstallPage from "./components/InstallPage";
import ReviewCard2 from "./components/ReviewCard2";
import ReviewCard3 from "./components/ReviewCard3";
import Feature from "./components/Feature";
import MainReview from "./components/MainReview";
import Faq from "./components/Faq";
import Custumer from "./components/Custumer";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroPage />
      <UsedBy />
      <HowitWorks />
      <ReviewCard />
      <InstallPage />
      <Feature />
      <ReviewCard2 />
      <InstallPage />
      <ReviewCard3 />
      <MainReview />

      <Custumer />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
