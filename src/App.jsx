import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Home from "./components/home/home";
import Fam100 from "./components/fam100/fam100";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <Router basename="/bani-rasyad">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Fam100 />} />
      </Routes>
    </Router>
  );
}

export default App;
