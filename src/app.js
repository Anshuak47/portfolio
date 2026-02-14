import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Hero from "./components/Hero";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
