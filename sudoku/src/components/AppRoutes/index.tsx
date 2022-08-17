import { Routes, Route } from "react-router-dom";
import { Main } from "../../pages/Main";
import { Rules } from "../../pages/Rules";

export const AppRoutes = () => {
 return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="rules" element={<Rules />} />
      {/* <Route path="statistic" element={<Invoices />} /> */}
    </Routes>
 );
};