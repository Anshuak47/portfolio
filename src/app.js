import { createRoot } from "react-dom/client";
import Header from "./components/Header";
const root = createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div className="app">
      <div className="header bg-[#111111] border-b-2 border-[#0b7325]">
        <Header />
      </div>
    </div>
  );
};
root.render(<AppLayout />);
