import { Routes, Route } from "react-router-dom";
import { Game } from "../../pages/Game";
import { Main } from "../../pages/Main";
import { NotFound } from "../../pages/NotFound";
import { Rules } from "../../pages/Rules";

export const AppRoutes = () => {
 return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound />} />
      <Route path="rules" element={<Rules />} />
      <Route path="game" element={<Game />} />
      {/* <Route path="statistic" element={<Invoices />} /> */}
    </Routes>
 );
};