import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
<<<<<<< HEAD
    <div className="flex flex-col min-h-screen" dir="rtl">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="jobs" element={<Jobs />} />
        </Routes>
      </main>
      <Footer />
    </div>
=======
    <Router>
      <div className="flex flex-col min-h-screen " dir="rtl">
        <Header />
        <main className="flex-grow">
                     <Route path="/" element={<Home />} />

    <Routes>                     <Route path="/" element={<Home />} />

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/jobs" element={<Jobs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
>>>>>>> 5e538bef0c2bc78363380e607b1ebc48b50cbd36
  );
}

export default App;
