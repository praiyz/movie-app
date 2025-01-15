import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import MovieDetails from "./pages/MovieDetails.jsx"
import NotFound from "./pages/NotFound.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import SideBar from "./components/SideBar.jsx"

const App = () => {
  return (
    <div className="bg-[#212121] text-[#e2e2e2] h-full flex flex-col ">
      <Header />

      <div className="flex"></div>
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<movieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;