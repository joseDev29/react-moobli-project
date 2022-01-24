import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";

export const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
      </main>
    </div>
  );
};
