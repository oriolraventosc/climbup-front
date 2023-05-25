import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFoundPage from "../../pages/404Page/404page";
import Home from "../../pages/Home/Home";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import { useAppSelector } from "../../redux/hooks";
import Loading from "../Loading/Loading";
import useToken from "../../hooks/useToken/useToken";
import DetailsPage from "../../pages/Details/DetailsPage";
import PrivatePage from "../../pages/PrivatePage/PrivatePage";

function App() {
  const loading = useAppSelector((uiReducer) => uiReducer.uiReducer.loading);
  const { getToken } = useToken();
  getToken();
  return (
    <>
      <Suspense fallback={<Loading />} />
      {loading && <Loading />}

      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/tus-rocodromos" element={<PrivatePage />} />
          <Route path="/rocodromo/:id" element={<DetailsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
