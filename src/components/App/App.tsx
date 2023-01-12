import React, { Suspense } from "react";
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
        <Home />
      </div>
    </>
  );
}

export default App;
