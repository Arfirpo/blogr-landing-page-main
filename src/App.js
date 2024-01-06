import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

export const menu = {
  1: {
    heading: "Product",
    items: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
  },
  2: {
    heading: "Company",
    items: ["About", "Team", "Blog", "Careers"],
  },
  3: {
    heading: "Connect",
    items: ["Contact", "Newsletter", "LinkedIn"],
  },
};

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-w-[320px] max-w-max max-h-max">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
