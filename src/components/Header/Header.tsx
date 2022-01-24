import { Navbar } from "../Navbar/Navbar";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title text-center" translate="no">
        Moobli
      </h1>
      <Navbar />
    </header>
  );
};
