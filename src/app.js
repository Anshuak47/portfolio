import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Banner from "./components/Banner";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Banner />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
