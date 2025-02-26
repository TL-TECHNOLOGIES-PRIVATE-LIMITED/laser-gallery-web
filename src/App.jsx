import { useEffect } from "react";
import { useWow } from "./hooks/useWow";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useMobileMenu } from "./hooks/useMobileMenu";
import { useSidebar } from "./hooks/useSidebar";
import { usePureCounter } from "./hooks/usePureCounter";

import { HomeFour } from "./pages/home/HomeFour";
import { ErrorPage } from "./pages/error/ErrorPage";
import { About } from "./pages/about/About";

function App() {
  useWow();
  useMobileMenu();
  useSidebar();
  usePureCounter();

  // on route change to top of the page
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeFour />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
