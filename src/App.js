import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import About from "./pages/About";
import Message from "./pages/Message";
// import Faqs from "./pages/Faqs";
import Appointment from "./pages/Appointment";
import ProjectOverview from "./components/ProjectOverview";
import Projects from "./pages/Projects";
// import ChatModal from "./components/ChatModal";
// import { AiOutlineMessage } from "react-icons/ai";
import Redirect from "./components/Redirect";
import { Helmet } from "react-helmet";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Helmet>
        <title>Dr. Drain Rooter and Hydro Jett</title>
        <meta
          name="description"
          content="Dr. Drain Rooter and Hydro Jett offers expert plumbing services in Burbank, CA. Contact us today for a free quote!"
        />
        <meta
          name="keywords"
          content="plumbing services, Burbank, California, Dr. Drain Rooter and Hydro Jett |have knowledgeable and experienced technicians, offer competitive pricing, and use high-quality materials. |Experience the Best Plumbing Services in Burbank with Dr. Drain Rooter and Hydro Jett!"
        />
        <meta name="author" content="Dr. Drain Rooter and Hydro Jett" />
      </Helmet>
      <div className="box-sizing:border-box bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/about" element={<About />} />
          <Route path="/message" element={<Message />} />
          {/* <Route path="/faqs" element={<Faqs />} /> */}
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/project-overview/:title"
            element={<ProjectOverview />}
          />
          <Route path="/success" element={<Redirect />} />
        </Routes>
        {/* <AiOutlineMessage
          className="chat cursor-pointer  p-3 fixed
          bottom-20 right-4 h-16 w-16 z-50 rounded-full"
          onClick={() => setOpen(!open)}
        />
        {open && <ChatModal />} */}
      </div>
    </>
  );
}

export default App;
