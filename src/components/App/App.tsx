import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFoundPage from "../../pages/404Page/404page";
import Home from "../../pages/Home/Home";
import { useAppSelector } from "../../redux/hooks";
import Loading from "../Loading/Loading";

function App() {
  const loading = useAppSelector((uiReducer) => uiReducer.uiReducer.loading);
  return (
    <>
      <Suspense fallback={<Loading />} />
      {loading && <Loading />}

      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
