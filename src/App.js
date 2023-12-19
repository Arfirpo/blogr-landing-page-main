import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-w-[320px]">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
