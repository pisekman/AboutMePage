import React from "react";

import { Routes, Route } from "react-router-dom";
import { HomePanel } from "../components/HomePanel";
import NotFound from "../NotFound";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePanel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
