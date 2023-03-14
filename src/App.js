import React, { useEffect } from "react";
import AllRoutes from './router/AllRoutes';
import AOS from "aos";
import "aos/dist/aos.css";
import "photoswipe/dist/photoswipe.css";
import { ToastContainer } from "react-toastify";

function App() {

  useEffect(() => {
    AOS.init(

      // {
      //   offset: 200,
      //   duration: 650,
      //   easing: 'ease-in-sine',
      //   delay: 100,
      // }

    );
  }, []);
  return (
    <div className="tokyo_tm_all_wrap">
      {/* routes */}
      <AllRoutes />
      <ToastContainer />


    </div>
  );
}

export default App;
