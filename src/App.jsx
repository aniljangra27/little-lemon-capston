import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home/Home";
import Reservations from "./components/pages/Reservations/Reservations";
import ConfirmedReservation from "./components/pages/Reservations/confirmedReservation";
import NotFound from "./components/pages/NotFound/NotFound";
import Login from "./components/pages/Login/Login";
import "./index.css";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route
            path="/confirmedReservation"
            element={<ConfirmedReservation />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
