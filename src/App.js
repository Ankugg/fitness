import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Hero/Programs/Programs";
import Join from "./components/Join/Join";
import Plans from "./components/Plans/Plans";
import Reason from "./components/Reasons/Reason";
import Testimonial from "./components/Testimonials/Testimonial";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reason />
      <Plans />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
